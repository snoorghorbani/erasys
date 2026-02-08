import { fetchProfiles, mapProfilesToImages } from "@repo/api";
import { ProfileGridWithNextImage } from "../components/ProfileGridWithNextImage";
import { env } from "../src/env";

export default async function ProfilesContainer() {
	const profile = await fetchProfiles({
		baseUrl: env.apiBaseUrl,
		fetchInit: { next: { revalidate: 300 } },
	});
	const images = mapProfilesToImages(profile.pictures);

	return <ProfileGridWithNextImage images={images} />;
}
