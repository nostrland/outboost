import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Security: minify and optimize for production
    minify: "esbuild",
    sourcemap: false, // Disable source maps in production for security
    rollupOptions: {
      output: {
        // Security: prevent exposing module names
        manualChunks: undefined,
      },
    },
    // Security: ensure no sensitive data in build
    target: "esnext",
    cssCodeSplit: true,
  },
  // Security: prevent exposing dev server info
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});