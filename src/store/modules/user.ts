// 引入定义
import { defineStore } from 'pinia'
import type { UserInfo } from './type'
// 用户相关小仓库
let useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {}
    }
  },
  actions: {
    setUserInfo(data: UserInfo) {
      this.userInfo = data
    }
  },
  getters: {}
})

// 暴露
export default useUserStore
