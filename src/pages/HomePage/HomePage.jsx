import React from "react";
import { InfoSectionFull } from "../../components";
import { hero } from "./Data";

const HomePage = () => {
	return (
		<>
			<InfoSectionFull {...hero} />
		</>
	);
};

export default HomePage;
