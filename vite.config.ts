import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [tailwindcss(), plugin()],
    server: {
        port: 60337,
    }
})
