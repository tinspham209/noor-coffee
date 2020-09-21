export const hero = {
	primary: false,
	lightTopLine: false,
	lightText: false,
	lightTextDesc: false,
	headline: "Noor ",
	description: "Coffee & Tea",
	buttonLabel: "Sản phẩm",
	urlLinkBtn: "/products",
	urlImg: require("../../assets/img/hangout.svg"),
};

export const special = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Chi tiết",
	productList: [
		{
			id: "special",
			headlineName: "menu",
			headlineBtn: true,
			headlineButtonName: "XEM THÊM TẤT CẢ SẢN PHẨM",
			products: [
				{
					cardTitle: "Cà phê Quế",
					img: require("../../assets/img/products/cf-que.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
					trend: true,
					newProduct: true,
				},
				{
					cardTitle: "trà atiso macchiato",
					img: require("../../assets/img/products/macchiato-tra-atiso.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "Sữa chua việt quốc hạt chia ",
					img: require("../../assets/img/products/yogurt-hat-chia-viet-quoc.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "trà hoa đậu biếc macchiato",
					img: require("../../assets/img/products/macchiato-hoa-dau-biet.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "nước ép củ dền",
					img: require("../../assets/img/products/fruit-cu-den.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "cold brew cam vàng",
					img: require("../../assets/img/products/coldbrew-cam-vang-outside.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
			],
		},
	],
};
