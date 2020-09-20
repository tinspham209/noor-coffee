import React, { useEffect } from "react";
import { StoreMaps } from "../../components";
import { Maps } from "./Data";
const Stores = () => {
	useEffect(() => {
		document.title = "Our stores - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<StoreMaps {...Maps} />
		</>
	);
};

export default Stores;
