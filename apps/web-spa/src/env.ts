import { resolveApiBaseUrl } from "@repo/api";

export const env = {
	apiBaseUrl: resolveApiBaseUrl({
		vite: import.meta.env.VITE_API_BASE_URL,
		fallback: "",
	}),
};
