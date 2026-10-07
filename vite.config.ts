import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
    plugins: [
        compression({ algorithms: ["gzip", "brotliCompress"] }),
        visualizer({
            filename: "stats.html",
            gzipSize: true,
            brotliSize: true,
            open: false,
        }),
    ],
});