import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // El sitio vive en la raíz de lahl-arquitectura.pages.dev (Cloudflare Pages).
  base: "/",
});
