let routes = [
  {
    path: '/userManage',
    component: () => import('@/views/home/userManage/index.vue'),
    name: 'userManage',
    children: [
      {
        path: '/userList',
        component: () => import('@/views/home/userManage/userList/index.vue'),
        name: 'userList'
      },
      {
        path: '/userDetails',
        component: () =>
          import('@/views/home/userManage/userDetails/index.vue'),
        name: 'userDetails'
      }
    ]
  },
  {
    path: '/orderManage',
    component: () => import('@/views/home/orderManage/index.vue'),
    name: 'orderManage',
    children: [
      {
        path: '/orderList',
        component: () => import('@/views/home/orderManage/orderList/index.vue'),
        name: 'orderList'
      },
      {
        path: '/orderDetails',
        component: () =>
          import('@/views/home/orderManage/orderDetails/index.vue'),
        name: 'orderDetails'
      }
    ]
  }
]

export default routes
