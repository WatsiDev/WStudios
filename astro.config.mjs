// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  //https://fontsource.org
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Comfortaa',
    cssVariable: '--font-comfortaa'
  },
  {
    provider: fontProviders.fontsource(),
    name: 'Geist Sans',
    cssVariable: '--font-geist-sans'
  }],
  vite: {
    plugins: [tailwindcss()],
  },
  //URL of the page, required for sitemap
  site: 'https://example.com',
  integrations: [icon(), sitemap()]
});