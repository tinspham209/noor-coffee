import React from "react";
import {
	InfoSectionFull,
	StoreMaps,
	ProductsComponent,
} from "../../components";
import { hero, special } from "./Data";
import { Maps } from "../Stores/Data";

const HomePage = () => {
	return (
		<>
			<InfoSectionFull {...hero} />
			<StoreMaps {...Maps} />
			<ProductsComponent products={special} />
		</>
	);
};

export default HomePage;
