// 引入仓库
import { createPinia } from 'pinia'
// 创建大仓库
let pinia = createPinia()
// 导出仓库
export default pinia

/**
 * 在main.ts中引入并使用
 * import pinia from "./store";
 * app.use(pinia)
 * 可在devtools中验证是否引入成功
 */
