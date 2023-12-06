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
        text: "article",
        items: [
          { text: "git", link: "/articles/git" },
          { text: "markdown语法", link: "/articles/mdsyntax" },
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
            text: "video",
            link: "/project/video",
          },
          {
            text: "weboffice",
            link: "/project/onlineOffice",
          },
          // {
          //   text: "ide",
          //   link: "/project/ide",
          // },
          // {
          //   text: "lowcode",
          //   link: "/project/lowcode",
          // },
          // {
          //   text: "flutter",
          //   link: "/project/flutter",
          // },
        ],
      },
    ],
  },
};
