import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9f730de1.js";const p="/blog/assets/docker.c09f0abf.png",g=JSON.parse('{"title":"docker","description":"","frontmatter":{},"headers":[],"relativePath":"articles/docker.md","filePath":"articles/docker.md"}'),o={name:"articles/docker.md"},e=l(`<h1 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;docker&quot;">​</a></h1><p>Docker🐳 是一种容器技术，只隔离应用程序的运行时环境但容器之间可以共享同一个操作系统，可以理解成一个更轻量级的 虚拟机 并且使用的是本机的操作系统。</p><p>Docker 变得越来越流行，它可以轻便灵活地隔离环境，进行扩容，运维管理。对于业务开发者而言，随着持续集成的发展，对代码质量及快速迭代的要求也越来越高。</p><p>对于前端而言，在 CI 环境中使用也更容易集成开发，测试与部署。比如可以为流水线(Pipeline)设置 Lint/Test/Security/Audit/Deploy/Artifact 等任务，更好地把控项目质量。</p><h2 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h2><p>镜像（Image）：Docker 镜像（Image）可以简单理解为一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。</p><p>容器（Container）：容器（Container）可以简单理解为一个进程，但与普通的进程不同的是，容器进程运行于一个隔离的环境中，使用的是镜像（Image）中提供的程序、库、资源、配置等文件。</p><p>仓库（Repository）：仓库（Repository）可以简单理解为代码的集中存放地，存放着镜像。一个仓库可以包含多个镜像，每个镜像有不同的标签（tag）。</p><p>注册服务器（Registry）：注册服务器（Registry）可以简单理解为代码的远程仓库，用来存放镜像。</p><p>Docker Hub：Docker Hub 是 Docker 官方推出的公有镜像仓库，用户可以将自己创建的镜像上传到 Docker Hub，供他人下载使用。</p><h2 id="换源" tabindex="-1">换源 <a class="header-anchor" href="#换源" aria-label="Permalink to &quot;换源&quot;">​</a></h2><p>首先打开 Docker 的设置，选择 Docker Engine,在其中输入(这里使用的是 163 的源，如果想要使用其他源可以自行设置，github 上有个项目 docker_mirror 可以自动检测在你的网络环境下哪个源是最快的)。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;registry-mirrors&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;http://hub-mirror.c.163.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;insecure-registries&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;debug&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;experimental&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;registry-mirrors&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;http://hub-mirror.c.163.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;insecure-registries&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;debug&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;experimental&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="dockerfile" tabindex="-1">dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;dockerfile&quot;">​</a></h2><p>Dockerfile 是用来构建镜像的配置文件，通过 Dockerfile 可以指定镜像的基础镜像，配置镜像的操作系统及软件，并可以将软件打包到镜像中。</p><p>Dockerfile 由一系列命令和参数组成，每一条命令都是构建镜像的一部分，通过这些命令可以创建镜像。</p><p>Dockerfile 指令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 说明该镜像以哪个镜像为基础</span></span>
<span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">centos:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建者的基本信息</span></span>
<span class="line"><span style="color:#B392F0;">MAINTAINER</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在build这个镜像时执行的操作</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拷贝本地文件到镜像中</span></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/gitdir/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># FROM：指定基础镜像</span></span>
<span class="line"><span style="color:#6A737D;"># RUN：容器构建时需要运行的命令</span></span>
<span class="line"><span style="color:#6A737D;"># EXPOSE：当前容器对外暴露的端口号</span></span>
<span class="line"><span style="color:#6A737D;"># WORKDIR：指定在创建容器后，终端默认登录进来的工作目录</span></span>
<span class="line"><span style="color:#6A737D;"># ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包</span></span>
<span class="line"><span style="color:#6A737D;"># CMD：指定一个容器启动时要运行的命令，参数为数组格式 CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot; ...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 说明该镜像以哪个镜像为基础</span></span>
<span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">centos:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建者的基本信息</span></span>
<span class="line"><span style="color:#6F42C1;">MAINTAINER</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在build这个镜像时执行的操作</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拷贝本地文件到镜像中</span></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/gitdir/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># FROM：指定基础镜像</span></span>
<span class="line"><span style="color:#6A737D;"># RUN：容器构建时需要运行的命令</span></span>
<span class="line"><span style="color:#6A737D;"># EXPOSE：当前容器对外暴露的端口号</span></span>
<span class="line"><span style="color:#6A737D;"># WORKDIR：指定在创建容器后，终端默认登录进来的工作目录</span></span>
<span class="line"><span style="color:#6A737D;"># ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包</span></span>
<span class="line"><span style="color:#6A737D;"># CMD：指定一个容器启动时要运行的命令，参数为数组格式 CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot; ...]</span></span></code></pre></div><p>有了 Dockerfile 之后，就可以利用 build 命令构建镜像了：（其中-t 用来指定新镜像的用户信息、tag 等。最后的点表示在当前目录寻找 Dockerfile。）</p><p>对 Docker 操作：（Linux 下，Windows 下直接打开 Docker Desktop 即可）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动docker</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span>
<span class="line"><span style="color:#6A737D;"># 重启docker</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span></span>
<span class="line"><span style="color:#6A737D;"># 停止docker</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动docker</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span>
<span class="line"><span style="color:#6A737D;"># 重启docker</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span></span>
<span class="line"><span style="color:#6A737D;"># 停止docker</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span></span></code></pre></div><p><img src="`+p+`" alt="Alt text"></p><h2 id="本地部署" tabindex="-1">本地部署 <a class="header-anchor" href="#本地部署" aria-label="Permalink to &quot;本地部署&quot;">​</a></h2><p>借助 Docker 在本地部署前端项目实际上就是利用 Container 容器将使用不同版本应用（node，nginx，mysql 等应用）的项目隔离后进行项目的启动，避免因同一个主机安装多个不同版本应用及其切换带来的工作量及风险。</p><p>前面说到，dockerfile 是一个镜像构建文本文件, 里面包含了一系列的指令, 这些指令告诉 Docker 如何创建一个容器镜像。 在文件中可以用指令指定提供容器运行时所需要的程序，库，资源，配置等文件， 还包含了一些运行时准备的配置参数（环境变量，用户等）。</p><p>要上线一个前端项目，需要先构建打包，然后再部署。因为构建需要用到 node 环境，我们先使用 node 基础镜像来执行构建阶段,，最后将构建阶段的产物放到 nginx 来部署（多阶构建，可以减小最终镜像的大小）。 编写 dockerfile 的内容就可按照这个步骤来 在项目根目录下新建一个 dockerfile 文件, 内容如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用 Node.js 16 作为基础镜像</span></span>
<span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node:16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前工作目录设置为/app</span></span>
<span class="line"><span style="color:#B392F0;">WORKDIR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将 package.json 和 package-lock.json 复制到 /app 目录下</span></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 npm install 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将源代码复制到 /app 目录下</span></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打包构建</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将构建后的代码复制到 nginx 镜像中</span></span>
<span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx:latest</span></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--from=0</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app/dist</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露容器的 8080 端口，此处其实只是一个声明作用，不写的话也可以，后面运行容器的</span></span>
<span class="line"><span style="color:#6A737D;"># docker run --name container_name -p &lt;host_port&gt;:&lt;container_port&gt;命令中container_port可以覆盖此处的声明，不写就默认80端口</span></span>
<span class="line"><span style="color:#B392F0;">EXPOSE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#B392F0;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;nginx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-g&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;daemon off;&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用 Node.js 16 作为基础镜像</span></span>
<span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node:16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前工作目录设置为/app</span></span>
<span class="line"><span style="color:#6F42C1;">WORKDIR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将 package.json 和 package-lock.json 复制到 /app 目录下</span></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 npm install 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将源代码复制到 /app 目录下</span></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打包构建</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将构建后的代码复制到 nginx 镜像中</span></span>
<span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx:latest</span></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--from=0</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app/dist</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/nginx/html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露容器的 8080 端口，此处其实只是一个声明作用，不写的话也可以，后面运行容器的</span></span>
<span class="line"><span style="color:#6A737D;"># docker run --name container_name -p &lt;host_port&gt;:&lt;container_port&gt;命令中container_port可以覆盖此处的声明，不写就默认80端口</span></span>
<span class="line"><span style="color:#6F42C1;">EXPOSE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#6F42C1;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;nginx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-g&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;daemon off;&quot;]</span></span></code></pre></div><p>这里之所以先把 package.json 文件复制到容器中执行 npm install, 再把源码复制到容器，是因为一行指令为单独的一层，docker 会把每一层单独存储，每一次构建都是从变化的那一层开始构建，如果 package.json 文件没有变化, 那么就不会执行 install, 如果一次性把所有文件复制进去，源代码每次都会有修改，每次都会执行 npm install。</p><p>构建镜像：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx-demo.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># docker build -t &lt;image_name&gt;:&lt;tag&gt; .</span></span>
<span class="line"><span style="color:#6A737D;"># docker build -t vite-react-ts-template-image:v1 .</span></span>
<span class="line"><span style="color:#6A737D;"># -t 标记镜像的名字和标签（自定义，例如**docker build -t vite-react-ts-template-image:v1 . **）</span></span>
<span class="line"><span style="color:#6A737D;"># . 表示从当前目录查找dockerfile来构建镜像</span></span>
<span class="line"><span style="color:#6A737D;"># 为了避免node_modules目录被打包进镜像，我们需要在构建镜像时，将其排除在外。</span></span>
<span class="line"><span style="color:#6A737D;">#根目录下添加.dockerignore文件，内容添加\`node_modules\`</span></span>
<span class="line"><span style="color:#6A737D;">#然后就可以构建镜像了：</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx-demo.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># docker build -t &lt;image_name&gt;:&lt;tag&gt; .</span></span>
<span class="line"><span style="color:#6A737D;"># docker build -t vite-react-ts-template-image:v1 .</span></span>
<span class="line"><span style="color:#6A737D;"># -t 标记镜像的名字和标签（自定义，例如**docker build -t vite-react-ts-template-image:v1 . **）</span></span>
<span class="line"><span style="color:#6A737D;"># . 表示从当前目录查找dockerfile来构建镜像</span></span>
<span class="line"><span style="color:#6A737D;"># 为了避免node_modules目录被打包进镜像，我们需要在构建镜像时，将其排除在外。</span></span>
<span class="line"><span style="color:#6A737D;">#根目录下添加.dockerignore文件，内容添加\`node_modules\`</span></span>
<span class="line"><span style="color:#6A737D;">#然后就可以构建镜像了：</span></span></code></pre></div><p>运行容器</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建运行容器</span></span>
<span class="line"><span style="color:#6A737D;"># --name 指定容器名称为 vite-react-ts-template-container</span></span>
<span class="line"><span style="color:#6A737D;"># -p 指定外部端 8080 于容器内 8080端口连接，从而可以通过主机的 8080 端口来访问容器内的服务，要记得&lt;container_port&gt;这个端口被nginx监听到，因为nginx默认监听80端口而已</span></span>
<span class="line"><span style="color:#6A737D;"># -v 代表绑定卷 也就是本地的 dist 文件如果变更 容器内的 dist文件也会做出相应改变</span></span>
<span class="line"><span style="color:#6A737D;"># 注意 -v 两侧均需要使用绝对路径</span></span>
<span class="line"><span style="color:#6A737D;"># -d 表示在后台运行</span></span>
<span class="line"><span style="color:#6A737D;"># 最后的 vite-react-ts-template-image:v1 表示使用指定的镜像</span></span>
<span class="line"><span style="color:#6A737D;"># docker run --name container_name -p &lt;host_port&gt;:&lt;container_port&gt; -v &lt;path&gt; -d &lt;image_name&gt;:&lt;tag&gt;</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-react-ts-template-container</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span><span style="color:#9ECBFF;">:8080</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\S</span><span style="color:#9ECBFF;">tudySoft</span><span style="color:#79B8FF;">\\V</span><span style="color:#9ECBFF;">SCode</span><span style="color:#79B8FF;">\\V</span><span style="color:#9ECBFF;">SCodeFile</span><span style="color:#79B8FF;">\\v</span><span style="color:#9ECBFF;">ite-react-ts-template</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-react-ts-template-image:v1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 构建运行容器</span></span>
<span class="line"><span style="color:#6A737D;"># --name 指定容器名称为 vite-react-ts-template-container</span></span>
<span class="line"><span style="color:#6A737D;"># -p 指定外部端 8080 于容器内 8080端口连接，从而可以通过主机的 8080 端口来访问容器内的服务，要记得&lt;container_port&gt;这个端口被nginx监听到，因为nginx默认监听80端口而已</span></span>
<span class="line"><span style="color:#6A737D;"># -v 代表绑定卷 也就是本地的 dist 文件如果变更 容器内的 dist文件也会做出相应改变</span></span>
<span class="line"><span style="color:#6A737D;"># 注意 -v 两侧均需要使用绝对路径</span></span>
<span class="line"><span style="color:#6A737D;"># -d 表示在后台运行</span></span>
<span class="line"><span style="color:#6A737D;"># 最后的 vite-react-ts-template-image:v1 表示使用指定的镜像</span></span>
<span class="line"><span style="color:#6A737D;"># docker run --name container_name -p &lt;host_port&gt;:&lt;container_port&gt; -v &lt;path&gt; -d &lt;image_name&gt;:&lt;tag&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-react-ts-template-container</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span><span style="color:#032F62;">:8080</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\S</span><span style="color:#032F62;">tudySoft</span><span style="color:#005CC5;">\\V</span><span style="color:#032F62;">SCode</span><span style="color:#005CC5;">\\V</span><span style="color:#032F62;">SCodeFile</span><span style="color:#005CC5;">\\v</span><span style="color:#032F62;">ite-react-ts-template</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-react-ts-template-image:v1</span></span></code></pre></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><h3 id="镜像相关" tabindex="-1">镜像相关 <a class="header-anchor" href="#镜像相关" aria-label="Permalink to &quot;镜像相关&quot;">​</a></h3><ul><li><code>docker pull [选项] [镜像名]</code>：从仓库下载镜像。</li><li><code>docker images [选项]</code>：列出本地镜像。</li><li><code>docker rmi [选项] &lt;镜像1&gt; [&lt;镜像2&gt;...]</code>：删除镜像。</li><li><code>docker tag [选项] &lt;镜像&gt; &lt;别名&gt;</code>：为镜像添加别名。</li><li><code>docker build [选项] &lt;上下文路径/URL/-&gt; [目录]</code>：使用 Dockerfile 创建镜像。</li><li>\`docker commit [选项] &lt;容器 ID&gt; [&lt;仓库名&gt;[]]</li><li><code>docker run [选项] &lt;镜像&gt; [命令] [参数]</code>：运行一个容器。</li><li><code>docker run [选项] -d &lt;镜像&gt; [命令] [参数]</code>：后台运行一个容器。</li><li><code>docker run [选项] --rm &lt;镜像&gt; [命令] [参数]</code>：自动删除容器。</li><li><code>docker run [选项] -it &lt;镜像&gt; [命令] [参数]</code></li><li><code>docker run [选项] -p &lt;宿主端口&gt;:&lt;容器端口&gt; &lt;镜像&gt; [命令] [参数]</code>：将容器的端口映射到宿主的端口。</li><li><code>docker run [选项] -v &lt;宿主路径&gt;:&lt;容器路径&gt; &lt;镜像&gt; [命令] [参数]</code>：将宿主路径挂载到容器路径。</li></ul><h3 id="容器相关" tabindex="-1">容器相关 <a class="header-anchor" href="#容器相关" aria-label="Permalink to &quot;容器相关&quot;">​</a></h3><ul><li><code>docker ps [选项]</code>：列出本地容器。</li><li><code>docker ps -a [选项]</code>：列出本地所有容器，包括未运行的。</li><li><code>docker stop [选项] &lt;容器ID&gt;</code>：停止一个运行中的容器。</li><li><code>docker rm [选项] &lt;容器ID&gt;</code>：删除一个容器。</li><li><code>docker rm -f $(docker ps -a -q)</code>：删除所有容器。</li><li><code>docker exec [选项] &lt;容器ID&gt; &lt;命令&gt;</code>：在一个正在运行的容器中执行命令。</li><li><code>docker start [选项] &lt;容器ID&gt;</code>：启动一个已停止的容器。</li><li><code>docker restart [选项] &lt;容器ID&gt;</code>：重启一个运行中的容器。</li></ul><h3 id="仓库相关" tabindex="-1">仓库相关 <a class="header-anchor" href="#仓库相关" aria-label="Permalink to &quot;仓库相关&quot;">​</a></h3><ul><li><code>docker login [选项] [服务器地址]</code>：登录 Docker 仓库。</li><li><code>docker logout [选项] [服务器地址]</code>：退出 Docker 仓库。</li><li><code>docker search [选项] [关键字]</code>：搜索 Docker Hub。</li><li><code>docker push [选项] &lt;镜像&gt;</code>：将镜像上传到 Docker Hub。</li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/" target="_blank" rel="noreferrer">Docker 官方文档</a></li><li><a href="https://yeasy.gitbooks.io/docker_practice/content/" target="_blank" rel="noreferrer">Docker 入门教程</a></li><li><a href="https://yeasy.gitbooks.io/docker_practice/content/introduction/what.html" target="_blank" rel="noreferrer">Docker 实战</a></li></ul>`,41),t=[e];function c(r,i,y,E,d,F){return n(),a("div",null,t)}const k=s(o,[["render",c]]);export{g as __pageData,k as default};
