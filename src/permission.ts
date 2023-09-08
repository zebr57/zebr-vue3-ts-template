/*
 * @Author: 沈林强
 * @Date: 2023-09-08 11:48:58
 * @LastEditors: 沈林强
 * @LastEditTime: 2023-09-08 18:33:06
 * @Description:
 */

import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: false })

const whiteList = ['/login', '/404'] // 白名单

router.beforeEach((to: any, from: any, next: any) => {
  document.title = `后台管理平台-${to.meta.title}`
  nprogress.start()

  const token = localStorage.getItem('token')
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    const isWhite = whiteList.includes(to.path)
    if (isWhite) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

router.afterEach((to: any, from: any) => {
  nprogress.done()
})
