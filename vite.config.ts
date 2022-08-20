import { defineConfig } from "vite";

import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      template: "index.html",
      inject: {
        data: {
          BASE_URL: process.env.BASE_URL || "/",
        },
      },
    }),
  ],
});
