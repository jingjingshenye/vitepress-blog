import project from "./sidebarData/project";
import articles from "./sidebarData/articles";
export default {
  "/home/": [
    {
      text: "home",
      items: [{ text: "website", link: "/nav/website" }],
    },
  ],
  "/project/": project,
  "/articles/": articles,
  "/tool/": [
    { text: "git", link: "/tool/git" },
    { text: "markdown语法", link: "/tool/mdsyntax" },
    { text: "gitpage", link: "/tool/gitpage" },
    { text: "通义灵码", link: "/tool/通义灵码使用" },
    { text: "vscode", link: "/tool/vscode" },
    { text: "图床", link: "/notes/图床" },
  ],
  "/3D/": [
    {
      text: "threejs",
      items: [
        { text: "threejs环境搭建", link: "/3D/threejs/threejs-env" },
        { text: "threejs", link: "/3D/threejs/threejs" },
      ],
    },
    {
      text: "blender",
      items: [
        { text: "blender快捷键", link: "/3D/blender/blender快捷键" },
        {
          text: "3D模型-光源-动画",
          link: "/3D/blender/3D模型-光源-动画",
        },
        {
          text: "blender建模地形",
          link: "/3D/blender/blender建模地形",
        },
      ],
    },
  ],
  "/Linux/": [
    {
      text: "Linux",
      items: [
        { text: "服务器相关", link: "/Linux/服务器相关" },
        { text: "Nginx", link: "/Linux/Nginx" },
        { text: "PM2", link: "/Linux/pm2" },
        { text: "Linux常用命令", link: "/Linux/常用命令" },
      ],
    },
  ],
  "/notes/": [
    { text: "webrtc", link: "/notes/webrtc" },
    { text: "onlyoffice", link: "/notes/onlyoffice" },
    { text: "产品经理", link: "/notes/产品经理" },
    { text: "http模块", link: "/notes/http模块" },
  ],
};
