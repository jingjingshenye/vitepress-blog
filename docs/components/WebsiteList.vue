<template>
  <div class="wrapper">
    <div class="container" v-for="(item1, index) in websiteData" :key="index">
      <div class="title">{{ item1.title }}</div>
      <div class="list">
        <div
          class="web"
          v-for="(item2, index) in item1.list"
          :key="index"
          @click="toWebsite(item2)"
        >
          <div class="logo-container">
            <img v-if="item2.logo" :src="item2.logo" />
            <span v-else>{{ item2.name.slice(0, 4) }}</span>
          </div>

          <div class="name">
            {{ item2.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

<style>
.wrapper {
  margin-top: 20px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.container {
  /* width: 500px;
  min-height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
}
.title {
  /* margin-bottom: 30px; */
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.web {
  width: 150px;
  height: 80px;
  border: black 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-container {
  width: 40px;
  height: 40px;
}
.logo-container img {
  display: block;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-color: #f1f1f1;
  border-radius: 5px;
}
</style>
