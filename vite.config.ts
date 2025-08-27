import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

const PORT = 5186;
const ENTRY = 'src/singleSpa.tsx';

export default defineConfig(({ command }) => ({
  server: {
    port: PORT,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  base: '/',                      // wichtig im Dev
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: PORT,
      spaEntryPoints: ENTRY,
    }),
  ],
  build: {
    target: 'chrome89',
    modulePreload: false,
    rollupOptions: {
      // React wird extern geliefert (Import-Map in root)
      external: ['react', 'react-dom', 'react-dom/client'],
      output: { format: 'esm' },
    },
  },
}))
