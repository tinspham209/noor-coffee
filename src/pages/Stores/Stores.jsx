import React from "react";
import { StoreMaps } from "../../components";
import { Maps } from "./Data";
const Stores = () => {
	return (
		<>
			<StoreMaps {...Maps} />
		</>
	);
};

export default Stores;
