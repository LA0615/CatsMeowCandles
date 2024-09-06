import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false // Set to false to accept self-signed certificates
      }
    }
  }
});
