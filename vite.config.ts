import { defineConfig } from 'vite'
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    },
    preprocessorOptions: {
      scss: {
        // 上面方法已弃用
        // additionalData: '@import "@/styles/global.scss";'
        additionalData: '@use "@/styles/global.scss" as *;',
        api: "modern-compiler", // 修改api调用方式
      },
    },
  }
})
