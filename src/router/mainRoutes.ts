let routes = [
  {
    path: '/userManage',
    component: () => import('@/layout/index.vue'),
    name: 'userManage',
    meta: {
      title: '用户管理',
      icon: 'User'
    },
    children: [
      {
        path: '/userList',
        component: () => import('@/views/home/userManage/userList/index.vue'),
        name: 'userList',
        meta: {
          title: '用户列表',
          icon: 'List'
        },
        children: [
          {
            path: '/userListSub1',
            component: () =>
              import('@/views/home/userManage/userList/index.vue'),
            name: 'userListSub1',
            meta: {
              title: '用户列表1',
              icon: 'List'
            }
          },
          {
            path: '/userListSub2',
            component: () =>
              import('@/views/home/userManage/userList/index.vue'),
            name: 'userListSub2',
            meta: {
              title: '用户列表2',
              icon: 'List'
            }
          }
        ]
      },
      {
        path: '/userDetails',
        component: () =>
          import('@/views/home/userManage/userDetails/index.vue'),
        name: 'userDetails',
        meta: {
          title: '用户详情',
          icon: 'ZoomIn'
        }
      }
    ]
  },
  {
    path: '/orderManage',
    component: () => import('@/layout/index.vue'),
    name: 'orderManage',
    meta: {
      title: '订单管理',
      icon: 'Tickets'
    },
    children: [
      {
        path: '/orderList',
        component: () => import('@/views/home/orderManage/orderList/index.vue'),
        name: 'orderList',
        meta: {
          title: '订单列表',
          icon: 'List'
        }
      },
      {
        path: '/orderDetails',
        component: () =>
          import('@/views/home/orderManage/orderDetails/index.vue'),
        name: 'orderDetails',
        meta: {
          title: '订单详情',
          icon: 'ZoomIn'
        }
      }
    ]
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      icon: ''
    }
  }
]

export default routes
