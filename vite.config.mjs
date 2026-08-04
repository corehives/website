import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const isServer = fs.existsSync('/home/corexger/public_html');
const outDir = isServer ? '../public_html' : 'public';

export default defineConfig({
  plugins: [react()],
  publicDir: 'static',
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/sitemap.xml": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir,
    emptyOutDir: isServer ? false : true,
    target: 'es2020',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
            return 'three-vendor';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/embla-carousel-react')) {
            return 'ui-vendor';
          }
        },
      },
    },
  },
  assetsInclude: ['**/*.mpeg'],
})
