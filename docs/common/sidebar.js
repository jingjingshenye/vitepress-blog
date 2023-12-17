export default {
  "/nav/": [
    {
      text: "nav",
      items: [{ text: "website", link: "/nav/website" }],
    },
  ],
  "/project/": [
    {
      text: "project",
      items: [
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
    },
  ],
  "/articles/": [
    {
      text: "article",
      items: [
        { text: "typescript", link: "/articles/typescript" },
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
    },
  ],
  "/tool/": [
    { text: "git", link: "/tool/git" },
    { text: "markdown语法", link: "/tool/mdsyntax" },
    { text: "gitpage", link: "/tool/gitpage" },
    { text: "通义灵码", link: "/tool/通义灵码使用" },
  ],
};
