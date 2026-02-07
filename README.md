# Erasys Monorepo

## Apps

- `apps/web-next` — Next.js SSR app
- `apps/web-spa` — React SPA

## Shared Packages

- `@repo/shared` — data fetching + types
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

- `@repo/shared` provides a small resolver helper (`resolveApiBaseUrl`) to keep env access consistent.
- Apps read their own env vars and pass values into shared helpers.

### Secrets

- Do not commit secrets.
- Use `.env.local` for local secrets and CI secrets for production.

## Useful scripts

```sh
pnpm lint
pnpm lint:ci
pnpm lint:fix
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

## E2E tests (Playwright)

- `pnpm test:e2e` runs smoke tests for both apps.
- `pnpm test:e2e:ui` opens the Playwright UI.

## Accessibility checks

- ESLint includes `eslint-plugin-jsx-a11y` rules for JSX accessibility.
- Basic contrast audit: verify text/background pairs in both apps (use browser devtools or a contrast checker).

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

- Apps can depend on shared packages (`@repo/shared`, `@repo/ui`, `@repo/assets`, `@repo/tokens`).
- Shared packages do not depend on apps.
- Environment variables are app-owned; shared packages receive configuration via arguments.
