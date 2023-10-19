import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: 'advertising', // name of the fed group
      filename: 'advertisingEntry.js', // default file name
      // Remotes to consume
      remotes: {
        core: 'http://localhost:8010/assets/coreEntry.js',
        auth: 'http://localhost:8020/assets/authEntry.js',
      },
      // Modules to expose
      exposes: {
        './Home': './src/pages/Home/Home.jsx',
      },
      shared: ['react', 'react-dom'], // libs/deps to be shared
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
  build: {
    target: 'esnext',
  },
})
