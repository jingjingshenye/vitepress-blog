import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.9f730de1.js";const F=JSON.parse('{"title":"nestjs","description":"","frontmatter":{},"headers":[],"relativePath":"articles/nodejs/nest.md","filePath":"articles/nodejs/nest.md"}'),p={name:"articles/nodejs/nest.md"},e=l(`<h1 id="nestjs" tabindex="-1">nestjs <a class="header-anchor" href="#nestjs" aria-label="Permalink to &quot;nestjs&quot;">​</a></h1><h2 id="快速生成项目" tabindex="-1">快速生成项目 <a class="header-anchor" href="#快速生成项目" aria-label="Permalink to &quot;快速生成项目&quot;">​</a></h2><p>快速生成 项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 全局安装脚手架</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@nestjs/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 启用 Typescript 严格模式创建项目</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">project01</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--strict</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 全局安装脚手架</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@nestjs/cli</span></span>
<span class="line"><span style="color:#6A737D;"># 启用 Typescript 严格模式创建项目</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new</span><span style="color:#24292E;"> </span><span style="color:#032F62;">project01</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--strict</span></span></code></pre></div><h2 id="安装-rest-client" tabindex="-1">安装 rest client <a class="header-anchor" href="#安装-rest-client" aria-label="Permalink to &quot;安装 rest client&quot;">​</a></h2><p>vscode 插件</p><h2 id="创建一个模块和路由" tabindex="-1">创建一个模块和路由 <a class="header-anchor" href="#创建一个模块和路由" aria-label="Permalink to &quot;创建一个模块和路由&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">project01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个模块</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个控制器</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">controller</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个服务</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个守卫</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">guard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个中间件</span></span>
<span class="line"><span style="color:#B392F0;">nest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">middleware</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">users</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">project01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个模块</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个控制器</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">controller</span><span style="color:#24292E;"> </span><span style="color:#032F62;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个服务</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个守卫</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">guard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个中间件</span></span>
<span class="line"><span style="color:#6F42C1;">nest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">middleware</span><span style="color:#24292E;"> </span><span style="color:#032F62;">users</span></span></code></pre></div><h2 id="修饰器" tabindex="-1">修饰器 <a class="header-anchor" href="#修饰器" aria-label="Permalink to &quot;修饰器&quot;">​</a></h2><p>Get、Post、Request、Query、Body、Param、Headers 修饰器</p><h2 id="typeorm" tabindex="-1">TypeORM <a class="header-anchor" href="#typeorm" aria-label="Permalink to &quot;TypeORM&quot;">​</a></h2><div class="language-base vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">base</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install --save @nestjs/typeorm typeorm mysql2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装</span></span>
<span class="line"><span style="color:#24292e;">npm install --save @nestjs/typeorm typeorm mysql2</span></span></code></pre></div><h2 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h2><p>app.controller.spec.ts：这是一个用作测试的文件</p><p>app.controller.ts：这是一个控制器文件</p><p>app.module.ts: 这是根模块文件</p><p>app.service.ts：这是一个提供功能服务的文件</p><p>main.ts：这是 nest 项目的入口文件</p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>项目根目录创建 Dockerfile</p><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用Node.js作为基础镜像</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> node:20-alpine3.18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制package.json和package-lock.json文件到工作目录</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm 源，选用国内镜像源以提高下载速度</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm config set registry https://registry.npm.taobao.org/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制应用程序的源代码到工作目录</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建应用程序</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露应用程序的端口</span></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动应用程序</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;npm&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;run&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;start:prod&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用Node.js作为基础镜像</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> node:20-alpine3.18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制package.json和package-lock.json文件到工作目录</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm 源，选用国内镜像源以提高下载速度</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm config set registry https://registry.npm.taobao.org/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制应用程序的源代码到工作目录</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建应用程序</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暴露应用程序的端口</span></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动应用程序</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;npm&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;run&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;start:prod&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ul><li>通过装饰器给 class 或者对象添加元数据，然后初始化的时候取出这些元数据，进行依赖的分析，然后创建对应的实例对象就可以了</li><li>实现的核心就是 Reflect metadata 的 api</li><li>通过装饰器给 class 或者对象添加 metadata，并且开启 ts 的 emitDecoratorMetadata 来自动添加类型相关的 metadata，然后运行的时候通过这些元数据来实现依赖的扫描，对象的创建等等功能。</li></ul><h3 id="首先" tabindex="-1">首先 <a class="header-anchor" href="#首先" aria-label="Permalink to &quot;首先&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">modules</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">controllers: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">providers: []</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 收集了所有的 controllers，和 providers 装在一个对象上（其实是借用了 reflect meatadataAPI）我可以理解为：const factory = {controllers: [],providers: []}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">modules</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">controllers: [],</span></span>
<span class="line"><span style="color:#24292E;">providers: []</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 收集了所有的 controllers，和 providers 装在一个对象上（其实是借用了 reflect meatadataAPI）我可以理解为：const factory = {controllers: [],providers: []}</span></span></code></pre></div><h3 id="然后-controllers-里的所有类-的参数都来自-providers-所以我们在-controllers-里每一个类的时候-是不是只要找到对应-providers-里的参数-就自动实例化了-provider-我们是不是在-factory-里已经有" tabindex="-1">然后 controllers 里的所有类，的参数都来自 providers，所以我们在 controllers 里每一个类的时候，是不是只要找到对应 providers 里的参数，就自动实例化了？provider 我们是不是在 factory 里已经有 <a class="header-anchor" href="#然后-controllers-里的所有类-的参数都来自-providers-所以我们在-controllers-里每一个类的时候-是不是只要找到对应-providers-里的参数-就自动实例化了-provider-我们是不是在-factory-里已经有" aria-label="Permalink to &quot;然后 controllers 里的所有类，的参数都来自 providers，所以我们在 controllers 里每一个类的时候，是不是只要找到对应 providers 里的参数，就自动实例化了？provider 我们是不是在 factory 里已经有&quot;">​</a></h3><p>这里的问题就剩下说，如何之后每个 controller 依赖了哪些 provider，这个又是 reflect meatadataAPI 帮我们解决了，所以这就是整体的思路</p>`,27),o=[e];function c(t,r,i,y,E,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
