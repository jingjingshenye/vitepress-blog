

# 常用网站

<!-- <WebsiteList :websiteData="websiteDataList" /> -->

## {{websiteDataList[0].title}}

<WebsiteListTwo :websiteData="websiteDataList[0]" />

## {{websiteDataList[1].title}}

<WebsiteListTwo :websiteData="websiteDataList[1]" />

## {{websiteDataList[2].title}}

<WebsiteListTwo :websiteData="websiteDataList[2]" />

## {{websiteDataList[3].title}}

<WebsiteListTwo :websiteData="websiteDataList[3]" />

## {{websiteDataList[4].title}}

<WebsiteListTwo :websiteData="websiteDataList[4]" />

## {{websiteDataList[5].title}}

<WebsiteListTwo :websiteData="websiteDataList[5]" />

<!-- ## {{websiteDataList[6].title}}

<WebsiteListTwo :websiteData="websiteDataList[6]" /> -->

## 其他

<WebsiteList :websiteData="websiteDataList.slice(6)" />

<script setup>
import WebsiteList from '../components/WebsiteList.vue'
import WebsiteListTwo from '../components/WebsiteListTwo.vue'
import {websiteDataList} from "../common/website.js";
</script>