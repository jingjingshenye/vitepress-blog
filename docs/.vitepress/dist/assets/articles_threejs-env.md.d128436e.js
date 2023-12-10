import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d7a29f29.js";const u=JSON.parse('{"title":"搭建vite vue3 threejs开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"articles/threejs-env.md","filePath":"articles/threejs-env.md"}'),l={name:"articles/threejs-env.md"},o=p(`<h1 id="搭建vite-vue3-threejs开发环境" tabindex="-1">搭建vite vue3 threejs开发环境 <a class="header-anchor" href="#搭建vite-vue3-threejs开发环境" aria-label="Permalink to &quot;搭建vite vue3 threejs开发环境&quot;">​</a></h1><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">npm create vue@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">yarn add three</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">yarn add dat.gui</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">yarn add gsap</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">yarn add mitt </span><span style="color:#6A737D;">//事件通信</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">npm create vue@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">yarn add three</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">yarn add dat.gui</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">yarn add gsap</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">yarn add mitt </span><span style="color:#6A737D;">//事件通信</span></span></code></pre></div><h2 id="代码封装" tabindex="-1">代码封装 <a class="header-anchor" href="#代码封装" aria-label="Permalink to &quot;代码封装&quot;">​</a></h2><p>src路径下创建three文件夹，分别封装camera、scene、renderer等</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 创建透视相机</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">camera</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.innerHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">100000</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 设置相机位置</span></span>
<span class="line"><span style="color:#6A737D;">// object3d具有position，属性是1个3维的向量</span></span>
<span class="line"><span style="color:#E1E4E8;">camera.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> camera</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> THREE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 创建透视相机</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">camera</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">PerspectiveCamera</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  window.innerHeight </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> window.innerHeight,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">100000</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 设置相机位置</span></span>
<span class="line"><span style="color:#6A737D;">// object3d具有position，属性是1个3维的向量</span></span>
<span class="line"><span style="color:#24292E;">camera.position.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> camera</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CSS3DRenderer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three/examples/jsm/renderers/CSS3DRenderer.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化渲染器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置抗锯齿</span></span>
<span class="line"><span style="color:#E1E4E8;">  antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置物理灯光模拟效果</span></span>
<span class="line"><span style="color:#E1E4E8;">  physicallyCorrectLights: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置对数深度缓冲区</span></span>
<span class="line"><span style="color:#E1E4E8;">  logarithmicDepthBuffer: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 设置渲染尺寸大小</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 调节色调映射</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.toneMapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.ACESFilmicToneMapping;</span></span>
<span class="line"><span style="color:#6A737D;">// 调节曝光</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.toneMappingExposure </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建css3drender</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">css3drender</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CSS3DRenderer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">css3drender.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.cssrender&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(css3drender.domElement);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> { renderer, css3drender };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> THREE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CSS3DRenderer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three/examples/jsm/renderers/CSS3DRenderer.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化渲染器</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">renderer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">WebGLRenderer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置抗锯齿</span></span>
<span class="line"><span style="color:#24292E;">  antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置物理灯光模拟效果</span></span>
<span class="line"><span style="color:#24292E;">  physicallyCorrectLights: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置对数深度缓冲区</span></span>
<span class="line"><span style="color:#24292E;">  logarithmicDepthBuffer: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 设置渲染尺寸大小</span></span>
<span class="line"><span style="color:#24292E;">renderer.</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#24292E;">renderer.shadowMap.enabled </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 调节色调映射</span></span>
<span class="line"><span style="color:#24292E;">renderer.toneMapping </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.ACESFilmicToneMapping;</span></span>
<span class="line"><span style="color:#6A737D;">// 调节曝光</span></span>
<span class="line"><span style="color:#24292E;">renderer.toneMappingExposure </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.8</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建css3drender</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">css3drender</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CSS3DRenderer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">css3drender.</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;.cssrender&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(css3drender.domElement);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { renderer, css3drender };</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { RGBELoader } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three/examples/jsm/loaders/RGBELoader.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化场景</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加雾霾</span></span>
<span class="line"><span style="color:#6A737D;">// const fog = new THREE.Fog(0x000000, 0, 10);</span></span>
<span class="line"><span style="color:#6A737D;">// scene.fog = fog;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const cubeTextureLoader = new THREE.CubeTextureLoader().setPath(&quot;./textures/&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">// const texture = cubeTextureLoader.load([</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;1.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;2.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;3.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;4.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;5.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;6.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">// ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加圆柱形天空</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rgbeloader</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RGBELoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">rgbeloader.</span><span style="color:#B392F0;">loadAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./textures/2k.hdr&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置纹理为圆柱形纹理</span></span>
<span class="line"><span style="color:#E1E4E8;">  texture.mapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.EquirectangularReflectionMapping;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 添加天空环境</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.background </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.environment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 场景亮度物理灯光效果</span></span>
<span class="line"><span style="color:#6A737D;">// 1设置色调映射</span></span>
<span class="line"><span style="color:#6A737D;">// 2设置曝光</span></span>
<span class="line"><span style="color:#6A737D;">// 3设置场景灯光</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 给场景添加平行光</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">light.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(light);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> scene;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> THREE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RGBELoader } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three/examples/jsm/loaders/RGBELoader.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化场景</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Scene</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加雾霾</span></span>
<span class="line"><span style="color:#6A737D;">// const fog = new THREE.Fog(0x000000, 0, 10);</span></span>
<span class="line"><span style="color:#6A737D;">// scene.fog = fog;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const cubeTextureLoader = new THREE.CubeTextureLoader().setPath(&quot;./textures/&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">// const texture = cubeTextureLoader.load([</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;1.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;2.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;3.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;4.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;5.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;6.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">// ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加圆柱形天空</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rgbeloader</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RGBELoader</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">rgbeloader.</span><span style="color:#6F42C1;">loadAsync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./textures/2k.hdr&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">texture</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置纹理为圆柱形纹理</span></span>
<span class="line"><span style="color:#24292E;">  texture.mapping </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.EquirectangularReflectionMapping;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 添加天空环境</span></span>
<span class="line"><span style="color:#24292E;">  scene.background </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> texture;</span></span>
<span class="line"><span style="color:#24292E;">  scene.environment </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> texture;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 场景亮度物理灯光效果</span></span>
<span class="line"><span style="color:#6A737D;">// 1设置色调映射</span></span>
<span class="line"><span style="color:#6A737D;">// 2设置曝光</span></span>
<span class="line"><span style="color:#6A737D;">// 3设置场景灯光</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 给场景添加平行光</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">light</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DirectionalLight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0xffffff</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">light.position.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(light);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> scene;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> cameraModule </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./camera&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> rendererModule </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./renderer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新摄像头</span></span>
<span class="line"><span style="color:#E1E4E8;">cameraModule.activeCamera.aspect </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#6A737D;">//   更新摄像机的投影矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">cameraModule.activeCamera.</span><span style="color:#B392F0;">updateProjectionMatrix</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听屏幕大小改变的变化，设置渲染的尺寸</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;resize&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(&quot;resize&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 更新摄像头</span></span>
<span class="line"><span style="color:#E1E4E8;">  cameraModule.activeCamera.aspect </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   更新摄像机的投影矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">  cameraModule.activeCamera.</span><span style="color:#B392F0;">updateProjectionMatrix</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   更新渲染器</span></span>
<span class="line"><span style="color:#E1E4E8;">  rendererModule.renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   设置渲染器的像素比例</span></span>
<span class="line"><span style="color:#E1E4E8;">  rendererModule.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(window.devicePixelRatio);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 更新cssrender</span></span>
<span class="line"><span style="color:#E1E4E8;">  rendererModule.css3drender.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> cameraModule </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./camera&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> rendererModule </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./renderer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新摄像头</span></span>
<span class="line"><span style="color:#24292E;">cameraModule.activeCamera.aspect </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.innerWidth </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#6A737D;">//   更新摄像机的投影矩阵</span></span>
<span class="line"><span style="color:#24292E;">cameraModule.activeCamera.</span><span style="color:#6F42C1;">updateProjectionMatrix</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听屏幕大小改变的变化，设置渲染的尺寸</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;resize&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(&quot;resize&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 更新摄像头</span></span>
<span class="line"><span style="color:#24292E;">  cameraModule.activeCamera.aspect </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.innerWidth </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   更新摄像机的投影矩阵</span></span>
<span class="line"><span style="color:#24292E;">  cameraModule.activeCamera.</span><span style="color:#6F42C1;">updateProjectionMatrix</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   更新渲染器</span></span>
<span class="line"><span style="color:#24292E;">  rendererModule.renderer.</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   设置渲染器的像素比例</span></span>
<span class="line"><span style="color:#24292E;">  rendererModule.renderer.</span><span style="color:#6F42C1;">setPixelRatio</span><span style="color:#24292E;">(window.devicePixelRatio);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 更新cssrender</span></span>
<span class="line"><span style="color:#24292E;">  rendererModule.css3drender.</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,9),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const D=s(l,[["render",t]]);export{u as __pageData,D as default};
