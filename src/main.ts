import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore 忽略，否则报错打包不成功
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入所有图标并注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入全局样式
import './styles/index.scss'
// 全局组件
import globalComponent from './components/index'
// 路由
import router from './router'
// 全局仓库
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
// 注册所有element图标。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(globalComponent)
app.use(router)
app.use(pinia)

// svg插件应用配置
import 'virtual:svg-icons-register'

console.log(import.meta.env)
app.mount('#app')
