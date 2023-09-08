<template>
  <div class="header_container">
    <div class="header_container_icon">
      <el-icon v-show="isCollapse" @click="handleToggle"><Expand /></el-icon>
      <el-icon v-show="!isCollapse" @click="handleToggle"><Fold /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in currentRouteList" :key="item.path">{{
          item.meta.title
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header_container_user_info">
      <el-tooltip
        class="box-item"
        effect="light"
        content="刷新"
        placement="bottom"
      >
        <el-icon @click="handleRefresh"><Refresh /></el-icon>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="light"
        content="全屏"
        placement="bottom"
      >
        <el-icon @click="handleFullScreen"><FullScreen /></el-icon>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="light"
        content="设置"
        placement="bottom"
      >
        <el-icon @click="handleSetting"><Setting /></el-icon>
      </el-tooltip>
      <el-divider direction="vertical" content-position="center"></el-divider>

      <el-dropdown trigger="click" @command="handleCommand">
        <span>
          Hi, {{ username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'
import useMainStore from '@/store/modules/main'
import { UserInfo } from '@/store/modules/type'
import useUserStore from '@/store/modules/user'
import { ElMessage } from 'element-plus'
import {
  ArrowRight,
  FullScreen,
  Refresh,
  Setting
} from '@element-plus/icons-vue'

let mainStore = useMainStore()
let userStore = useUserStore()
/* ===================================== data ===================================== */
const isCollapse = computed(() => {
  return mainStore.isCollapse
})
const username = computed(() => {
  return userStore.userInfo.username || localStorage.getItem('username')
})
const currentRouteList = computed(() => {
  const len = router.currentRoute.value.matched.length - 1
  return router.currentRoute.value.matched.slice(1, len)
})
/* ===================================== methods ===================================== */
const handleToggle = () => {
  mainStore.setIsCollapse(!isCollapse.value)
}
const handleFullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
  console.log('handleFullScreen')
}
const handleRefresh = () => {
  mainStore.setRefresh()
  console.log('handleRefresh')
}
const handleSetting = () => {
  console.log('handleSetting')
}

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'profile':
      ElMessage(`click on item ${command}`)
      break
    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      userStore.setUserInfo(new Object() as UserInfo)
      router.push('/login')
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #eee;
  &_icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  &_user_info {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
