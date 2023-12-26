import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9f730de1.js";const B=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/Nginx.md","filePath":"articles/Linux/Nginx.md"}'),p={name:"articles/Linux/Nginx.md"},o=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><p>Nginx 是一款高性能的 HTTP 服务器，常用做为反向代理服务器，负载均衡服务器，以及 HTTP 缓存服务器。</p><h2 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-label="Permalink to &quot;动静分离&quot;">​</a></h2><ul><li>静态资源（HTML、CSS、JS、图片等）：通过 Nginx 反向代理服务器，将静态资源通过 CDN 加速，加快访问速度。</li><li>动态资源（PHP、Java、Python、Node.js 等）：通过 Nginx 反向代理服务器</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
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
<span class="line"><span style="color:#6F42C1;">/usr/local/nginx/sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
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
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,8),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{B as __pageData,h as default};
