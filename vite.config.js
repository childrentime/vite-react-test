import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginRoutes from "./vitePlugns/pluginRoutes";

export default defineConfig(async () => {
  return {
    plugins: [react(),pluginRoutes()],
    build: {
      minify: false,
    },
  };
});
