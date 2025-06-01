import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,xml,webmanifest}'],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 24 * 60 * 60 // 24 hours
              },
              networkTimeoutSeconds: 3,
            }
          },
          {
            urlPattern: /\.(?:pdf)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'documents',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          }
        ]
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
        globPatterns: ['**/*.{js,css,html,ico,svg,xml,webmanifest}']
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