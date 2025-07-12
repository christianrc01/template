import fs from "fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import getProxyRules from "./src/lib/config/proxyRules";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "./",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: getProxyRules(env.VITE_API_BASE_URL),
      https: {
        key: fs.readFileSync("./certificate/localhost-key.pem"),
        cert: fs.readFileSync("./certificate/localhost.pem"),
      },
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/lib/config/setupTests.ts",
    },
  };
});
