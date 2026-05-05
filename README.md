# Physical AI Engineering Notes

Personal technical blog and portfolio built with **[VitePress](https://vitepress.dev/)** and deployed to **[GitHub Pages](https://pages.github.com/)**.

**Title:** Physical AI Engineering Notes  
**Focus:** Robotics control, ROS 2, humanoid systems, Physical AI data practices, and long-term engineering notes.  
**Author:** Harrison Woo

## Local development

```bash
npm install
npm run docs:dev
```

Open the URL VitePress prints (this project defaults to **`http://localhost:5174`** so it does not clash with other apps on 5173). To use another port once: `npm run docs:dev -- --port 3000`.

## Build

```bash
npm run docs:build
```

Static output is written to `docs/.vitepress/dist`.

### Build error: `spawn git ENOENT`

VitePress can call **`git`** to populate “last updated” timestamps. If Git is not installed or not on your `PATH` (common in some IDE terminals or minimal CI images), the build fails with **`[vitepress] spawn git ENOENT`**.

**Fix:** Install Git and ensure `git --version` works in the same terminal, **or** rely on the project config: `lastUpdated` is enabled only when `git --version` succeeds, so the site builds without Git (timestamps are omitted).

## Preview production build

```bash
npm run docs:preview
```

## Deployment (GitHub Pages)

This repo is set up as a **project site**: **`harrison2699/lifeops_blog`** → published at **`https://harrison2699.github.io/lifeops_blog/`**. VitePress **`base`** is **`'/lifeops_blog/'`** in `docs/.vitepress/config.mts` (required for project Pages).

1. Push to GitHub on the **`main`** branch (the workflow only listens to `main`).  
2. Enable Pages: **Settings → Pages → Build and deployment → Source: GitHub Actions** (not “Deploy from a branch”). If this is wrong, the deploy job often fails with **404** / “Failed to create deployment”.  
3. **`.github/workflows/deploy.yml`** includes **Setup Pages** (`configure-pages`) before upload; without it, deploy can 404 even when the build succeeds.  
4. First deploy: you may need to **approve** the `github-pages` environment once (**Settings → Environments**).

If you later use a **user** site repo **`harrison2699.github.io`**, change **`base`** to **`'/'`** and update paths in `config.mts` accordingly.

## Writing workflow

1. **Draft privately** — raw bullets, stack traces, and half-formed opinions stay in a private notebook or local-only branch.  
2. **Publish cleaned public notes** — redact identifiers, internal URLs, and unreleased roadmap details.  
3. **Avoid** internal source code dumps, secrets, API keys, customer names, unreleased product specifics, and patent-sensitive or export-controlled material. When unsure, do not publish.  
4. **Weekly Tech Logs** — short, dated entries under `docs/tech-log/<year>/`.  
5. **Monthly articles** — promote one or two strong threads from logs into `docs/articles/...` with diagrams and clearer structure.

## Recommended weekly routine

| Day | Habit |
| --- | --- |
| **Friday (30–45 min)** | Close the week: Tech Log entry (`Summary` through `Next Actions`). |
| **Weekend (optional)** | Fix one broken link or stale paragraph on an older page. |
| **Month end (1–2 hours)** | Pick a log thread → outline → draft article in the right category. |

## Project layout

```text
docs/
  index.md              # Home
  about.md
  tech-log/             # Weekly logs
  articles/             # Long-form, by category
  projects/             # Portfolio pages
  career/               # Career reflections
  reading/              # Papers & references
  .vitepress/config.mts # Site config (nav, sidebar, theme)
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run docs:dev` | Local dev server with hot reload |
| `npm run docs:build` | Production build to `docs/.vitepress/dist` |
| `npm run docs:preview` | Serve the production build locally |

## License

Content and code in this repository are provided as-is for personal portfolio use unless you add a separate license.
