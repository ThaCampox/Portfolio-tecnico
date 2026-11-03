# Thaina Campos — Technical Portfolio

Portfólio técnico bilíngue (PT/EN): apresentação, biblioteca de documentação operacional e laboratórios.
Stack: Astro 5 · TypeScript · Tailwind CSS 4 · MDX · Mermaid · GitHub Pages.

## Executar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # checagem de tipos + build estático em ./dist
npm run preview
```

Requer Node.js 20.3 ou superior (recomendado 22).

## Publicar no GitHub Pages

1. Crie o repositório no GitHub e envie o código para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**.
3. A cada push em `main`, o workflow `.github/workflows/deploy.yml` publica o site.
4. Se o repositório se chamar `thacampox.github.io`, mude `BASE_PATH` para `/` no workflow.

## Adicionar uma documentação

1. Copie `src/content/docs/pt/doc-sup-001-usb-hid.mdx` e `src/content/docs/en/...` com um novo nome.
2. Ajuste o frontmatter (`docId`, `area`, `origin`, `status`...). O esquema está em `src/content.config.ts`.
3. Use `<Evidence />` para prints com legenda e `<Callout />` para avisos.
4. Troque `status: example` por `published` somente quando o conteúdo for real e revisado.

## Regras de publicação

- Nunca publique IPs internos, nomes de clientes, domínios privados, credenciais ou dados de usuários.
- Anonimize logs, nomes de máquinas e identificadores. Não publique prints de sistemas corporativos sem autorização.
- Declare a origem de cada documento: `professional`, `lab` ou `study`.

## Estrutura

```
src/components   Header, Footer, DocRow, Evidence, Callout, SearchDialog
src/layouts      Base, DocsLayout
src/pages/[lang] Páginas em /pt e /en
src/content/docs Documentação em MDX (uma pasta por idioma)
src/data         Áreas, backlog de projetos e perfil
src/i18n         Textos da interface
scripts          Scripts PowerShell e Python do portfólio
diagrams         Diagramas de rede e infraestrutura
```
