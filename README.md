# Erasys Monorepo

## Architecture (text diagram)

```
apps/web-next (Next SSR)
	└─ uses @repo/api (data) + @repo/ui (UI) + @repo/assets + @repo/tokens

apps/web-spa (Vite SPA)
	└─ uses @repo/api (data) + @repo/ui (UI) + @repo/assets + @repo/tokens

packages/api      → data fetching + types + testable helpers
packages/ui       → shared React components
packages/assets   → shared static assets
packages/tokens   → CSS variables + branding constants
packages/tailwind-config → shared Tailwind preset
```

## Folder structure

```
apps/
	web-next/
	web-spa/
packages/
	api/
	ui/
	assets/
	tokens/
	tailwind-config/
```

## Apps

- `apps/web-next` — Next.js SSR app
- `apps/web-spa` — React SPA

## Shared Packages

- `@repo/api` — data fetching + types
- `@repo/ui` — shared UI components
- `@repo/assets` — shared design assets
- `@repo/tokens` — shared CSS variables + branding constants
- `@repo/tailwind-config` — shared Tailwind preset

## Run locally

```sh
pnpm install
pnpm dev
```

## Environment variables

Each app owns its own env files.

Next.js (apps/web-next):

```
NEXT_PUBLIC_API_BASE_URL=https://www.hunqz.com
```

SPA (apps/web-spa):

```
VITE_API_BASE_URL=/api
```

Each app also has an `.env.example` template.

### Centralized env access

- `@repo/api` provides a small resolver helper (`resolveApiBaseUrl`) to keep env access consistent.
- Apps read their own env vars and pass values into shared helpers.

### Secrets

- Do not commit secrets.
- Use `.env.local` for local secrets and CI secrets for production.

## Useful scripts

```sh
pnpm lint
pnpm lint:ci
pnpm lint:fix
pnpm clean
pnpm fresh
pnpm graph
pnpm check-types
pnpm test
pnpm test:watch
pnpm test:e2e
pnpm test:e2e:ui
pnpm format
pnpm format:check
pnpm format:staged
pnpm check
pnpm ci
```

## Git hooks & commit conventions

- Husky hooks:
    - pre-commit: runs `pnpm format:staged`
    - commit-msg: enforces Conventional Commits via `commitlint`

### Commit message format

```
type(scope): subject

body (optional)
footer (optional)
```

Examples:

- `feat(ui): add profile card variants`
- `fix(api): handle empty profile response`

## E2E tests (Playwright)

- `pnpm test:e2e` runs smoke tests for both apps.
- `pnpm test:e2e:ui` opens the Playwright UI.

## Accessibility checks

- ESLint includes `eslint-plugin-jsx-a11y` rules for JSX accessibility.
- Basic contrast audit: verify text/background pairs in both apps (use browser devtools or a contrast checker).

## Optimization & caching

// No caching mechanism
// Add:
// - SWR or React Query integration
// - Service worker caching
// - HTTP cache headers configuration

## Monorepo hygiene

### Why Turborepo

- Task orchestration across apps and packages.
- Deterministic caching for build/lint/test.
- Clear dependency-aware pipelines.

### Shared configs

- TypeScript config: `@repo/typescript-config`
- ESLint config: `@repo/eslint-config`
- Tailwind preset: `@repo/tailwind-config`

### Dependency boundaries

- Apps can depend on shared packages (`@repo/api`, `@repo/ui`, `@repo/assets`, `@repo/tokens`).
- Shared packages do not depend on apps.
- Environment variables are app-owned; shared packages receive configuration via arguments.

## Decisions & tradeoffs

- **Env vars are app-scoped**: avoids leaking secrets and keeps shared packages pure.
- **Shared UI + data helpers**: maximizes reuse without coupling to Next/Vite APIs.
- **SSR in Next**: improves SEO and first paint, with revalidation for freshness.
- **SPA uses Vite proxy for CORS**: simple local dev setup; production would use a backend proxy if needed.

## What I’d improve with more time

- Add JSON-LD structured data and a proper sitemap/robots in Next.
- Add MSW integration tests for API flows.
- Add automated contrast checks in CI.
- Add image placeholders and progressive loading.
- Add Monitoring:
    - Error tracking (Sentry)
    - Performance monitoring (Web Vitals)
    - Analytics integration
    - Logging strategy
