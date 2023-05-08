/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dns from 'dns';

import { resolve, parse } from 'path';
import * as fs from 'fs';

const rootPaths = fs.readdirSync('src').reduce((out, item) => {
  const parsed = parse(item);
  return { ...out, [parsed.name]: resolve('src', item) };
}, {});

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: 'build',
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