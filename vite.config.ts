import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,pdf,svg,xml,webmanifest}']
      },
      includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.png', 
        'favicon-*.png', 
        '*.jpg', 
        '*.pdf',
        'site.webmanifest',
        'browserconfig.xml'
      ],
      manifest: false,
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,pdf,svg,xml,webmanifest}']
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}) 