import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type DocItem = { entry: CollectionEntry<'docs'>; slug: string };

/** Documentos de um idioma. O idioma vem da pasta: src/content/docs/<lang>/... */
export async function getDocs(lang: Lang): Promise<DocItem[]> {
  const all = await getCollection('docs');
  return all
    .filter((d) => d.id.startsWith(`${lang}/`))
    .map((entry) => ({ entry, slug: entry.id.slice(lang.length + 1) }))
    .sort((a, b) => a.entry.data.docId.localeCompare(b.entry.data.docId));
}

export const fmtDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' });
