import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// No GitHub Actions, SITE_URL e BASE_PATH são definidos automaticamente (veja .github/workflows/deploy.yml).
// Localmente, os valores padrão abaixo são usados.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://thacampox.github.io',
  base: process.env.BASE_PATH ?? '/',
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    // "mermaid" fica sem realce; o diagrama é renderizado no navegador.
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
