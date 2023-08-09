<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <h2>测试scss变量</h2>
    <SvgIcon iconName="right" />
    <ImgBox />
  </div>
</template>
<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
h2 {
  color: $base_color;
}
</style>
