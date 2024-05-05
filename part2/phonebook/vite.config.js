import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this is pointing to 'dist' and not 'dist/assets'
    assetsDir: 'assets',  // This will put other assets in /dist/assets
    rollupOptions: {
      // Additional Rollup options if needed
    }
  }
});
