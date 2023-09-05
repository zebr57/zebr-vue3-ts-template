// 引入定义
import { defineStore } from 'pinia'
import type { UserInfo } from './type'

// 用户相关小仓库
let useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        username: '',
        token: ''
      }
    }
  },
  actions: {
    setUserInfo(data: UserInfo) {
      this.userInfo = data
    }
  },
  getters: {
    getToken(): string {
      return this.userInfo.token
    },
    getUserName(): string {
      return this.userInfo.username
    }
  }
})

// 暴露
export default useUserStore
