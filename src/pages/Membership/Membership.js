import React, { useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";
const Membership = () => {
	useEffect(() => {
		document.title = "Membership - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default Membership;
