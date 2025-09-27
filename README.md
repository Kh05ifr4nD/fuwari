# 🍥 Fuwari (Deno + Astro)

[![Deno >= 2](https://img.shields.io/badge/deno-%3E%3D2.0-black?logo=deno)](https://deno.com)
[![Astro](https://img.shields.io/badge/astro-5.x-orange?logo=astro)](https://astro.build)

A modern blog theme built with Astro and powered by Deno 2 tasks. This fork ships with a Deno-first toolchain, simplified i18n, and a few UX tweaks.

[Live Demo](https://fuwari.vercel.app)

## ✨ What’s Included

- Deno 2 based dev/build workflow (no Node/pnpm required)
- Smooth animations, light/dark mode, theme color and banner
- Responsive layout with Pagefind search and RSS
- Typst HTML integration with reusable components (admonitions, GitHub repo card, Expressive Code)
- “Timeline” page (formerly Archive) at `/timeline/`
- i18n reduced to English `en` and Simplified Chinese `zh_CN`

## 🚀 Getting Started

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

## 🧱 Content & Features

- Posts support a cover image (`image`) and typical metadata (`title`, `published`, `tags`, `category`, `draft`)
- Typst HTML pages include:
  - Admonitions and GitHub Card via rehype components
  - Expressive Code for enhanced code blocks
- Media (images, iframes, video): rounded corners and theme-colored borders around videos/iframes
- GitHub Card: theme-colored border, loads repo stats at runtime

## 🔧 Commands (Deno tasks)

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

## 🧪 CI

- Deno CI (`.github/workflows/deno-ci.yml`)
  - Deno 2, type-check + lint + build, uploads `dist` as artifact
- Biome CI (`.github/workflows/biome.yml`)
  - Runs Biome in CI
- Dependabot (`.github/dependabot.yml`)
  - npm and GitHub Actions updates

## 🌐 Routing Notes

- Timeline: `/timeline/` (replaces `/archive/`)
- Tag links: `/timeline/?tag=...`
- Category links: `/timeline/?category=...`

## 📄 License

MIT. See `LICENSE`. Copyright © 2024 saicaca, 2025 Kh05ifr4nD.
