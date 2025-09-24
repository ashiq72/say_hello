import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "VuePhoneInput",
      fileName: (format) => `vue-phone-input.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "libphonenumber-js"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
