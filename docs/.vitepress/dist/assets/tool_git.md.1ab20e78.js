import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9f730de1.js";const C=JSON.parse('{"title":"git 相关","description":"","frontmatter":{},"headers":[],"relativePath":"tool/git.md","filePath":"tool/git.md"}'),p={name:"tool/git.md"},o=l(`<h1 id="git-相关" tabindex="-1">git 相关 <a class="header-anchor" href="#git-相关" aria-label="Permalink to &quot;git 相关&quot;">​</a></h1><h2 id="git-初始化" tabindex="-1">git 初始化 <a class="header-anchor" href="#git-初始化" aria-label="Permalink to &quot;git 初始化&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;first commit&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-M</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/jingjingshenye/canvas-blog.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;first commit&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-M</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/jingjingshenye/canvas-blog.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span></code></pre></div><h2 id="git-设置代理" tabindex="-1">git 设置代理 <a class="header-anchor" href="#git-设置代理" aria-label="Permalink to &quot;git 设置代理&quot;">​</a></h2><p>git 超时需要魔法，设置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">##列出所有配置</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:7890</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:7890</span></span>
<span class="line"><span style="color:#6A737D;"># 取消</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--unset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http.proxy</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--unset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https.proxy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局设置，不推荐</span></span>
<span class="line"><span style="color:#6A737D;">#使用http代理</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:7890</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://127.0.0.1:7890</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#只对Github代理</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http.https://github.com.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://127.0.0.1:7890</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 这个不可以推送</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http.https://github.com.proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:7890</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 这个可以推送</span></span>
<span class="line"><span style="color:#6A737D;"># 格式</span></span>
<span class="line"><span style="color:#6A737D;"># git config --global http.&lt;url&gt;.proxy &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># git config --global https.&lt;url&gt;.proxy &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#&lt;url&gt; 指的是你需要使用代理的远程仓库，该 &lt;url&gt; 支持 HTTP / HTTPS 传输协议的格式</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;protocol&gt; 指的是传输协议，支持 HTTP / HTTPS 传输协议的格式</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;host&gt; 指的是代理服务器的主机名或 IP 地址，如使用本地代理主机 127.0.0.1 或 localhost 等。</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;port&gt; 指的是代理服务器的端口号</span></span>
<span class="line"><span style="color:#6A737D;">#常见误用：针对 HTTPS 传输协议（即 https:// 开头）的 &lt;url&gt; 代理，命令写成 “git config --global https.https://github.com.proxy protocol://127.0.0.1:7890” ，这一写法完全是错的。请记住：请记住: Git 代理配置项正确写法为 http.&lt;url&gt;.proxy，并不支持 https.&lt;url&gt;.proxy 这一错误写法。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">##列出所有配置</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http.proxy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:7890</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https.proxy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:7890</span></span>
<span class="line"><span style="color:#6A737D;"># 取消</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--unset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http.proxy</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--unset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https.proxy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局设置，不推荐</span></span>
<span class="line"><span style="color:#6A737D;">#使用http代理</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http.proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://127.0.0.1:7890</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https.proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://127.0.0.1:7890</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#只对Github代理</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http.https://github.com.proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://127.0.0.1:7890</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 这个不可以推送</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http.https://github.com.proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://127.0.0.1:7890</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 这个可以推送</span></span>
<span class="line"><span style="color:#6A737D;"># 格式</span></span>
<span class="line"><span style="color:#6A737D;"># git config --global http.&lt;url&gt;.proxy &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># git config --global https.&lt;url&gt;.proxy &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#&lt;url&gt; 指的是你需要使用代理的远程仓库，该 &lt;url&gt; 支持 HTTP / HTTPS 传输协议的格式</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;protocol&gt; 指的是传输协议，支持 HTTP / HTTPS 传输协议的格式</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;host&gt; 指的是代理服务器的主机名或 IP 地址，如使用本地代理主机 127.0.0.1 或 localhost 等。</span></span>
<span class="line"><span style="color:#6A737D;">#&lt;port&gt; 指的是代理服务器的端口号</span></span>
<span class="line"><span style="color:#6A737D;">#常见误用：针对 HTTPS 传输协议（即 https:// 开头）的 &lt;url&gt; 代理，命令写成 “git config --global https.https://github.com.proxy protocol://127.0.0.1:7890” ，这一写法完全是错的。请记住：请记住: Git 代理配置项正确写法为 http.&lt;url&gt;.proxy，并不支持 https.&lt;url&gt;.proxy 这一错误写法。</span></span></code></pre></div><p><a href="https://zhuanlan.zhihu.com/p/481574024" target="_blank" rel="noreferrer">参考</a></p><p>git 配置文件路径，以上修改内容都可以在配置文件里直接修改</p><ol><li><p>全局配置 <code>~/.gitconfig</code></p><p>windows 下在<code>C:\\Users\\用户名\\.gitconfig</code></p></li><li><p>仓库配置 <code>.git/config</code></p></li><li><p>系统配置 <code>C:\\Program Files\\Git\\etc\\gitconfig</code></p></li></ol><h2 id="git-配置" tabindex="-1">git 配置 <a class="header-anchor" href="#git-配置" aria-label="Permalink to &quot;git 配置&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检查一下用户名和邮箱是否配置</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置全局用户</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;your name&#39;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxxxx@example.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置局部用户（在指定项目目录下，可配置不同项目有不同的git用户）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ccc&#39;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxxxx@example.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置全局的一次性修改配置</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--edit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看全局配置</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.gitconfig</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检查一下用户名和邮箱是否配置</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置全局用户</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;your name&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxxxx@example.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置局部用户（在指定项目目录下，可配置不同项目有不同的git用户）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ccc&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxxxx@example.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置全局的一次性修改配置</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--edit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看全局配置</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.gitconfig</span></span></code></pre></div><h2 id="gitremote" tabindex="-1">gitremote <a class="header-anchor" href="#gitremote" aria-label="Permalink to &quot;gitremote&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 初始化仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已关联的仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 关联远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/xxxx/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 直接修改远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set-url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/xxxx/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库的详细信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 初始化仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已关联的仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 关联远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/xxxx/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 直接修改远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/xxxx/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库的详细信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span></code></pre></div><h2 id="gitbranch" tabindex="-1">gitbranch <a class="header-anchor" href="#gitbranch" aria-label="Permalink to &quot;gitbranch&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看本地仓库所有分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库所有分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span>
<span class="line"><span style="color:#6A737D;"># 查看本地和远程仓库的所有分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 基于当前分支，新建一个分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支：被删除分支 --是-- 基于当前分支新建出来的，可用-d 或 -D</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">local_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支：被删除分支 --不是-- 基于当前分支新建出来的，只能使用 -D</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">local_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看本地仓库所有分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库所有分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span>
<span class="line"><span style="color:#6A737D;"># 查看本地和远程仓库的所有分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 基于当前分支，新建一个分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支：被删除分支 --是-- 基于当前分支新建出来的，可用-d 或 -D</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">local_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支：被删除分支 --不是-- 基于当前分支新建出来的，只能使用 -D</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">local_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="gitcheckout" tabindex="-1">gitcheckout <a class="header-anchor" href="#gitcheckout" aria-label="Permalink to &quot;gitcheckout&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 切换到本地分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">local_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定某次提交的commit_id</span></span>
<span class="line"><span style="color:#B392F0;">git checkout &lt;commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从现有分支中新建新的分支，并切换到新分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从远程分支中新建新的分支，并切换到新分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_branch_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 放弃工作区的修改，只影响工作区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#6A737D;"># 放弃工作区和暂存区的修改，影响工作区和暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 切换到本地分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">local_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定某次提交的commit_id</span></span>
<span class="line"><span style="color:#6F42C1;">git checkout &lt;commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从现有分支中新建新的分支，并切换到新分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从远程分支中新建新的分支，并切换到新分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_branch_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 放弃工作区的修改，只影响工作区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6A737D;"># 放弃工作区和暂存区的修改，影响工作区和暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div><h2 id="git-status" tabindex="-1">git status <a class="header-anchor" href="#git-status" aria-label="Permalink to &quot;git status&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span></code></pre></div><h2 id="git-add" tabindex="-1">git add <a class="header-anchor" href="#git-add" aria-label="Permalink to &quot;git add&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将工作区的所有修改提交到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将指定目录添加到暂存区，包括子目录所有修改</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将src目录下的所有js文件添加到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/</span><span style="color:#79B8FF;">**</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">**</span><span style="color:#9ECBFF;">.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将工作区的所有修改提交到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将指定目录添加到暂存区，包括子目录所有修改</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将src目录下的所有js文件添加到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/</span><span style="color:#005CC5;">**</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">**</span><span style="color:#032F62;">.js</span></span></code></pre></div><h2 id="git-commit" tabindex="-1">git commit <a class="header-anchor" href="#git-commit" aria-label="Permalink to &quot;git commit&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将暂存区的修改，提交到本地仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;提交信息&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将暂存区和工作区的修改，提交到本地仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-am</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;提交信息&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 避开钩子函数的检查，强制提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;提交信息&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-verify</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;提交信息&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将暂存区的修改，加到上一次的commit中，进入commit编辑，输入:wq 退出</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 修改上一次提交的commit信息（未push到远程仓库）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--only</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;新的提交信息&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将暂存区的修改，提交到本地仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;提交信息&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将暂存区和工作区的修改，提交到本地仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-am</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;提交信息&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 避开钩子函数的检查，强制提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;提交信息&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-verify</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;提交信息&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将暂存区的修改，加到上一次的commit中，进入commit编辑，输入:wq 退出</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 修改上一次提交的commit信息（未push到远程仓库）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--only</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;新的提交信息&#39;</span></span></code></pre></div><h2 id="git-push-pull" tabindex="-1">git push / pull <a class="header-anchor" href="#git-push-pull" aria-label="Permalink to &quot;git push / pull&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 拉取代码，将远程仓库分支同步到本地</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将本地仓库的分支推送到远程分支（建立在本地分支追踪远程分支基础上）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送到远程分支，并设置本地分支跟踪的远程分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--set-upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">remote_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 拉取代码，将远程仓库分支同步到本地</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将本地仓库的分支推送到远程分支（建立在本地分支追踪远程分支基础上）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送到远程分支，并设置本地分支跟踪的远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--set-upstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">remote_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-label="Permalink to &quot;git merge&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 把本地仓库的某分支合并到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">local_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 取消合并</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--abort</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 把本地仓库的某分支合并到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">local_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 取消合并</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--abort</span></span></code></pre></div><h2 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将工作区的改动（未commit），临时存储在本地</span></span>
<span class="line"><span style="color:#6A737D;"># 默认按stash的顺序命名: stash@{n}</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#添加备注</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;message&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看存储列表</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用指定的那一条</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash@{n}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将工作区的改动（未commit），临时存储在本地</span></span>
<span class="line"><span style="color:#6A737D;"># 默认按stash的顺序命名: stash@{n}</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#添加备注</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;message&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看存储列表</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用指定的那一条</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash@{n}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span></span></code></pre></div><h2 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 参数：</span></span>
<span class="line"><span style="color:#B392F0;">按数量过滤：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">-n:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">显示前</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">条记录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">shortlog</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n：按作者分类，过滤出前</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">条</span></span>
<span class="line"><span style="color:#B392F0;">按时间过滤：</span></span>
<span class="line"><span style="color:#E1E4E8;">    --after</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">如</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--after=</span><span style="color:#9ECBFF;">&#39;2023-08-30&#39;</span><span style="color:#79B8FF;">，显示</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2023</span><span style="color:#9ECBFF;">-8-30</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">之后的提交记录（包含8-30当天）</span></span>
<span class="line"><span style="color:#E1E4E8;">    --before</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">如：--before</span><span style="color:#E1E4E8;">=</span><span style="color:#B392F0;">&#39;2023-08-30&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">显示</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2023</span><span style="color:#9ECBFF;">-8-30</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">之前的提交记录（不包含8-30当天）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">before/after</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">是个相对时间，可以这么写：--after=&#39;a week ago&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--after=</span><span style="color:#9ECBFF;">&#39;yesterday&#39;</span></span>
<span class="line"><span style="color:#B392F0;">按作者过滤：</span></span>
<span class="line"><span style="color:#E1E4E8;">    --author</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">作者名不需要精确匹配，只需要包含就行了，可使用正则匹配</span></span>
<span class="line"><span style="color:#B392F0;">按commit信息过滤：</span></span>
<span class="line"><span style="color:#E1E4E8;">    --grep</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;关键字&#39;:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">过滤出记录中(commit提交时的注释</span><span style="color:#E1E4E8;">)与关键字有关的记录</span></span>
<span class="line"><span style="color:#B392F0;">过滤merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">--no-merges:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">过滤出不包含</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">的记录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">—merges:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">只过滤出包含</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">的记录</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">-p：按补丁显示每个更新文件的差异，比下一条</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat命令信息更全</span></span>
<span class="line"><span style="color:#B392F0;">--stat：统计出每次更新的修改文件列表,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">及改动文件中</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">添加/删除/变动</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">的行数</span></span>
<span class="line"><span style="color:#E1E4E8;">--pretty</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">：使用其他格式显示统计信息，参数有点复杂，目前很少用到</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 参数：</span></span>
<span class="line"><span style="color:#6F42C1;">按数量过滤：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">-n:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">显示前</span><span style="color:#24292E;"> </span><span style="color:#032F62;">n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">条记录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">shortlog</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n：按作者分类，过滤出前</span><span style="color:#24292E;"> </span><span style="color:#032F62;">n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">条</span></span>
<span class="line"><span style="color:#6F42C1;">按时间过滤：</span></span>
<span class="line"><span style="color:#24292E;">    --after</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">如</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--after=</span><span style="color:#032F62;">&#39;2023-08-30&#39;</span><span style="color:#005CC5;">，显示</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2023</span><span style="color:#032F62;">-8-30</span><span style="color:#24292E;"> </span><span style="color:#032F62;">之后的提交记录（包含8-30当天）</span></span>
<span class="line"><span style="color:#24292E;">    --before</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">如：--before</span><span style="color:#24292E;">=</span><span style="color:#6F42C1;">&#39;2023-08-30&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">显示</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2023</span><span style="color:#032F62;">-8-30</span><span style="color:#24292E;"> </span><span style="color:#032F62;">之前的提交记录（不包含8-30当天）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">before/after</span><span style="color:#24292E;"> </span><span style="color:#032F62;">是个相对时间，可以这么写：--after=&#39;a week ago&#39;,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--after=</span><span style="color:#032F62;">&#39;yesterday&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">按作者过滤：</span></span>
<span class="line"><span style="color:#24292E;">    --author</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">作者名不需要精确匹配，只需要包含就行了，可使用正则匹配</span></span>
<span class="line"><span style="color:#6F42C1;">按commit信息过滤：</span></span>
<span class="line"><span style="color:#24292E;">    --grep</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;关键字&#39;:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">过滤出记录中(commit提交时的注释</span><span style="color:#24292E;">)与关键字有关的记录</span></span>
<span class="line"><span style="color:#6F42C1;">过滤merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">--no-merges:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">过滤出不包含</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">的记录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">—merges:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">只过滤出包含</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">的记录</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">-p：按补丁显示每个更新文件的差异，比下一条</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat命令信息更全</span></span>
<span class="line"><span style="color:#6F42C1;">--stat：统计出每次更新的修改文件列表,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">及改动文件中</span><span style="color:#24292E;"> </span><span style="color:#032F62;">添加/删除/变动</span><span style="color:#24292E;"> </span><span style="color:#032F62;">的行数</span></span>
<span class="line"><span style="color:#24292E;">--pretty</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">：使用其他格式显示统计信息，参数有点复杂，目前很少用到</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有的提交记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将记录一行一行的形式展示：简洁明</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 记录以图形化的形式展示</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--graph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示每次更新的文件修改统计信息，会列出具体文件列表</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 展示前10条</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-10</span></span>
<span class="line"><span style="color:#6A737D;"># 按作者分类，过滤出前10条</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shrtlog</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-10</span></span>
<span class="line"><span style="color:#6A737D;"># 过滤出 &#39;xxx&#39; 的前10条记录，不包括 merge的记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--author=</span><span style="color:#9ECBFF;">&#39;XXX&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-merges</span></span>
<span class="line"><span style="color:#6A737D;"># 过滤出 commit 提交的注释中  包含&#39;feat&#39;关键字的前10条记录，不包括merge 的记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--grep=</span><span style="color:#9ECBFF;">&#39;feat&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-merges</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有的提交记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将记录一行一行的形式展示：简洁明</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 记录以图形化的形式展示</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--graph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示每次更新的文件修改统计信息，会列出具体文件列表</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 展示前10条</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-10</span></span>
<span class="line"><span style="color:#6A737D;"># 按作者分类，过滤出前10条</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shrtlog</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-10</span></span>
<span class="line"><span style="color:#6A737D;"># 过滤出 &#39;xxx&#39; 的前10条记录，不包括 merge的记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--author=</span><span style="color:#032F62;">&#39;XXX&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-merges</span></span>
<span class="line"><span style="color:#6A737D;"># 过滤出 commit 提交的注释中  包含&#39;feat&#39;关键字的前10条记录，不包括merge 的记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--grep=</span><span style="color:#032F62;">&#39;feat&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-merges</span></span></code></pre></div><h2 id="git-revert" tabindex="-1">git revert <a class="header-anchor" href="#git-revert" aria-label="Permalink to &quot;git revert&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 撤销指定的提交版本</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commit_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销的版本范围</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commit_id</span><span style="color:#F97583;">1&gt;</span><span style="color:#9ECBFF;">..</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commit_id</span><span style="color:#F97583;">2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销上一次提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销上上次提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 撤销指定的提交版本</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销的版本范围</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit_id</span><span style="color:#D73A49;">1&gt;</span><span style="color:#032F62;">..</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit_id</span><span style="color:#D73A49;">2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销上一次提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销上上次提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span></span></code></pre></div><h2 id="git-reset" tabindex="-1">git reset <a class="header-anchor" href="#git-reset" aria-label="Permalink to &quot;git reset&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 仅是撤销commit记录，所有改动都保留（工作区和暂存区）</span></span>
<span class="line"><span style="color:#6A737D;"># HEAD^ 代表上个版本</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--soft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--soft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit_id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销commit记录，不保留改动，直接回退到指定的提交版本</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit_id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强推到远程</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 仅是撤销commit记录，所有改动都保留（工作区和暂存区）</span></span>
<span class="line"><span style="color:#6A737D;"># HEAD^ 代表上个版本</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit_id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销commit记录，不保留改动，直接回退到指定的提交版本</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit_id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强推到远程</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span></span></code></pre></div><h2 id="git-tag" tabindex="-1">git tag <a class="header-anchor" href="#git-tag" aria-label="Permalink to &quot;git tag&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出所有标签</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 默认在 HEAD 上创建一个标签</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定一个 commit id 创建一个标签</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.0.0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commit_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建带有说明的标签，用 -a 指定标签名，-m 指定说明文字</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.0.0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;说明文字&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看单个标签具体信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">tagnam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送指定的本地标签到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">tagnam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送本地未推送的所有标签到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地标签</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个远程标签</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">tagnam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出所有标签</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 默认在 HEAD 上创建一个标签</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定一个 commit id 创建一个标签</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.0.0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建带有说明的标签，用 -a 指定标签名，-m 指定说明文字</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.0.0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;说明文字&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看单个标签具体信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">tagnam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送指定的本地标签到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">tagnam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送本地未推送的所有标签到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地标签</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个远程标签</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">tagnam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="git-fetch" tabindex="-1">git fetch <a class="header-anchor" href="#git-fetch" aria-label="Permalink to &quot;git fetch&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 同步：拉取远程版本库的更新，同步到本地</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 同步：拉取远程版本库的更新，同步到本地</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span></code></pre></div>`,40),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
