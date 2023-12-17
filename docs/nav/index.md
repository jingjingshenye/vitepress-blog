---
layout: doc
---

# 导航

<WebsiteList :websiteData="navData" />

<!-- 参考：https://github.com/maomao1996/vitepress-nav-template -->

<script setup>
import WebsiteList from '../components/WebsiteList.vue'
// import WebsiteListTwo from '../components/WebsiteListTwo.vue'
import {websiteDataList, navData} from "../common/website.js";

</script>
