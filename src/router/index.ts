// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import mainRoutes from './mainRoutes'

// 创建路由器示例
let router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      name: 'layout',
      redirect: '/userList',
      children: [...mainRoutes]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login'
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any'
    }
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
