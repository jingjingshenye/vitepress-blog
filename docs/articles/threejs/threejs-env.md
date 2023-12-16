# 搭建vite vue3 threejs开发环境


## 安装依赖

```bash
npm create vue@latest
yarn add three
yarn add dat.gui
add gsap
yarn add mitt //事件通信
```

## 代码封装

src路径下创建three文件夹，分别封装camera、scene、renderer等

camera 

```javascript
import * as THREE from "three";
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  1,
  1000
);
// 设置相机位置
// object3d具有position，属性是1个3维的向量
camera.position.set(100, 100, 300);
export camera

```

renderer

```javascript
import * as THREE from "three";
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

export default renderer;
```

scene

```javascript
import * as THREE from "three";
// 初始化场景
const scene = new THREE.Scene();

export default scene;
```

resezie
```javascript
import camera from "./camera";
import renderer from "./renderer";

// 监听屏幕大小改变的变化，设置渲染的尺寸
window.addEventListener("resize", () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();

  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio);
});

```

控制器

```javascript
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import renderer from "./renderer";
import camera from "./camera";
const orbitcontrols = new OrbitControls(camera, renderer.domElement);
export const flyControls = new FlyControls(camera, renderer.domElement);
export const firstPersonControls = new FirstPersonControls(camera, renderer.domElement);

export default orbitcontrols;

```

resize

```javascript
import camera from "./camera";
import renderer from "./renderer";

// 监听屏幕大小改变的变化，设置渲染的尺寸
window.addEventListener("resize", () => {
  //   console.log("resize");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();

  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio);
  // 更新cssrender
  // css3drender.setSize(window.innerWidth, window.innerHeight);
});
```

animate

```javascript
import renderer from "./renderer";
import scene from "./scene";
import camera from "./camera";
export default function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

object3D

```javascript
import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
export { box };
```

vue 页

```vue
<script setup>
import { onMounted, ref } from "vue";
import scene from "../three/scene";
import camera from "../three/camera";
import renderer from "../three/renderer";
import "../three/resize";
import { box } from "../three/mesh/box";
import animate from "../three/animate";
import orbitcontrols from "../three/controls";

const canvasContainer = ref(null);
scene.add(camera);
scene.add(box);

onMounted(() => {
  canvasContainer.value.appendChild(renderer.domElement);
  animate();
});
</script>

<template>
  <div ref="canvasContainer"></div>
</template>

<style scoped>
.canvasContainer {
  width: 100vw;
  height: 100vh;
}
</style>
```