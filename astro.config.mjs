import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// 本番の独自ドメイン取得後にここを差し替えてください（例: https://meiji-zouen.com）
const SITE = 'https://meiji-zouen.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
