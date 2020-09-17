import React from "react";
import { InfoSectionFull, StoreMaps } from "../../components";
import { hero } from "./Data";
import { Maps } from "../Stores/Data";

const HomePage = () => {
	return (
		<>
			<InfoSectionFull {...hero} />
			<StoreMaps {...Maps} />
		</>
	);
};

export default HomePage;
