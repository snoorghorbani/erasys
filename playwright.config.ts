import { defineConfig } from "@playwright/test";

const webNextUrl = process.env.WEB_NEXT_URL || "http://localhost:3002";
const webSpaUrl = process.env.WEB_SPA_URL || "http://localhost:3003";

export default defineConfig({
	testDir: "./tests",
	timeout: 30_000,
	expect: {
		timeout: 5_000,
	},
	webServer: [
		{
			command: "pnpm --filter web-next dev",
			url: webNextUrl,
			reuseExistingServer: true,
			timeout: 120_000,
		},
		{
			command: "pnpm --filter web-spa dev",
			url: webSpaUrl,
			reuseExistingServer: true,
			timeout: 120_000,
		},
	],
	projects: [
		{
			name: "web-next",
			use: {
				baseURL: webNextUrl,
			},
		},
		{
			name: "web-spa",
			use: {
				baseURL: webSpaUrl,
			},
		},
	],
});
