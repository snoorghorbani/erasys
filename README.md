# Erasys Monorepo

## Apps

- `apps/web-next` — Next.js SSR app
- `apps/web-spa` — React SPA

## Shared Packages

- `@repo/shared` — data fetching + types
- `@repo/ui` — shared UI components
- `@repo/assets` — shared design assets
- `@repo/tokens` — shared CSS variables
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
VITE_API_BASE_URL=https://www.hunqz.com
```

## Useful scripts

```sh
pnpm lint
pnpm lint:ci
pnpm check-types
pnpm test
pnpm format
pnpm format:check
```

## Accessibility checks

- ESLint includes `eslint-plugin-jsx-a11y` rules for JSX accessibility.
- Basic contrast audit: verify text/background pairs in both apps (use browser devtools or a contrast checker).
