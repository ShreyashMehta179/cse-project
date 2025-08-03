// vite.config.js
export default {
  base: '/cse-project/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 4173,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/api')) {
            // Handle API requests
            // You can proxy these requests to another server or handle them here
          } else {
            // Handle other requests
            // For example, serve index.html for all other routes
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
};
