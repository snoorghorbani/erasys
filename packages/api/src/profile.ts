export interface ProfileImage {
	id: string;
	owner_id: string;
	url_token: string;
	width: number;
	height: number;
	rating: string;
	comment?: string;
	is_public: boolean;
}

export interface Location {
	name: string;
	country: string;
	sensor: boolean;
	is_base_profile: boolean;
}

export interface TargetAge {
	min: number;
	max: number;
}

export interface GenderOrientation {
	gender: string;
	orientation: string;
	looking_for_gender: string[];
	looking_for_orientation: string[];
}

export interface Personal {
	profile_text: string;
	height: number;
	weight: number;
	target_age: TargetAge;
	spoken_languages: string[];
	beard: string;
	body_hair: string;
	body_type: string;
	ethnicity: string;
	eye_color: string;
	hair_length: string;
	hair_color: string;
	orientation: string;
	smoker: string;
	piercing: string;
	tattoo: string;
	gender_orientation: GenderOrientation;
	age: number;
}

export interface Service {
	rate_hour: number;
	rate_night: number;
	currency: string;
	service_locations: string[];
	service_offerings: string[];
}

export interface Sexual {
	enabled: boolean;
	favored_position: string;
	anal_position: string;
	dick_size: string;
	concision: string;
	dirty_sex: string;
	sm: string;
	fisting: string;
	fetish: string[];
	safer_sex: string;
	kissing: string;
	oral: string;
}

export interface ReviewReply {
	id: number;
	review_id: number;
	text: string;
	updated_at: string;
}

export interface Review {
	id: string;
	comment: string;
	updated_at: string;
	is_reviewer_genuine: boolean;
	vote?: number;
	reply?: ReviewReply;
	is_reported: boolean;
	reviewer_id?: string;
	reviewer_name?: string;
}

export interface SocialLink {
	type: string;
	value: string;
}

export interface Profile {
	id: string;
	name: string;
	type: string;
	is_plus: boolean;
	online_status: string;
	preview_pic: ProfileImage;
	headline: string;
	last_login: string;
	location: Location;
	personal: Personal;
	service: Service;
	sexual: Sexual;
	telephone: string;
	pictures: ProfileImage[];
	reviews: Review[];
	travel_locations: unknown[];
	social_links: SocialLink[];
	is_public: boolean;
	is_new: boolean;
	creation_date: string;
}

export function getProfileImageUrl(token: string): string {
	return `https://www.hunqz.com/img/usr/original/0x0/${token}.jpg`;
}

export async function fetchProfile(handle: string): Promise<Profile> {
	const response = await fetch(
		`https://www.hunqz.com/api/opengrid/profiles/${encodeURIComponent(handle)}`,
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch profile: ${response.status}`);
	}

	return (await response.json()) as Profile;
}
