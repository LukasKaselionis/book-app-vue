import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

const resolve = (dir: string): string => join(__dirname, dir);

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
})
