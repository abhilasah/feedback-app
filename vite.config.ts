import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            includeAssets: [
                '/assets/favicon.ico',
                './assets/apple-touch-icon.png',
                './assets/safari-pinned-tab.svg',
            ],
            manifest: {
                name: 'Globant Feedback App',
                short_name: 'Feedback',
                description: 'Globant Feedback App description',
                theme_color: '#ffffff',
                background_color: '#ffffff',

                icons: [
                    {
                        src: 'assets/favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                        rel: 'icon',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'assets/favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                        rel: 'icon',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'assets/favicon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        rel: 'icon',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'assets/favicon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        rel: 'icon',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
});
