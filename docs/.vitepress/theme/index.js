// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
import "./custom.css";
export default {
  ...DefaultTheme,
  // 用一个注入插槽的组件重写布局
  Layout: MyLayout,
};
