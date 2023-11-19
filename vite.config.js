import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copyFilesPlugin from "./src/utils/plugins/copy-files";
import path, { resolve } from "path";

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");
const pagesDir = resolve(srcDir, "pages");
const publicDir = resolve(rootDir, "public");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": rootDir,
      "@src": srcDir,
      "@pages": pagesDir,
    },
  },
  plugins: [
    react(),
    copyFilesPlugin({
      filesPath: [{ src: "./src/manifest.json", dest: "./dist/manifest.json" }],
    }),
  ],
  publicDir,
  build: {
    rollupOptions: {
      input: {
        content: resolve(pagesDir, "content", "index.js"),
        background: resolve(pagesDir, "background", "index.js"),
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: "assets/js/[name].js",
      },
    },
  },
});
