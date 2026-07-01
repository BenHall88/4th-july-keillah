import { defineConfig } from 'vite';
import { resolve, join } from 'node:path';
import { cpSync, existsSync, mkdirSync, readFileSync } from 'node:fs';

const MIME = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
};

export default defineConfig({
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    {
      name: 'memories-static',
      configureServer(server) {
        server.middlewares.use('/memories', (req, res, next) => {
          const name = decodeURIComponent((req.url || '/').replace(/^\//, ''));
          if (!name || name.includes('..')) return next();
          const file = join(resolve('memories'), name);
          try {
            const data = readFileSync(file);
            const ext = name.split('.').pop()?.toLowerCase();
            res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
            res.end(data);
          } catch {
            next();
          }
        });
      },
      writeBundle() {
        const src = resolve('memories');
        const dest = resolve('dist/memories');
        if (existsSync(src)) {
          mkdirSync(dest, { recursive: true });
          cpSync(src, dest, { recursive: true });
        }
      },
    },
  ],
});
