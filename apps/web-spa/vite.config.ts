import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		fs: {
			allow: [path.resolve(__dirname, ".."), path.resolve(__dirname, "../../packages")],
		},
		proxy: {
			"/api": {
				target: "https://www.hunqz.com",
				changeOrigin: true,
				secure: true,
			},
		},
	},
});
