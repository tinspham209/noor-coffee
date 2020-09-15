import React from "react";
import { ProductsComponent } from "../../components";
import {
	menuList,
	special,
	coffee,
	coldbrew,
	tea,
	fruit,
	macchiato,
	mojito,
	yogurt,
} from "./Data";
const Products = () => {
	const products = [
		{ ...special },
		{ ...coffee },
		{ ...coldbrew },
		{ ...macchiato },
		{ ...tea },
		{ ...fruit },
		{ ...mojito },
		{ ...yogurt },
	];

	return (
		<>
			<ProductsComponent menuList={menuList} products={products} />
		</>
	);
};

export default Products;
