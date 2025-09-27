# 🍥 Fuwari-typ (Astro & Deno -> Typst)

[![Deno >= 2](https://img.shields.io/badge/deno-%3E%3D2.0-black?logo=deno)](https://deno.com)
[![Astro](https://img.shields.io/badge/astro-5.x-orange?logo=astro)](https://astro.build)
[![Typst](https://img.shields.io/website?down_message=offline&label=typst.app&up_color=239dad&up_message=online&url=https%3A%2F%2Ftypst.app)](https://typst.app/)

A modern Typst blog instance built with Astro and powered by Deno 2. This fork ships with a Deno‑first toolchain, Typst‑first content pipeline.

## What’s Included

- Deno 2 based dev/build workflow (no Node/pnpm required)
- Smooth animations, light/dark mode, theme color and banner
- Responsive layout with Pagefind search and RSS
- Typst‑first content with reusable components (admonitions, GitHub repo card, Expressive Code)
- I18n including English `en` and Simplified Chinese `zh_CN`

## Getting Started

1) Clone or generate a new repository from this template.

2) Install Deno 2
- Check: `deno --version` → should be 2.x

3) Configure your site
- Edit `src/config.ts` (site title, banner, theme color, navbar, etc.)
- i18n: set `siteConfig.lang` to `"en"` or `"zh_CN"`

4) Run locally
- `deno task dev` → http://localhost:4321

5) Create posts
- `deno task new-post <name>` → files under `src/content/posts/`

6) Build & Preview
- `deno task build`
- `deno task preview`

## Content & Features (Typst‑first)

- Posts support a cover image (`image`) and typical metadata (`title`, `published`, `tags`, `category`, `draft`)
- Typst targets
  - `.html.typ`: renders to HTML and participates in the rehype pipeline/components
  - `.svg.typ`: renders to SVG for complex layouts/math
- Built‑in Typst helpers (see `src/content/typ/fuwari-html.typ`)
  - `#fw_note[...]`, `#fw_tip[...]`, `#fw_warning[...]`, `#fw_caution[...]`, `#fw_important[...]`
  - `#github("owner/repo")` → GitHub repo card
  - `#fw_ec(lang, code)` / Expressive Code integration
  - `#fw_tfile(path, embed, alt)` / `#fw_spoiler[...]`
  - Images are zoomable; videos/iframes have theme‑colored borders
- Media (images, iframes, video): rounded corners and theme-colored borders around videos/iframes
- GitHub Card: theme‑colored border, loads repo stats at runtime

### Typst frontmatter example

Typst HTML posts declare metadata via a `#metadata(( ... ))` block:

```typst
#let desc = [Short description here]
#metadata((
  title: "My Post",
  published: "2025-09-21",
  description: desc,
  tags: ("Typst", "Fuwari"),
  category: "Demo",
  image: "./cover.jpg",
))<frontmatter>
```

### Markdown removed

This fork removes Markdown pages and remark plugins to keep the pipeline focused on Typst. If you need Markdown support, consider the upstream template or re‑enable remark/MD collections on your own.

## Commands (Deno tasks)

| Command                      | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `deno task dev`            | Start dev server                                 |
| `deno task build`          | Build site to `dist/` and index with Pagefind    |
| `deno task preview`        | Preview local production build                   |
| `deno task check`          | Run Astro’s type checks                          |
| `deno task type-check`     | Run tsc type checks (CI-aligned)                 |
| `deno task lint`           | Biome lint (and deno lint)                       |
| `deno task format`         | Format with Biome                                |
| `deno task new-post <name>`| Scaffold a new post                               |

## CI

- Deno CI (`.github/workflows/deno-ci.yml`)
  - Deno 2, type-check + lint + build, uploads `dist` as artifact
- Biome CI (`.github/workflows/biome.yml`)
  - Runs Biome in CI
- Dependabot (`.github/dependabot.yml`)
  - npm and GitHub Actions updates

## Routing Notes

- Timeline: `/timeline/` (replaces `/archive/`)
- Tag links: `/timeline/?tag=...`
- Category links: `/timeline/?category=...`

## License

MIT. See `LICENSE`. Copyright © 2024 saicaca, 2025 Kh05ifr4nD.
