import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // Backend server URL
                changeOrigin: true, // Allows the origin to be changed
                rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Rewrite the API prefix if needed
            },
        },
    },
});
