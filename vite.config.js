import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'; // for https certificate
import dns from 'dns'; // for localhost url

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mkcert(), react()],
  server: {
    https: true,
    host: true,
    port: 3000
  },
  build: {
    emptyOutDir: true
  }
});
