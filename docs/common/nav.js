import sidebar from "./sidebar";
export default [
  { text: "首页", link: "/" },
  { text: "导航", link: "/nav/" },
  { text: "项目", items: sidebar["/project/"] },
  { text: "编程", items: sidebar["/articles/"] },
  { text: "笔记", items: sidebar["/notes/"] },
  { text: "工具", items: sidebar["/tool/"] },
  {
    text: "常用链接",
    items: [
      { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
      { text: "Github", link: "https://github.com/coding-lin" },
    ],
  },
];
