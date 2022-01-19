import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize';
export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        assetsDir: '.',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
        sourcemap: true,
    },
    plugins: [
        htmlMinimize(),
        VitePWA()
    ],
    base: './',
});
