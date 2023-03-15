import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react-swc';

const resolvePath = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

export default defineConfig({
  root: resolvePath('./src'),
  publicDir: resolvePath('./src/public'),
  build: {
    outDir: resolvePath('./dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolvePath('./src'),
      },
    ],
  },
  plugins: [react()],
});
