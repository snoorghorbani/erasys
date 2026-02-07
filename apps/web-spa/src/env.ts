import { API_BASE_URL } from "@repo/tokens";
import { resolveApiBaseUrl } from "@repo/shared";

export const env = {
    apiBaseUrl: resolveApiBaseUrl({
        vite: import.meta.env.VITE_API_BASE_URL,
        fallback: "",
    }),
};
