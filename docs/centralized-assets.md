# Centralized Assets in Monorepo (React + Next.js)

## Goal
- Centralize static assets (images, fonts, SVGs) in one package.
- Reuse across multiple React and Next.js apps.
- Ensure assets work in **both dev and production**.
- Support **TypeScript** type safety.

## Recommended Structure

```
/packages
  /assets
    /src
      logo.png
      background.svg
    build.mjs
    package.json
/apps
  /next-app
  /react-app
```

- `packages/assets` is a shared package containing all assets.
- `build.mjs` generates `dist/` with JS exports for each asset.
- Each app imports assets via the package instead of relative paths.

## Build Script Pattern

- Generate `dist/index.js`:

```js
export const logoUrl = new URL("./logo.png", import.meta.url).toString();
export const bgUrl = new URL("./background.svg", import.meta.url).toString();
```

- Generate `dist/index.d.ts` for TypeScript:

```ts
export declare const logoUrl: string;
export declare const bgUrl: string;
```

- Optional: auto-generate exports by scanning src/.

## package.json

```json
{
  "name": "@monorepo/assets",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"]
}
```

## Usage in Apps

```sh
pnpm add @monorepo/assets --workspace
```

```tsx
import { logoUrl } from "@monorepo/assets";

<img src={logoUrl} alt="logo" />
```

## Notes / Best Practices
- Works in React, Next.js, and Vite.
- Avoid fs or external directory imports for client-side assets.
- For very large assets (videos, fonts), consider serving via public folder or CDN.
- Automate export generation in build.mjs to avoid manual updates.
- Use Changesets or versioning if assets change frequently.
