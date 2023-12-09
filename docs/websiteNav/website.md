---
layout: page
---

<script setup>
import WebsiteList from '../components/WebsiteList.vue'
import {websiteDataList} from "../common/website.js";
</script>

<!-- # 常用网站 -->

<WebsiteList :websiteData="websiteDataList" />
