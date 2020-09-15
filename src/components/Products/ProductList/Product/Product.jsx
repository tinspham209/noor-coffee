import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import {
	Card,
	CardDescription,
	CardImage,
	Img,
	TrendLabel,
	CardTitle,
	Button,
} from "./Product.elements";
const Product = ({
	lightTextCard,
	cardTitle,
	img,
	description,
	urlLinkBtn,
	buttonLabel,
	trend,
}) => {
	return (
		<>
			<Card>
				<CardImage>
					<Img src={img} />
				</CardImage>
				{trend && (
					<TrendLabel>
						<AiOutlineLike /> Bán chạy nhất
					</TrendLabel>
				)}
				<CardTitle lightTextCard={lightTextCard}>{cardTitle}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<Link to={urlLinkBtn}>
					<Button>{buttonLabel}</Button>
				</Link>
			</Card>
		</>
	);
};

export default Product;
