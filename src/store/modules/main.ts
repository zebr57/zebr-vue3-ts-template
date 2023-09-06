import { defineStore } from 'pinia'

const mainStore = defineStore('main', {
  state: () => {
    return {
      sideMenuWidth: 210,
      isCollapse: false,
      refresh: 1
    }
  },
  actions: {
    setIsCollapse(value: boolean) {
      this.isCollapse = value
      this.sideMenuWidth = value ? 64 : 210
    },
    setRefresh() {
      this.refresh += 1
    }
  },
  getters: {
    getIsCollapse: (state) => {
      return state.isCollapse
    }
  }
})

export default mainStore
