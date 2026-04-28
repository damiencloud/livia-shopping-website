import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  root: path.resolve(__dirname),
  appType: "mpa",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        shop: path.resolve(__dirname, "shop.html"),
        collections: path.resolve(__dirname, "collections.html"),
        about: path.resolve(__dirname, "about.html"),
        contact: path.resolve(__dirname, "contact.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});