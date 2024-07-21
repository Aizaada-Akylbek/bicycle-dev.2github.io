import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/bicycle-dev.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist', // папка для сборки
    rollupOptions: {
      // Дополнительные настройки Rollup, если требуется
    },
  }
})
