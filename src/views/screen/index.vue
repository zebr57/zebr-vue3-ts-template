<template>
  <div class="screen_container">
    <div ref="screen" class="screen">
      <div class="top_box">这是顶部</div>
      <div class="main_box">这是主体内容</div>
      <div class="bottom_box">这是底部</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  // 计算比例
  function getScale(w = 1920, h = 1080) {
    const ww = window.innerWidth / w
    const wh = window.innerHeight / h
    return ww < wh ? ww : wh
  }
  window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  }
})
</script>

<style lang="scss" scoped>
.screen_container {
  width: 100vw;
  height: 100vh;
  background: url('./images/the_amazing_spiderman_2012-wallpaper-1920x1080.jpg')
    no-repeat;
  background-size: cover;
  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    background-color: red;
    left: 50%;
    top: 50%;
    transform-origin: left top;
    display: flex;
    flex-direction: column;
  }
  .top_box {
    height: 48px;
    width: 100%;
    background-color: pink;
  }
  .main_box {
    flex: 1;
  }
  .bottom_box {
    height: 48px;
    width: 100%;
    background-color: pink;
  }
}
</style>
