import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  root: ".", //Define the root
});
