import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is set for GitHub Pages deployment at: https://Knowasiak.github.io/pm101-iitbombay/
export default defineConfig({
  plugins: [react()],
  base: '/pm101-iitbombay/',
})
