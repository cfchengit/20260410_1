import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 請將 'project1' 替換成您在 GitHub 上的實際儲存庫名稱
  base: '/project1/',
})
