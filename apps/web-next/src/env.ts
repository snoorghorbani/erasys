import { API_BASE_URL } from "@repo/tokens";

export const env = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || API_BASE_URL,
};
