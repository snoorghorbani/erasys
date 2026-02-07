import { describe, expect, it, vi, beforeEach } from "vitest";
import { fetchProfiles, mapProfilesToImages } from "./profiles";

const mockPictures = [
    { id: "1", url_token: "abc" },
    { id: "2", url_token: "def" },
];

describe("mapProfilesToImages", () => {
    it("maps profile pictures to image objects", () => {
        const images = mapProfilesToImages(mockPictures);
        expect(images).toEqual([
            {
                id: "1",
                src: "https://www.hunqz.com/img/usr/original/0x0/abc.jpg",
                alt: "Profile image",
            },
            {
                id: "2",
                src: "https://www.hunqz.com/img/usr/original/0x0/def.jpg",
                alt: "Profile image",
            },
        ]);
    });
});

describe("fetchProfiles", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("returns parsed json on success", async () => {
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ pictures: mockPictures }),
        });

        // @ts-expect-error test override
        global.fetch = fetchMock;

        const result = await fetchProfiles({ baseUrl: "https://example.com" });
        expect(result.pictures).toEqual(mockPictures);
        expect(fetchMock).toHaveBeenCalledWith(
            "https://example.com/api/opengrid/profiles/msescortplus",
        );
    });

    it("throws on non-ok response", async () => {
        const fetchMock = vi.fn().mockResolvedValue({ ok: false });

        // @ts-expect-error test override
        global.fetch = fetchMock;

        await expect(fetchProfiles({ baseUrl: "https://example.com" })).rejects.toThrow(
            "Failed to fetch profiles",
        );
    });
});
