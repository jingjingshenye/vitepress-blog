

# 常用网站


<WebsiteList :websiteData="websiteDataList" :id="formatTitle" tabindex="-1" />

<script setup>
import WebsiteList from '../components/WebsiteList.vue'
// import WebsiteListTwo from '../components/WebsiteListTwo.vue'
import {websiteDataList} from "../common/website.js";
</script>