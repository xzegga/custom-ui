/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dns from 'dns';
import federation from '@originjs/vite-plugin-federation';

import { resolve, parse } from 'path';
import * as fs from 'fs';

const rootPaths = fs.readdirSync('src').reduce((out, item) => {
  const parsed = parse(item);
  return { ...out, [parsed.name]: resolve('src', item) };
}, {});

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    federation({
      name: 'cnx-ui',
      filename: 'remoteEntry.js',
      exposes: {
        './ui': './src/core-ui/index',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    outDir: 'build',
    target: 'esnext',
    manifest: true,
    cssCodeSplit: false,
  },
  server: {
    open: true,
    port: 3201,
  },
  resolve: {
    alias: rootPaths,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
