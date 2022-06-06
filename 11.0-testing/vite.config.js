import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Starter from 'unplugin-clear-testid/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        Starter({
          attrs: ['data-testid', 'data-cy'],
          production: process.env.NODE_ENV === 'production'
        }),
      ]
    }
  }
})
