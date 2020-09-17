import React from "react";
import { ProductsComponent } from "../../components";
import { products } from "./Data";
const Products = () => {
	return (
		<>
			<ProductsComponent products={products} />
		</>
	);
};

export default Products;
