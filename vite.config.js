import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // 請確認 'project1' 是您的 GitHub 儲存庫名稱
})
