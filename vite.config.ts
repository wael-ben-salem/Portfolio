import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wael-portfolio/', // fixe, sans condition
  plugins: [react()],
});
