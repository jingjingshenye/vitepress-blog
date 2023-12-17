<script setup>
import { useRouter } from "vitepress";

const { go } = useRouter();
function toLink(url) {
  //   window.open(url);
  go(url);
}

function toHome() {
  toLink("/blog/");
}
function toArticle() {
  toLink("/articles/typescript");
}
function toTec() {
  toLink("/project/canvas");
}
function toNotes() {
  toLink("/notes/");
}
function toTool() {
  toLink("/tool/git");
}

function openPage(URL) {
  window.open(URL);
}
function toGithub() {
  openPage("https://github.com/");
}

function toProjectList() {}
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="title">MY PAGE</div>
      <div class="nav">
        <div @click="toHome">主页</div>
        <div @click="toArticle">编程</div>
        <div @click="toTec">项目</div>
        <div @click="toNotes">笔记</div>
        <div @click="toTool">工具</div>
        <div @click="toGithub">GITHUB</div>
      </div>
    </header>
    <main class="main">
      <div class="avatar">
        <img class="avatar" src="/img/avatar-WMa95p5x.jpg" alt="avatar" />
      </div>
      <div class="tips">Record, Share, and Grow</div>
      <div tips="bar" class="bar">
        <div class="btn" @click="toNotes">Notebook</div>
        <div class="btn" @click="toTec">Technology</div>
      </div>
    </main>
    <footer class="footer">
      A lifetime is short, like a white horse passing through a gap, fleeting,
      but this mood is long, like mountains and rivers, stretching endlessly
      <div>Powered by Vuepress, Github</div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  color: #fff;
  padding: 0px 30px 0px 30px;
  box-sizing: border-box;

  .title {
    font-size: 38px;
    font-weight: bold;
  }

  .nav {
    display: flex;
    gap: 20px;
    font-size: 20px;
    font-weight: lighter;
    cursor: pointer;
  }
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-top: -20px;

  .avatar {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: aquamarine;
    box-shadow: 0 0 10px #000;
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .btn {
    min-width: 100px;
    height: 30px;
    border: rgb(63, 145, 117) 1px solid;
    color: rgb(63, 145, 117);
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #cac2c2;
    }

    cursor: pointer;
  }
}

.footer {
  // width: 100vw;
  // height: 10vh;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 12px;
  font-weight: bold;
}
</style>
