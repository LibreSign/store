import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Livewire/**',
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js'
        }
    },
    server: {
        hmr: {
            host: 'local.test',
        }
    },
    watch: {
        hmr: {
            host: 'local.test',
        },
    }
});