import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages answers an unknown path such as /surah/2/17 with its 404.html. Making that file a copy of
 * index.html lets the app start on any address and read the path itself, so links need no "#".
 */
function spaFallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// Deployed as a GitHub *user page* (repo "atramenth.github.io"), which is always served from the domain root.
// Routing uses plain paths (BrowserRouter); the 404.html copy above makes deep links work on GitHub Pages.
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
