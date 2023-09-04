<template>
  <div>
    <!-- 有子级菜单 -->
    <template v-if="item.children">
      <el-sub-menu :index="item.name" :key="item.name">
        <!-- 一级 -->
        <template #title>
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归：多级嵌套 -->
        <MenuItem
          v-for="childItem in item.children"
          :item="childItem"
        ></MenuItem>
      </el-sub-menu>
    </template>
    <!-- 没有子级菜单 -->
    <template v-else>
      <el-menu-item :index="item.name" :key="item.name">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <span slot="title">
          {{ item.meta.title }}
        </span>
      </el-menu-item>
    </template>
  </div>
</template>
<script setup lang="ts">
defineProps(['item'])
</script>
<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>
<style scoped></style>
