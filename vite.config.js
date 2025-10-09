import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";

// __dirname in ESM
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return ({
  base: env.VITE_BASE || "/",
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: false,
    open: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4174,
    strictPort: false,
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  });
});
