import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from "vite";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('./assets/logo')) {
            return 'assets-logos';
          }
          if (id.includes('@')) {
            return 'components';
          }
          if (id.includes('stores')) {
            return 'stores';
          }
          if (id.includes('vue3-youtube')) {
            return 'vendor-vue-youtube';
          }
          if (id.includes('~')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
