import { API_BASE_URL } from "@repo/tokens";
import { resolveApiBaseUrl } from "@repo/shared";

export const env = {
    apiBaseUrl: resolveApiBaseUrl({
        nextPublic: process.env.NEXT_PUBLIC_API_BASE_URL,
        fallback: API_BASE_URL,
    }),
};
