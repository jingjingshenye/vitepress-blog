import sidebar from "./sidebar";
export default [
  { text: "首页", link: "/" },
  { text: "导航", link: "/nav/" },
  { text: "项目", items: sidebar["/project/"] },
  { text: "Linux", items: sidebar["/Linux/"] },
  { text: "前端", items: sidebar["/articles/"] },
  { text: "3D", items: sidebar["/3D/"] },
  { text: "工具", items: sidebar["/tool/"] },
  { text: "笔记", items: sidebar["/notes/"] },
  {
    text: "常用链接",
    items: [
      { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
      { text: "Github", link: "https://github.com/coding-lin" },
    ],
  },
];
