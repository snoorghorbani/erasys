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
NEXT_PUBLIC_LD_CLIENT_SIDE_ID=
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

## Feature flags (LaunchDarkly)

- LaunchDarkly is used only in the Next app (`apps/web-next`).
- The client-side ID is provided via `NEXT_PUBLIC_LD_CLIENT_SIDE_ID`.
- Flag keys are defined in code (see [apps/web-next/src/lib/flags.ts](apps/web-next/src/lib/flags.ts)) rather than env vars.
- Current flag: `showHomeButton` toggles the Home button in the header.

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
- Use Changesets to version and release shared packages.
- Design System:
    - Missing design tokens: No comprehensive color palette, spacing scale, typography definitions
    - Add component variants: Button, Input, Card components with variants
    - Create Storybook: For component documentation and testing
    - Add dark mode toggle: Currently only CSS variables exist
- Add Monitoring:
    - Error tracking (Sentry)
    - Performance monitoring (Web Vitals)
    - Analytics integration
    - Logging strategy
