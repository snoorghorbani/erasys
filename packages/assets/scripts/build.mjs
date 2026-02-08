import { mkdir, copyFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, "..");
const distDir = resolve(pkgRoot, "dist");

await mkdir(distDir, { recursive: true });

await copyFile(resolve(pkgRoot, "src", "logo.png"), resolve(distDir, "logo.png"));

const indexJs = `export const logoUrl = new URL("./logo.png", import.meta.url).toString();\n`;
const indexDts = `export declare const logoUrl: string;\n`;

await writeFile(resolve(distDir, "index.js"), indexJs, "utf8");
await writeFile(resolve(distDir, "index.d.ts"), indexDts, "utf8");
