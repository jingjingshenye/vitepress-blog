export default {
  title: "my notebook",
  description: "",
  base: "/blog/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: "",
    aside: "true",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "常用链接",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
          { text: "Github", link: "https://github.com/coding-lin" },
        ],
      },
    ],

    sidebar: [
      {
        text: "nav",
        items: [
          { text: "website", link: "/websiteNav/website" },
          // { text: "tool", link: "/websiteNav/tool" },
        ],
      },
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
          // {
          //   text: "ide",
          //   link: "/project/ide",
          // },
          // {
          //   text: "video",
          //   link: "/project/video",
          // },
          // {
          //   text: "weboffice",
          //   link: "/project/weboffice",
          // },
          // {
          //   text: "flutter",
          //   link: "/project/flutter",
          // },
        ],
      },
      {
        text: "article",
        items: [
          { text: "git", link: "/articles/git" },
          { text: "markdown语法", link: "/articles/mdsyntax" },
          { text: "gitpage", link: "/articles/gitpage" },
          { text: "通义灵码", link: "/articles/通义灵码使用" },
          {
            text: 'threejs',
            collapsible: true,
            collapsed: false,
            items: [
              { text: "threejs环境搭建", link: "/articles/threejs/threejs-env" },
              { text: "threejs", link: "/articles/threejs/threejs" },

            ]
          },
          {
            text: 'blender',
            collapsible: true,
            collapsed: false,
            items: [
              { text: "blender快捷键", link: "/articles/blender/blender快捷键" },
              { text: "3D模型-光源-动画", link: "/articles/blender/3D模型-光源-动画" },
              { text: "blender建模地形", link: "/articles/blender/blender建模地形" },
            ]
          },
          {
            text: 'css',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'css原子样式', link: "/articles/css/css原子样式" },
              { text: 'css通用默认样式', link: "/articles/css/css通用默认样式" },
              { text: 'postcss配置', link: "/articles/css/postcss配置" },
              { text: 'scss', link: "/articles/css/scss" },
              { text: 'tailwindcss', link: "/articles/css/tailwindcss" },
              { text: '常用css', link: "/articles/css/常用css" },
            ]
          },
        ],
      },

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: 'http://www.w3.org/',
        // 你还可以为辅助功能添加自定义标签（可选，推荐）
        // ariaLabel: 'cool link'
      }
    ]
  },
};
