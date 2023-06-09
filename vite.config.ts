import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const resolvePath = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

export default defineConfig({
  build: {
    outDir: resolvePath('./dist'),
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolvePath('./src'),
      },
    ],
  },
  plugins: [react(), svgr()],
});
