import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'MalayalamNews', // ഉദാഹരണത്തിന് റെപ്പോ പേര് 'my-website' എന്നാണെങ്കിൽ '/my-website/' എന്ന് നൽകുക
}),
  server: {
    port: 3000,
    proxy: {
      '/api/rss': {
        target: 'https://api.allorigins.win',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rss/, '/get'),
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})
