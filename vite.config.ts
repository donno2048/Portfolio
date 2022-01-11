import { defineConfig } from 'vite';
import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize';
export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
    },
    plugins: [htmlMinimize()],
});