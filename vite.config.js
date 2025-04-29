import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     host: '0.0.0.0', // Vite will bind to all network interfaces
//     port: 8080, // Specify the port you want Vite to run on
//     proxy: {
//       '/api/submit_form': {
//         target: 'https://pair-recommender-service-6oqt6.ondigitalocean.app', 
//         changeOrigin: true,
//         secure: false,
//       },
    
//     },
//   },
//   preview: {
//     allowedHosts: ['pair-recommender-client-6rb88.ondigitalocean.app'],
//   },
// });

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  preview: {
    allowedHosts: ['pair-recommender-client-6rb88.ondigitalocean.app'],
  },
});
