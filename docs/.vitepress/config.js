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
        text: "article",
        items: [
          { text: "git", link: "/articles/git" },
          { text: "markdown语法", link: "/articles/mdsyntax" },
          { text: "gitpage", link: "/articles/gitpage" },
          { text: "threejs环境搭建", link: "/articles/threejs-env" },
          { text: "通义灵码", link: "/articles/通义灵码使用" },
          { text: "blender快捷键", link: "/articles/blender快捷键" },
          { text: "3D模型-光源-动画", link: "/articles/3D模型-光源-动画" },
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
