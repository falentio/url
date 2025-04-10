// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [".wrangler/**"]
      }
    }
  },

  output: 'server',
  integrations: [preact()],
  adapter: cloudflare({ platformProxy: { enabled: true, persist: true, configPath: "wrangler.json" } })
});