import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Imposta SINGLE_FILE=1 per ottenere un unico index.html autonomo (anteprima).
const single = process.env.SINGLE_FILE === "1";

export default defineConfig({
  plugins: [react(), ...(single ? [viteSingleFile()] : [])],
  base: "./",
});
