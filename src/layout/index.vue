<template>
  <div>
    <el-container class="layout_container">
      <!-- 侧边栏 -->
      <el-aside class="layout_side">
        <SideMenu />
      </el-aside>
      <!-- 主体内容 -->
      <el-main class="layout_main">
        <div class="header_box">
          <Header />
        </div>
        <div class="content_box">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <div class="layout_side"></div>
  </div>
</template>

<script setup lang="ts">
import SideMenu from './components/sideMenu/index.vue'
import Header from './components/Header.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  display: flex;
  .layout_side {
    width: $base_side_width;
    background-color: $base_color;
    height: 100vh;
  }
  .layout_main {
    width: calc(100% - $base_side_width);
    background-color: bisque;
    .header_box {
      height: 40px;
      display: flex;
      justify-content: space-between;
      .header_right {
      }
    }
    .content {
      height: calc(100vh - 40px);
    }
  }
}
</style>
