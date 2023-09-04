<template>
  <div>
    <div class="side_menu_container">
      <el-menu
        :router="true"
        default-active="charts"
        class="side_el_menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <MenuItem v-for="item in menuList" :item="item" :key="item.path" />
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import menuList from '@/router/mainRoutes'

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
  .side_el_menu {
    height: 100%;
  }
}
</style>
