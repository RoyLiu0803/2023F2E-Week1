import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default () => {
  return defineConfig({
    plugins: [
      Components({
        dirs: ["src/components", "src/layouts"],
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          "vue",
          "vue-router",
          // custom
          {
            gsap: [
              "gsap",
              // alias
              // ["[from]", "[alias]"],
            ],
          },
        ],
        dirs: ["src/components/**"],
      }),
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => tag === "lottie-player",
          },
        },
      }),
      eslintPlugin({
        include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
