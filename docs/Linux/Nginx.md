# Nginx

Nginx 是一款高性能的 HTTP 服务器，常用做为反向代理服务器，负载均衡服务器，以及 HTTP 缓存服务器。

## 动静分离

- 静态资源（HTML、CSS、JS、图片等）：通过 Nginx 反向代理服务器，将静态资源通过 CDN 加速，加快访问速度。
- 动态资源（PHP、Java、Python、Node.js 等）：通过 Nginx 反向代理服务器

## 安装

```bash

# 下载依赖
yum install gcc-c++ pcre-devel openssl-devel zlib-devel -y

# gcc-c++ 编译依赖
# pcrce 正则依赖
# openssl 加密依赖
# zlib 压缩依赖

# 下载
wget http://nginx.org/download/nginx-1.14.2.tar.gz

# 解压
tar -zxvf nginx-1.14.2.tar.gz

# 进入解压后的目录
cd nginx-1.14.2

# 编译

# 执行nginx-configure命令，生成配置文件，并进行编译

./configure --prefix=/usr/local/nginx
--with-http_ssl_module --with-http_v2_module --with-http_gzip_static_module --with-http_realip_module --with-http_stub_status_module --with-http_flv_module --with-http_mp4_module --with-http_sub_module --with-http_xslt_module --with-http_

# make语句编译

make && make install

# 启动

/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

# 停止

/usr/local/nginx/sbin/nginx -s stop

# 重启

/usr/local/nginx/sbin/nginx -s reload

# 停止并删除

/usr/local/nginx/sbin/nginx -s stop && rm -rf /usr/local/nginx
```

## 整体理解

### 全局块

从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配 置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以 及配置文件的引入等

### events 块

events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否 允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等

### http 块

算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。
需要注意的是：http 块也可以包括 http 全局块、server 块。

### http 全局块

http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。

### server 块

这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，
该技术的产生是为了 节省互联网服务器硬件成本。

每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。
而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。

### 全局 server 块

最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。

### location 块

一个 server 块可以配置多个 location 块。
这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），
对虚拟主机名称 （也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，
对特定的请求进行处理。 地址定向、数据缓 存和应答控制等功能，
还有许多第三方模块的配置也在这里进行。

### 配置说明

```conf
#nginx进程数，建议设置为等于CPU总核心数。
worker_processes  1;
# 事件区块开始
events {
    #单个进程最大连接数（最大连接数=连接数*进程数）
    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。
    worker_connections  1024;
}
#设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    #include：导入外部文件mime.types，将所有types提取为文件，然后导入到nginx配置文件中
    include       mime.types;
     #默认文件类型
    default_type  application/octet-stream;
    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。
    #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。
    sendfile        on;
      #长连接超时时间，单位是秒
    keepalive_timeout  65;
    # 第一个Server区块开始，表示一个独立的虚拟主机站点
    server {
        # 提供服务的端口，默认80
        listen       80;
        # 提供服务的域名主机名
        server_name  localhost;
        #对 "/" 启用反向代理,第一个location区块开始
        location / {
            root   html;  #服务默认启动目录
            index  index.html index.htm; # 默认的首页文件，多个用空格分开
        }
         # 错误页面路由
        error_page   500 502 503 504  /50x.html; # 出现对应的http状态码时，使用50x.html回应客户
        location = /50x.html { # location区块开始，访问50x.html
            root   html;  # 指定对应的站点目录为html
        }
    }
}


```

## 配置

```bash

# 基本配置

# 主配置文件

# 配置文件默认路径：/usr/local/nginx/conf/nginx.conf

# 虚拟主机配置文件

# 配置文件默认路径：/usr/local/nginx/conf/vhost/default.conf

# 虚拟主机配置文件示例

server {
    listen 80;
    server_name www.example.com;
    root /usr/local/nginx/html;
    index index.html index.htm;
    charset utf-8;
    # 错误页面路由
    error_page 404 /404.html;
    location / {
        try_files $uri $uri/ /index.html; # 匹配到 / 路径时，尝试访问 index.html
    }
    location = /404.html { # 匹配到 /404.html 路径时，返回 404 页面
        root   html; # 指定对应的站点目录为html
    }
    # 设置静态资源缓存时间
    location ~.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {
        expires 30d;
    }
    location ~.*\.(js|css)?$ {
        expires 12h;
    }
    location ~.*\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {
        expires 12h;
    }
    location ~.*\.(js|css)?$ {
        expires 12h;
        access_log off;
        log_not_found off;
    }
    location ~ /\.ht {
        deny all;
    }
}

# 负载均衡配置

# 负载均衡配置文件

# 配置文件默认路径：/usr/local/nginx/conf/nginx.conf

# 负载均衡配置文件示例

upstream backend {
    server 127.0.0.1:8080;
    server 127.0.0.1:8081;
    server 127.0.0.1:8082;
}
server {
    listen 80;
    server_name www.example.com;
    location / {
        proxy_pass http://backend;
    }
}

# 缓存配置

# 缓存配置文件

# 配置文件默认路径：/usr/local/nginx/conf/nginx.conf

# 缓存配置文件示例

server {
    listen 80;
    server_name www.example.com;
    location / {
        root /usr/local/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
        add_header Cache-Control no-cache;
    }
}

# 反向代理配置

# 反向代理配置文件

# 配置文件默认路径：/usr/local/nginx/conf/nginx.conf

# 反向代理配置文件示例

server {
    listen 80;
    server_name www.example.com;
    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
```

##

[参考](https://blog.csdn.net/weixin_43239880/article/details/130841067)
