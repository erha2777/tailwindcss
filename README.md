# TailwindCSS在vite项目中使用
tailwindcss通过 npm安装，并创建你的tailwind.config.js 文件。 Vite创建的项目默认集成了PostCSS，而TailwindCSS本身就是一个PostCSS插件，所以直接使用即可。
## 安装
```bash
npm install -D tailwindcss postcss autoprefixer
```

## 生成配置文件
```bash
npx tailwindcss init
```

## tailwind.config.js配置
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## postcss.config.js配置
```js
module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: {},
    },
}
```

## vite.config.ts配置
```ts
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
    }
  }
})
```

## 引入Tailwind的基本指令
```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```js
/* main.ts */
import './tailwind.css'
```