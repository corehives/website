import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'embla-carousel-react'],
        },
      },
    },
  },
  assetsInclude: ["**/*.mpeg"]
})
