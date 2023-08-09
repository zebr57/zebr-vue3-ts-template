import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// @ts-ignore 忽略，否则报错打包不成功
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import globalComponent from './components/index'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

app.use(globalComponent)

// svg插件应用配置
import 'virtual:svg-icons-register'

console.log(import.meta.env)
app.mount('#app')
