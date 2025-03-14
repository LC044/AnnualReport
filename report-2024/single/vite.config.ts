import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupPlugin from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 允许外部访问，设置为 'localhost' 只允许本地访问
    port: 5174,      // 设置你想要的端口
  },
  plugins: [
    vue(),
    vueDevTools(),
    VueSetupPlugin(),
  ],
  build: {
    outDir: './dist/',  // 输出目录
    rollupOptions: {
      input: {
        main: '/index.html', // 替换为你的 HTML 文件路径
      },
    },
  },
  base: '/2024/single/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
