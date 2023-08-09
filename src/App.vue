<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>

    <SvgIcon iconName="right" />
    <ImgBox />
  </div>
</template>
<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
h2 {
  color: pink;
}
</style>
