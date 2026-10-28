import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub *user page* (repo "atramenth.github.io"), which is
// always served from the domain root. Routing is hash-based, so deep links
// work on GitHub Pages without a 404.html redirect hack.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
