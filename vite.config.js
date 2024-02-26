import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                p404: resolve(__dirname, 'p404.html'),
                cases: resolve(__dirname, 'cases.html'),
            }
        }
    }
});