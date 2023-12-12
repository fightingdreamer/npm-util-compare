import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/util/compare.ts"),
      name: "@fightingdreamer/util-compare",
      formats: ["es", "cjs"],
      fileName: "util-compare",
    },
  },
});
