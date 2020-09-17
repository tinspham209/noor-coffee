import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product/Product";
import { Products, Headline, HeadlineTitle } from "./ProductList.elements";
const ProductList = ({
	id,
	lightText,
	lightTextCard,
	buttonLabel,
	productList,
	headlineName,
}) => {
	const myRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (myRef && location.hash.includes(`${id}`)) {
			myRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	}, [myRef, location.hash, id]);

	return (
		<div id={id} ref={myRef}>
			<Headline>
				<HeadlineTitle lightText={lightText}>{headlineName}</HeadlineTitle>
			</Headline>
			<Products>
				{productList.map((product, index) => {
					return (
						<Product
							key={index}
							lightTextCard={lightTextCard}
							cardTitle={product.cardTitle}
							img={product.img}
							description={product.description}
							urlLinkBtn={product.urlLinkBtn}
							buttonLabel={buttonLabel}
							trend={product.trend}
							newProduct={product.newProduct}
						/>
					);
				})}
			</Products>
		</div>
	);
};

export default ProductList;
