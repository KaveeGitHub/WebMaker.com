import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WebMaker.com/', // <-- Add this line
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
