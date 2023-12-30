import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.9f730de1.js";const v=JSON.parse('{"title":"前端项目调试","description":"","frontmatter":{},"headers":[],"relativePath":"articles/https/vite项目一些配置.md","filePath":"articles/https/vite项目一些配置.md"}'),l={name:"articles/https/vite项目一些配置.md"},o=p(`<h1 id="前端项目调试" tabindex="-1">前端项目调试 <a class="header-anchor" href="#前端项目调试" aria-label="Permalink to &quot;前端项目调试&quot;">​</a></h1><p>vite 设置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            target:,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  server: {</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    proxy: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            target:,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="开启-https" tabindex="-1">开启 https <a class="header-anchor" href="#开启-https" aria-label="Permalink to &quot;开启 https&quot;">​</a></h2><ol><li>@vitejs/plugin-basic-ssl 插件</li><li>自己生成证书</li></ol><p>生成正式使用 mkcert 这个零配置的命令行工具</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkcert</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nss</span></span>
<span class="line"><span style="color:#6A737D;"># nss 是可选的，如果不使用或者不需要测试 Firefox，那么可以不安装 nss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接着我们创建一个目录来存放证书，比如 ~/.cert：</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.cert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 自动生成证书</span></span>
<span class="line"><span style="color:#B392F0;">mkcert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-key-file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.cert/key.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-cert-file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.cert/cert.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让系统信任证书</span></span>
<span class="line"><span style="color:#B392F0;">mkcert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkcert</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nss</span></span>
<span class="line"><span style="color:#6A737D;"># nss 是可选的，如果不使用或者不需要测试 Firefox，那么可以不安装 nss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接着我们创建一个目录来存放证书，比如 ~/.cert：</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.cert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 自动生成证书</span></span>
<span class="line"><span style="color:#6F42C1;">mkcert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-key-file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.cert/key.pem</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-cert-file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.cert/cert.pem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;localhost&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让系统信任证书</span></span>
<span class="line"><span style="color:#6F42C1;">mkcert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-install</span></span></code></pre></div><p>然后在 vite.config.js 中添加如下配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createHttpsServer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-basic-ssl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">createHttpsServer</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">        server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    target:,</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createHttpsServer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-basic-ssl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(), </span><span style="color:#6F42C1;">createHttpsServer</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">        server: {</span></span>
<span class="line"><span style="color:#24292E;">            port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            proxy: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    target:,</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="server-host" tabindex="-1">server.host <a class="header-anchor" href="#server-host" aria-label="Permalink to &quot;server.host&quot;">​</a></h2><p>指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。</p>`,11),e=[o];function t(c,r,E,i,y,F){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{v as __pageData,u as default};
