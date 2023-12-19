---
layout: doc
head:
  - - meta
    - name: referrer
      content: no-referrer
---

# 导航

<WebsiteList :websiteData="newData" />

<!-- 参考：https://github.com/maomao1996/vitepress-nav-template -->

<script setup>
import WebsiteList from '../components/WebsiteList.vue'
// import WebsiteListTwo from '../components/WebsiteListTwo.vue'
import {myWibsiteData, navData} from "../common/website.js";
const newData = [...myWibsiteData,...navData]
</script>
