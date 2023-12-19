<template>
  <div class="wrapper">
    <div class="container" v-for="(item1, index) in websiteData" :key="index">
      <h2 class="title" :id="slugify(item1.title)" tabindex="-1">
        {{ item1.title }}
        <a
          class="header-anchor"
          :href="`#${slugify(item1.title)}`"
          aria-hidden="true"
        ></a>
      </h2>
      <div class="list">
        <div
          class="web"
          v-for="(item2, index) in item1.items"
          :key="index"
          @click="toWebsite(item2)"
        >
          <div class="logo-container">
            <img v-if="item2.icon" :src="item2.icon" class="img" />
            <span v-else class="img">{{ item2.title.slice(0, 4) }}</span>
          </div>

          <div class="name">
            {{ item2.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
defineProps({
  websiteData: {
    type: Array,
    default: () => websiteData,
  },
});

function toWebsite(item) {
  console.log(item);
  window.open(item.link);
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 700px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.container {
  /* width: 500px;
  min-height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  /* margin-bottom: 30px; */
  font-size: 26px;
  font-weight: bold;
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.web {
  width: 120px;
  height: 120px;
  border: black 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.logo-container {
  display: flex;
  justify-content: space-evenly;
  .img {
    // width: 50px;
    height: 50px;
    object-fit: contain;
    background-color: #f1f1f1;
    border-radius: 5px;
  }
}
.name {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 110px;
  // display: -webkit-box;
  // -webkit-box-orient: vertical;
  // -webkit-line-clamp: 2;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // word-break: break-all; //只对英文起作用，以字母作为换行依据
  // word-wrap: break-word; //只对英文起作用，以单词作为换行依据
  // white-space: pre-wrap; //只对中文起作用，强制换行
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; //不换行，超出部分隐藏且以省略号形式出现
}
</style>
