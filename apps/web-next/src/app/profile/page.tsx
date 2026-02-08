import ProfilesContainer from "../../../containers/ProfilesContainer";

export default function ProfilePage() {
    return (
        <section aria-labelledby="profile-heading" className="space-y-4 app-surface">
            <h1 id="profile-heading" className="app-heading">
                Profiles
            </h1>
            <ProfilesContainer />
        </section>
    );
}
