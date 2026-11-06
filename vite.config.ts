import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import { localizedPages } from "./scripts/build-localized-pages.mjs";

const outputDir = path.resolve(import.meta.dirname, "dist/public");

export default defineConfig({
  plugins: [react(), tailwindcss(), localizedPages(outputDir)],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: outputDir,
    emptyOutDir: true,
  },
});
