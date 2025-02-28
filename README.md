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

## 使用 Prettier 自动对类别进行排序
```bash
npm install -D prettier prettier-plugin-tailwindcss
```
```json
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.js"
}
```
自动格式化文件
```bash
npx prettier --write 文件名称
```
自动格式化目录下所有文件，不建议使用该方法
```bash
npx prettier --write .
```
或者使用编辑器里 `prettier` 插件进行格式化
```html
<!-- Before -->
<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>

<!-- After -->
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
```



## tailwind-ui
超过 500+ 专业设计、完全响应、专业制作的组件示例，您可以放入 Tailwind 项目中，并根据自己的喜好进行自定义。
https://tailwindui.com/

## 预览
<img src="https://github.com/erha2777/public/blob/main/images/024f78f0f736afc3005f6534a319ebc4b745120b.png" />
<img src="https://github.com/erha2777/public/blob/main/images/aa64034f78f0f736d7ad16501a55b319ebc4130b.png" />
<img src="https://github.com/erha2777/public/blob/main/images/838ba61ea8d3fd1f723ae76b204e251f95ca5fab.png" />
<img src="https://github.com/erha2777/public/blob/main/images/a71ea8d3fd1f4134a304402f351f95cad1c85eab.png" />
