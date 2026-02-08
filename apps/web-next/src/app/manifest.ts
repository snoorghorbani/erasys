import type { MetadataRoute } from "next";
import {
	APP_DESCRIPTION,
	APP_NAME,
	BACKGROUND_COLOR,
	MANIFEST_ICONS,
	START_URL,
	THEME_COLOR,
} from "@repo/tokens";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: APP_NAME,
		short_name: APP_NAME,
		description: APP_DESCRIPTION,
		dir: "auto",
		lang: "en-US",
		display: "standalone",
		orientation: "portrait",
		start_url: START_URL,
		background_color: BACKGROUND_COLOR,
		theme_color: THEME_COLOR,
		icons: MANIFEST_ICONS.map((icon) => ({
			...icon,
			src: `/${icon.src}`,
		})),
	};
}
