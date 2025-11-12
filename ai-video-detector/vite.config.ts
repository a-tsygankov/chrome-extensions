import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Basic Vite config for Chrome extension
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                popup: 'src/ui/popup.html',
                options: 'src/ui/options.html',
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
})
