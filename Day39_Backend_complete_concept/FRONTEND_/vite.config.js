import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // adding server configuration
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      // production me ye change kar denge api se jo aa rahi hogi jaha pe humne host kiya hai application ko ex - digital ocean etc
  },
},
  plugins: [react()],
})
