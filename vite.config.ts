import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
  server: { port: 5176, origin: 'http://localhost:5176' },
  base: '/',
  plugins: [
    federation({
      name: 'newsService',
      filename: 'remoteEntry.js',
      library: { type: 'module' },
      exposes: { './App': './src/App.tsx' },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom/client': { singleton: true, requiredVersion: '^19.0.0' },
      },
    }),
  ],
  resolve: { dedupe: ['react', 'react-dom'], conditions: ['browser', 'development'] },
  build: { target: 'chrome89', modulePreload: false, commonjsOptions: { transformMixedEsModules: true } },
})
