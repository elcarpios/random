import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), eslintPlugin()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      assets: resolve(__dirname, 'public/assets/'),
      components: resolve(__dirname, 'src/components/'),
      styles: resolve(__dirname, 'src/styles/'),
      pages: resolve(__dirname, 'src/pages/'),
      constants: resolve(__dirname, 'src/constants/'),
      layouts: resolve(__dirname, 'src/layouts/'),
      services: resolve(__dirname, 'src/services/')
    }
  }
});
