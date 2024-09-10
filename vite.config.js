/** @type {import('vite').UserConfig} */
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});