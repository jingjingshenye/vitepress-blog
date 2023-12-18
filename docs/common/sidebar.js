export default {
  "/home/": [
    {
      text: "home",
      items: [{ text: "website", link: "/nav/website" }],
    },
  ],
  "/project/": [
    {
      text: "threejs",
      link: "/project/threejs",
    },
    {
      text: "canvas",
      link: "/project/canvas",
    },
    {
      text: "electron",
      link: "/project/electron",
    },
    {
      text: "editor",
      link: "/project/editor",
    },
    {
      text: "lowcode",
      link: "/project/lowcode",
    },
  ],
  "/articles/": [
    { text: "typescript", link: "/articles/typescript" },
    { text: "cli", link: "/articles/cli" },
    { text: "package.json指南", link: "/articles/packagejson指南" },
    { text: "commonjs与esmodule", link: "/articles/commonjs与esmodule" },
    {
      text: "threejs",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "threejs环境搭建", link: "/articles/threejs/threejs-env" },
        { text: "threejs", link: "/articles/threejs/threejs" },
      ],
    },
    {
      text: "https",
      collapsible: true,
      collapsed: false,
      items: [{ text: "axios", link: "/articles/https/axios" }],
    },
    {
      text: "blender",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "blender快捷键", link: "/articles/blender/blender快捷键" },
        {
          text: "3D模型-光源-动画",
          link: "/articles/blender/3D模型-光源-动画",
        },
        {
          text: "blender建模地形",
          link: "/articles/blender/blender建模地形",
        },
      ],
    },
    {
      text: "css",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "css原子样式", link: "/articles/css/css原子样式" },
        { text: "css通用默认样式", link: "/articles/css/css通用默认样式" },
        { text: "postcss配置", link: "/articles/css/postcss配置" },
        { text: "scss", link: "/articles/css/scss" },
        { text: "tailwindcss", link: "/articles/css/tailwindcss" },
        { text: "常用css", link: "/articles/css/常用css" },
      ],
    },
  ],
  "/notes/": [
    { text: "css生成器", link: "/notes/css生成器" },
    { text: "图床", link: "/notes/图床" },
    { text: "yarn", link: "/notes/yarn" },
    { text: "常用正则", link: "/notes/常用正则" },
    { text: "常用代码片段", link: "/notes/常用代码片段" },
  ],
  "/tool/": [
    { text: "git", link: "/tool/git" },
    { text: "markdown语法", link: "/tool/mdsyntax" },
    { text: "gitpage", link: "/tool/gitpage" },
    { text: "通义灵码", link: "/tool/通义灵码使用" },
    { text: "vscode", link: "/tool/vscode" },
  ],
};
