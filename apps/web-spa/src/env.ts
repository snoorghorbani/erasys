import { API_BASE_URL } from "@repo/tokens";

export const env = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? API_BASE_URL,
};
