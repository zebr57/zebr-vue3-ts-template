import SvgIcon from './SvgIcon/index.vue'
import ImgBox from './ImgBox/index.vue'

import type { App, Component } from 'vue'

const components: { [name: string]: Component } = { SvgIcon, ImgBox }
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}

// 由于全局组件使用频繁，又没有代码输入提示，因此思考如何实现实现该功能
// ⭐️ vscode插件
// 通过setting.json配置获取所需的目录,{ 目录名， 类型: 组件 | 方法 }
// 组件： <组件名>
// 方法：方法名(参数1, 参数2)
