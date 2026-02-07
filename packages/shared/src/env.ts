export interface ApiEnvInput {
    nextPublic?: string;
    vite?: string;
    fallback: string;
}

export function resolveApiBaseUrl(input: ApiEnvInput): string {
    return input.nextPublic || input.vite || input.fallback;
}
