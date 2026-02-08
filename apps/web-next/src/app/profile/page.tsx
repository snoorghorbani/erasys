import ProfilesContainer from "../../../containers/ProfilesContainer";

export default function ProfilePage() {
	return (
		<section aria-labelledby="profile-heading" className="space-y-4">
			<h1 id="profile-heading" className="text-2xl font-semibold">
				Profiles
			</h1>
			<ProfilesContainer />
		</section>
	);
}
