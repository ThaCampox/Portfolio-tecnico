import type { APIRoute } from 'astro';
import { getDocs } from '../../lib/docs';
import { l } from '../../lib/url';
import { languages, type Lang } from '../../i18n/ui';

export const getStaticPaths = () => (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const docs = await getDocs(lang);
  const items = docs.map(({ entry, slug }) => ({
    title: entry.data.title,
    summary: entry.data.summary,
    docId: entry.data.docId,
    area: entry.data.area,
    tags: entry.data.tags,
    url: l(lang, `docs/${slug}/`),
    // texto do corpo (sem imports/JSX) para permitir busca por comandos
    text: (entry.body ?? '').replace(/^import .*$/gm, '').replace(/<[^>]+>/g, ' ').slice(0, 8000),
  }));
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
