import { defineConfig } from 'vite';
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
        }
    },
    plugins: [htmlMinimize()],
    base: './',
});
