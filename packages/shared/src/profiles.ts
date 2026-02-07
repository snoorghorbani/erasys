export interface ProfileImage {
    id: string;
    url_token: string;
}

export interface ProfileResponse {
    pictures: ProfileImage[];
}

import { API_BASE_URL } from "@repo/tokens";

const API_ORIGIN = API_BASE_URL;
const API_PATH = "/api/opengrid/profiles/msescortplus";

type FetchInit = RequestInit & { next?: { revalidate?: number } };

export function fetchProfiles(options?: {
    baseUrl?: string;
    fetchInit?: FetchInit;
}): Promise<ProfileResponse> {
    const baseUrl = options?.baseUrl ?? API_ORIGIN;
    const url = `${baseUrl}${API_PATH}`;

    return fetch(url, options?.fetchInit).then((res) => {
        if (!res.ok) {
            throw new Error("Failed to fetch profiles");
        }
        return res.json() as Promise<ProfileResponse>;
    });
}

export function mapProfilesToImages(pictures: ProfileImage[]) {
    return pictures.map((p) => ({
        id: p.id,
        src: `https://www.hunqz.com/img/usr/original/0x0/${p.url_token}.jpg`,
        alt: "Profile image",
    }));
}
