import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src') // 相对路径别名配置，使用 @ 代替 src
    }
  },
  // 处理scss变量的配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  },
  // 服务配置
  server: {
    host: '0.0.0.0',
    port: 5820,
    proxy: {
      // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
      // '/api_v1': 'https://www.fastmock.site/mock/0c9368c9f0ac24733913c755609726b9/api_v1'
    }
  }
})
