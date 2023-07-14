import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      lines: 30,
      functions: 30,
      branches: 30,
      statements: 30,
      exclude: ['**/Context/**'],
    },
  },
});
