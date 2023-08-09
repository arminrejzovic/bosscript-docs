import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import darkula from "./src/assets/darkula.json"

export default defineConfig({
  output: "server",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: darkula,
      langs: [
        {
          id: 'bosscript',
          scopeName: 'source.boss',
          path: "../../src/assets/bosslang.tmLanguage.json"
        }
      ]
    }
  }
});