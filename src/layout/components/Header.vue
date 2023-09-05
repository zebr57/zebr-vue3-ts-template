<template>
  <div class="header_container">
    <div class="header_container_icon">
      <el-icon v-show="isCollapse" @click="handleToggle"><Expand /></el-icon>
      <el-icon v-show="!isCollapse" @click="handleToggle"><Fold /></el-icon>
    </div>
    <div class="header_container_user_info">
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
import router from '@/router'
import useMainStore from '@/store/modules/main'
import { UserInfo } from '@/store/modules/type'
import useUserStore from '@/store/modules/user'
import { ElMessage } from 'element-plus'
import { computed } from 'vue'

let mainStore = useMainStore()
let userStore = useUserStore()

const isCollapse = computed(() => {
  return mainStore.isCollapse
})
const username = computed(() => {
  return userStore.userInfo.username || localStorage.getItem('username')
})

const handleToggle = () => {
  mainStore.setIsCollapse(!isCollapse.value)
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
  }
  &_user_info {
    cursor: pointer;
  }
}
</style>
