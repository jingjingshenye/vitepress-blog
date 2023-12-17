import nav from "../common/nav";
import sidebar from "../common/sidebar";
export default {
  title: "My PAGE",
  description: "",
  base: "/blog/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // markdown: {
  //   lineNumbers: true,
  // },

  themeConfig: {
    logo: "/logo.jpg",
    aside: "true",
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "http://www.w3.org/",
        // 你还可以为辅助功能添加自定义标签（可选，推荐）
        // ariaLabel: 'cool link'
      },
    ],
  },
};
