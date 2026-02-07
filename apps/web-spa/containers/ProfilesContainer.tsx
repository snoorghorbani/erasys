import { useEffect, useState } from "react";
import { fetchProfiles, mapProfilesToImages } from "@repo/shared";
import { env } from "../src/env";
import { ProfileGrid } from "@repo/ui";

type ImageItem = {
    id: string;
    src: string;
};

export function ProfilesContainer() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadProfiles() {
            try {
                const profiles = await fetchProfiles({ baseUrl: env.apiBaseUrl });
                const mapped = mapProfilesToImages(profiles.pictures);

                if (!cancelled) {
                    setImages(mapped);
                }
            } catch (err) {
                if (!cancelled) {
                    setError("Failed to load profiles: " + (err instanceof Error ? err.message : String(err)));
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadProfiles();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return <p role="status">Loading profiles…</p>;
    }

    if (error) {
        return <p role="alert">{error}</p>;
    }

    return (
        <section aria-labelledby="profile-heading" className="space-y-4">
            <h1 id="profile-heading" className="text-2xl font-semibold">
                Profiles
            </h1>
            <ProfileGrid images={images} />
        </section>
    );
}