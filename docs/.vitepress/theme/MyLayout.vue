<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <img class="img" src="/img/avatar-WMa95p5x.jpg" alt="" />
    </template>
  </Layout>
</template>

<style scoped>
.img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
}
</style>
