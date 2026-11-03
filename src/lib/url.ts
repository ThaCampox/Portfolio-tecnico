// Gera URLs respeitando o "base" do GitHub Pages (ex.: /Portfolio-tecnico).
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Caminho dentro de um idioma: l('pt', 'docs/') -> /base/pt/docs/ */
export const l = (lang: string, path = '') => `${base}/${lang}/${path}`;

/** Caminho para arquivos em /public: asset('images/x.svg') */
export const asset = (path: string) => `${base}/${path.replace(/^\//, '')}`;
