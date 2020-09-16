import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { Container } from "../../GlobalStyles";
import {
	Background,
	Products,
	Left,
	ButtonItem,
	Menu,
	MenuItem,
	MenuList,
	Right,
	ButtonMobileItem,
	MenuMobile,
	MenuMobileItem,
	MenuMobileList,
} from "./Products.elements";
import ProductList from "./ProductList/ProductList";

const ProductsComponent = ({ menuList, products }) => {
	const [checkMobileWidth, setCheckMobileWidth] = useState(false);
	useEffect(() => {
		if (window.innerWidth <= 450) {
			setCheckMobileWidth(true);
		}
	}, []);
	return (
		<Background lightBg={products[0].lightBg}>
			<Container>
				{checkMobileWidth ? (
					<div>
						<MenuMobile>
							<MenuMobileList>
								{menuList.map((item, index) => {
									return (
										<MenuMobileItem key={index}>
											<Link
												to={{
													pathname: "/products",
													hash: `${item.id}`,
												}}
											>
												<ButtonMobileItem>{item.name}</ButtonMobileItem>
											</Link>
										</MenuMobileItem>
									);
								})}
							</MenuMobileList>
						</MenuMobile>
						{products.map((product, index) => {
							return (
								<div key={index}>
									<ProductList
										id={product.id}
										lightText={product.lightText}
										lightTextCard={product.lightTextCard}
										headlineName={product.headlineName}
										products={product.products}
									/>
								</div>
							);
						})}
					</div>
				) : (
					<Products>
						<Left>
							<Menu>
								<MenuList>
									{menuList.map((item, index) => {
										return (
											<MenuItem key={index}>
												<Link
													to={{
														pathname: "/products",
														hash: `${item.id}`,
													}}
												>
													<ButtonItem>{item.name}</ButtonItem>
												</Link>
											</MenuItem>
										);
									})}
								</MenuList>
							</Menu>
						</Left>
						<Right>
							{products.map((product, index) => {
								return (
									<ProductList
										key={index}
										id={product.id}
										lightText={product.lightText}
										lightTextCard={product.lightTextCard}
										headlineName={product.headlineName}
										products={product.products}
									/>
								);
							})}
						</Right>
					</Products>
				)}
			</Container>
		</Background>
	);
};

export default ProductsComponent;
