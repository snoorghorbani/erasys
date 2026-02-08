import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilesContainer } from "../containers/ProfilesContainer";
import { Layout } from "./components/Layout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/profile" element={<ProfilesContainer />} />
				<Route path="/" element={<Navigate to="/profile" replace />} />
			</Routes>
		</Layout>
	);
}

export default App;
