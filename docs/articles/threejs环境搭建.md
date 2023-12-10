# 搭建vite vue3 threejs开发环境


## 安装依赖

```javascript

npm create vue@latest

yarn add three

yarn add dat.gui

yarn add gsap

yarn add mitt //事件通信

```

## 代码封装

src路径下创建three文件夹，分别封装camera、scene、renderer等

```javascript
import * as THREE from "three";
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  1,
  100000
);
// 设置相机位置
// object3d具有position，属性是1个3维的向量
camera.position.set(100, 100, 300);
export camera

```

```javascript
import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
  // 设置抗锯齿
  antialias: true,
  // 设置物理灯光模拟效果
  physicallyCorrectLights: true,
  // 设置对数深度缓冲区
  logarithmicDepthBuffer: true,
});
// 设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// 调节色调映射
renderer.toneMapping = THREE.ACESFilmicToneMapping;
// 调节曝光
renderer.toneMappingExposure = 0.8;

// 创建css3drender
const css3drender = new CSS3DRenderer();
css3drender.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".cssrender").appendChild(css3drender.domElement);

export default { renderer, css3drender };
```

```javascript
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// 初始化场景
const scene = new THREE.Scene();

// 添加雾霾
// const fog = new THREE.Fog(0x000000, 0, 10);
// scene.fog = fog;

// const cubeTextureLoader = new THREE.CubeTextureLoader().setPath("./textures/");
// const texture = cubeTextureLoader.load([
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
// ]);

// 添加圆柱形天空
const rgbeloader = new RGBELoader();

rgbeloader.loadAsync("./textures/2k.hdr").then((texture) => {
  // 设置纹理为圆柱形纹理
  texture.mapping = THREE.EquirectangularReflectionMapping;
  // 添加天空环境
  scene.background = texture;
  scene.environment = texture;
});

// 场景亮度物理灯光效果
// 1设置色调映射
// 2设置曝光
// 3设置场景灯光

// 给场景添加平行光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 100, 10);
scene.add(light);

export default scene;
```

```javascript
import cameraModule from "./camera";
import rendererModule from "./renderer";

// 更新摄像头
cameraModule.activeCamera.aspect = window.innerWidth / window.innerHeight;
//   更新摄像机的投影矩阵
cameraModule.activeCamera.updateProjectionMatrix();

// 监听屏幕大小改变的变化，设置渲染的尺寸
window.addEventListener("resize", () => {
  //   console.log("resize");
  // 更新摄像头
  cameraModule.activeCamera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  cameraModule.activeCamera.updateProjectionMatrix();

  //   更新渲染器
  rendererModule.renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比例
  rendererModule.renderer.setPixelRatio(window.devicePixelRatio);
  // 更新cssrender
  rendererModule.css3drender.setSize(window.innerWidth, window.innerHeight);
});

```