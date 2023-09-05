<template>
  <div>
    <div class="side_menu_container">
      <el-menu
        :router="true"
        default-active="charts"
        class="side_el_menu"
        :collapse="isCollapse"
        :collapse-transition="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="logo_box">
          <img src="~@/assets//vue.svg" alt="" srcset="" />
          <span v-show="!isCollapse" class="title">后台管理平台</span>
        </div>
        <MenuItem v-for="item in menuList" :item="item" :key="item.path" />
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import menuList from '@/router/mainRoutes'
import useMainStore from '@/store/modules/main'
import { computed } from 'vue'

let mainStore = useMainStore()

let isCollapse = computed(() => {
  return mainStore.isCollapse
})
// interface menuListType {
//   path: string
//   component: any
//   name: string
//   children: Array<menuListType>
// }

const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="scss" scoped>
.side_menu_container {
  height: calc(100vh - 48px);
  .logo_box {
    padding: 12px 12px 0px;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 48px;
    overflow: hidden;
    img {
      width: 36px;
      height: 36px;
    }
    .title {
      height: 48px;
      line-height: 48px;
    }
  }
  .side_el_menu {
    height: 100%;
  }
}
</style>
