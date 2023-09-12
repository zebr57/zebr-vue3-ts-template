<template>
  <div>
    <el-container class="layout_container">
      <!-- 侧边栏 -->
      <el-aside class="layout_side" :style="{ width: sideMenuWidth + 'px' }">
        <SideMenu />
      </el-aside>
      <!-- 主体内容 -->
      <el-main class="layout_main">
        <el-container>
          <el-header height="40px">
            <!-- Header content -->
            <Header />
          </el-header>
          <el-main class="content_box">
            <!-- Main content -->
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" v-if="flag"></component>
              </transition>
            </router-view>
          </el-main>
        </el-container>

        <!-- <div class="header_box">
          <Header />
        </div>
        <div class="content_box">
          <router-view></router-view>
        </div> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideMenu from './components/sideMenu/index.vue'
import Header from './components/Header.vue'

import useMainStore from '@/store/modules/main'
import { Transition, computed, ref, nextTick, watch } from 'vue'

let mainStore = useMainStore()

// 刷新
let flag = ref(true)
watch(
  () => mainStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
// 折叠菜单宽度改变
let sideMenuWidth = computed(() => {
  return mainStore.sideMenuWidth
})
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  display: flex;
  .layout_side {
    // background-color: $base_color;
    height: 100vh;
    transition: all 0.3s;
  }
  .layout_main {
    flex: 1;
    padding: 0px;
    .content_box {
      height: calc(100vh - 40px);
    }
  }
}
</style>
