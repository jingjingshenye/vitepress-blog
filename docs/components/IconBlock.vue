<template>
  <div class="wrapper">
    <div
      class="icon-block"
      v-for="(item, index) in websiteData"
      :key="index"
      @click="toWebsite(item)"
    >
      <div class="icon-block__icon">
        {{ item.icon }}
      </div>
      <div class="icon-block__content">
        {{ item.title }}
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
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.icon-block {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
