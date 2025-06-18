import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

console.log('===>'+import.meta.url)
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build:{
    //拆分打包
    rollupOptions: {
      output: {
        //todo 方式一  通过数组将指定的多个组件进行分组打包
        // manualChunks: {
        //   vue: ['vue','vue-router'],
        //   router: ['@/components/compositionApi/scaled/RouterDemo.vue']
        // },

        //todo 方式二  通过str处理判断分组进行打包
        manualChunks:(id)=> {
          if (id.includes('node_modules')) {
            // return id.toString().split('node_modules/')[1].split('/')[0].toString();
            return 'node_modules'
          }
          if (id.includes('basic')) {
            return 'basic'
          }
        },

      },
    },
  }
})
