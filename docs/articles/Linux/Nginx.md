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
    location / {
        try_files $uri $uri/ /index.html;
    }
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
