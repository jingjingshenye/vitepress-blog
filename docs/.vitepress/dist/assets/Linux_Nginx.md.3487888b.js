import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9f730de1.js";const h=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/Nginx.md","filePath":"Linux/Nginx.md"}'),p={name:"Linux/Nginx.md"},o=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><p>Nginx 是一款高性能的 HTTP 服务器，常用做为反向代理服务器，负载均衡服务器，以及 HTTP 缓存服务器。</p><h2 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-label="Permalink to &quot;动静分离&quot;">​</a></h2><ul><li>静态资源（HTML、CSS、JS、图片等）：通过 Nginx 反向代理服务器，将静态资源通过 CDN 加速，加快访问速度。</li><li>动态资源（PHP、Java、Python、Node.js 等）：通过 Nginx 反向代理服务器</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载依赖</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-c++</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pcre-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssl-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># gcc-c++ 编译依赖</span></span>
<span class="line"><span style="color:#6A737D;"># pcrce 正则依赖</span></span>
<span class="line"><span style="color:#6A737D;"># openssl 加密依赖</span></span>
<span class="line"><span style="color:#6A737D;"># zlib 压缩依赖</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://nginx.org/download/nginx-1.14.2.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压</span></span>
<span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-zxvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx-1.14.2.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入解压后的目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx-1.14.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行nginx-configure命令，生成配置文件，并进行编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">./configure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--prefix=/usr/local/nginx</span></span>
<span class="line"><span style="color:#B392F0;">--with-http_ssl_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_v2_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_gzip_static_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_realip_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_stub_status_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_flv_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_mp4_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_sub_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_xslt_module</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-http_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># make语句编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">/usr/local/nginx/sbin/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">/usr/local/nginx/sbin/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">/usr/local/nginx/sbin/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">/usr/local/nginx/sbin/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载依赖</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-c++</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pcre-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssl-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib-devel</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># gcc-c++ 编译依赖</span></span>
<span class="line"><span style="color:#6A737D;"># pcrce 正则依赖</span></span>
<span class="line"><span style="color:#6A737D;"># openssl 加密依赖</span></span>
<span class="line"><span style="color:#6A737D;"># zlib 压缩依赖</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://nginx.org/download/nginx-1.14.2.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压</span></span>
<span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-zxvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx-1.14.2.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入解压后的目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx-1.14.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行nginx-configure命令，生成配置文件，并进行编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">./configure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--prefix=/usr/local/nginx</span></span>
<span class="line"><span style="color:#6F42C1;">--with-http_ssl_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_v2_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_gzip_static_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_realip_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_stub_status_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_flv_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_mp4_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_sub_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_xslt_module</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-http_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># make语句编译</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/usr/local/nginx/sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/usr/local/nginx/sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/usr/local/nginx/sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/usr/local/nginx/sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx</span></span></code></pre></div><h2 id="整体理解" tabindex="-1">整体理解 <a class="header-anchor" href="#整体理解" aria-label="Permalink to &quot;整体理解&quot;">​</a></h2><h3 id="全局块" tabindex="-1">全局块 <a class="header-anchor" href="#全局块" aria-label="Permalink to &quot;全局块&quot;">​</a></h3><p>从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配 置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以 及配置文件的引入等</p><h3 id="events-块" tabindex="-1">events 块 <a class="header-anchor" href="#events-块" aria-label="Permalink to &quot;events 块&quot;">​</a></h3><p>events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否 允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等</p><h3 id="http-块" tabindex="-1">http 块 <a class="header-anchor" href="#http-块" aria-label="Permalink to &quot;http 块&quot;">​</a></h3><p>算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。 需要注意的是：http 块也可以包括 http 全局块、server 块。</p><h3 id="http-全局块" tabindex="-1">http 全局块 <a class="header-anchor" href="#http-全局块" aria-label="Permalink to &quot;http 全局块&quot;">​</a></h3><p>http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。</p><h3 id="server-块" tabindex="-1">server 块 <a class="header-anchor" href="#server-块" aria-label="Permalink to &quot;server 块&quot;">​</a></h3><p>这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的， 该技术的产生是为了 节省互联网服务器硬件成本。</p><p>每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。 而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。</p><h3 id="全局-server-块" tabindex="-1">全局 server 块 <a class="header-anchor" href="#全局-server-块" aria-label="Permalink to &quot;全局 server 块&quot;">​</a></h3><p>最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。</p><h3 id="location-块" tabindex="-1">location 块 <a class="header-anchor" href="#location-块" aria-label="Permalink to &quot;location 块&quot;">​</a></h3><p>一个 server 块可以配置多个 location 块。 这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string）， 对虚拟主机名称 （也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配， 对特定的请求进行处理。 地址定向、数据缓 存和应答控制等功能， 还有许多第三方模块的配置也在这里进行。</p><h3 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h3><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#nginx进程数，建议设置为等于CPU总核心数。</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  1;</span></span>
<span class="line"><span style="color:#e1e4e8;"># 事件区块开始</span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #单个进程最大连接数（最大连接数=连接数*进程数）</span></span>
<span class="line"><span style="color:#e1e4e8;">    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #include：导入外部文件mime.types，将所有types提取为文件，然后导入到nginx配置文件中</span></span>
<span class="line"><span style="color:#e1e4e8;">    include       mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">     #默认文件类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line"><span style="color:#e1e4e8;">    #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile        on;</span></span>
<span class="line"><span style="color:#e1e4e8;">      #长连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 第一个Server区块开始，表示一个独立的虚拟主机站点</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 提供服务的端口，默认80</span></span>
<span class="line"><span style="color:#e1e4e8;">        listen       80;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 提供服务的域名主机名</span></span>
<span class="line"><span style="color:#e1e4e8;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #对 &quot;/&quot; 启用反向代理,第一个location区块开始</span></span>
<span class="line"><span style="color:#e1e4e8;">        location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            root   html;  #服务默认启动目录</span></span>
<span class="line"><span style="color:#e1e4e8;">            index  index.html index.htm; # 默认的首页文件，多个用空格分开</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">         # 错误页面路由</span></span>
<span class="line"><span style="color:#e1e4e8;">        error_page   500 502 503 504  /50x.html; # 出现对应的http状态码时，使用50x.html回应客户</span></span>
<span class="line"><span style="color:#e1e4e8;">        location = /50x.html { # location区块开始，访问50x.html</span></span>
<span class="line"><span style="color:#e1e4e8;">            root   html;  # 指定对应的站点目录为html</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#nginx进程数，建议设置为等于CPU总核心数。</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  1;</span></span>
<span class="line"><span style="color:#24292e;"># 事件区块开始</span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    #单个进程最大连接数（最大连接数=连接数*进程数）</span></span>
<span class="line"><span style="color:#24292e;">    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    #include：导入外部文件mime.types，将所有types提取为文件，然后导入到nginx配置文件中</span></span>
<span class="line"><span style="color:#24292e;">    include       mime.types;</span></span>
<span class="line"><span style="color:#24292e;">     #默认文件类型</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;">    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line"><span style="color:#24292e;">    #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on;</span></span>
<span class="line"><span style="color:#24292e;">      #长连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#24292e;">    # 第一个Server区块开始，表示一个独立的虚拟主机站点</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        # 提供服务的端口，默认80</span></span>
<span class="line"><span style="color:#24292e;">        listen       80;</span></span>
<span class="line"><span style="color:#24292e;">        # 提供服务的域名主机名</span></span>
<span class="line"><span style="color:#24292e;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#24292e;">        #对 &quot;/&quot; 启用反向代理,第一个location区块开始</span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            root   html;  #服务默认启动目录</span></span>
<span class="line"><span style="color:#24292e;">            index  index.html index.htm; # 默认的首页文件，多个用空格分开</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">         # 错误页面路由</span></span>
<span class="line"><span style="color:#24292e;">        error_page   500 502 503 504  /50x.html; # 出现对应的http状态码时，使用50x.html回应客户</span></span>
<span class="line"><span style="color:#24292e;">        location = /50x.html { # location区块开始，访问50x.html</span></span>
<span class="line"><span style="color:#24292e;">            root   html;  # 指定对应的站点目录为html</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 基本配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 主配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 虚拟主机配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/vhost/default.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 虚拟主机配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.example.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">utf-8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 错误页面路由</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 匹配到 / 路径时，尝试访问 index.html</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 匹配到 /404.html 路径时，返回 404 页面</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">html</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 指定对应的站点目录为html</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置静态资源缓存时间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~.</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">gif</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">jpg</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">jpeg</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">png</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">bmp</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">swf</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">flv</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">mp4</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">ico</span><span style="color:#E1E4E8;">)$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expires</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#9ECBFF;">d</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~.</span><span style="color:#79B8FF;">*</span><span style="color:#79B8FF;">\\.</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">js</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">css</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">?</span><span style="color:#E1E4E8;">$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expires</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#9ECBFF;">h</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~.</span><span style="color:#79B8FF;">*</span><span style="color:#79B8FF;">\\.</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">gif</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">jpg</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">jpeg</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">png</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">bmp</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">swf</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">flv</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">mp4</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">ico</span><span style="color:#E1E4E8;">)$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expires</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#9ECBFF;">h</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~.</span><span style="color:#79B8FF;">*</span><span style="color:#79B8FF;">\\.</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">js</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">css</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">?</span><span style="color:#E1E4E8;">$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expires</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#9ECBFF;">h</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">access_log</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">log_not_found</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">\\.</span><span style="color:#9ECBFF;">ht</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">deny</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:8080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:8081</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:8082</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.example.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">proxy_pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://backend</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.example.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add_header</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Cache-Control</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-cache</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.example.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">proxy_pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:8080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 基本配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 主配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 虚拟主机配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/vhost/default.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 虚拟主机配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.example.com</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">utf-8</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 错误页面路由</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">; </span><span style="color:#6A737D;"># 匹配到 / 路径时，尝试访问 index.html</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 匹配到 /404.html 路径时，返回 404 页面</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">   </span><span style="color:#032F62;">html</span><span style="color:#24292E;">; </span><span style="color:#6A737D;"># 指定对应的站点目录为html</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置静态资源缓存时间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">gif</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpeg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">png</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">bmp</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">swf</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">flv</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">mp4</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">ico</span><span style="color:#24292E;">)$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">expires</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#032F62;">d</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~.</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;">\\.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">js</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">)</span><span style="color:#032F62;">?</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">expires</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#032F62;">h</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~.</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;">\\.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">gif</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">jpeg</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">png</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">bmp</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">swf</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">flv</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">mp4</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">ico</span><span style="color:#24292E;">)$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">expires</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#032F62;">h</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~.</span><span style="color:#005CC5;">*</span><span style="color:#005CC5;">\\.</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">js</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">)</span><span style="color:#032F62;">?</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">expires</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#032F62;">h</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">access_log</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">log_not_found</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#005CC5;">\\.</span><span style="color:#032F62;">ht</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">deny</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 负载均衡配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">upstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:8080</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:8081</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:8082</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.example.com</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">proxy_pass</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://backend</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缓存配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.example.com</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add_header</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Cache-Control</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-cache</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置文件默认路径：/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 反向代理配置文件示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.example.com</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">proxy_pass</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://127.0.0.1:8080</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p><a href="https://blog.csdn.net/weixin_43239880/article/details/130841067" target="_blank" rel="noreferrer">参考</a></p>`,28),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const B=s(p,[["render",c]]);export{h as __pageData,B as default};
