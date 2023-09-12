<template>
  <div>
    <el-drawer
      :model-value="isShow"
      title="设置"
      :with-header="true"
      :before-close="handleClose"
    >
      <template #header>
        <h4>设置</h4>
      </template>
      <template #default>
        <div>
          <span>默认颜色：</span>
          <el-color-picker v-model="color" @change="handleChangeColor" />
        </div>
        <div>
          <span>黑暗模式：</span>
          <el-switch
            v-model="isDark"
            inline-prompt
            :active-icon="Check"
            :inactive-icon="Close"
            @change="handleChangeDark"
          />
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
const isShow = ref(false)
const color = ref('#409EFF')
const isDark = ref(false)
/* ===================================== methods ===================================== */
const handleClose = () => {
  isShow.value = false
}
const handleOpen = () => {
  isShow.value = true
}
const handleChangeColor = () => {
  const html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}
const handleChangeDark = () => {
  const html = document.documentElement
  isDark.value ? (html.className = 'dark') : (html.className = '')
}
/* ===================================== export ===================================== */
defineExpose({
  handleOpen
})
</script>

<style lang="scss" scoped></style>
