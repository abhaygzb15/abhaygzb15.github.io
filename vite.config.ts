import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain (abhaypawar.me) — no subdirectory needed
  resolve: {
    alias: {
      // Uses global URL (DOM) + import.meta.url (ESM) — no extra deps needed
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
