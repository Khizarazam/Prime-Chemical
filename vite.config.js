import { defineConfig } from 'vite'
import '@ungap/structured-clone';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Prime-Chemical/'
})
