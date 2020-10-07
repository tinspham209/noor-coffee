export const hero = {
	primary: true,
	lightTopLine: true,
	lightText: true,
	lightTextDesc: true,
	headline: "Noor ",
	description: "Coffee & Tea",
	buttonLabel: "Sản phẩm",
	urlLinkBtn: "/products",
	urlImg: require("../../assets/img/anh-bia.webp"),
};

export const special = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Chi tiết",
	productList: {
		id: "special",
		headlineName: "menu",
		headlineBtn: true,
		headlineButtonName: "XEM THÊM TẤT CẢ SẢN PHẨM",
		products: [
			{
				cardTitle: "Cà phê Noor",
				img: require("../../assets/img/products/cf-que.jpg"),
				description: "25.000Đ",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				cardTitle: "Trà sen vàng",
				img: require("../../assets/img/products/tra-sen-vang.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "trà atiso macchiato",
				img: require("../../assets/img/products/macchiato-tra-atiso.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				newProduct: true,
			},
			{
				cardTitle: "Trà thạch vải",
				img: require("../../assets/img/products/tra-thach-vai.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "trà đào chanh sả",
				img: require("../../assets/img/products/tra-dao-chanh-sa.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "Matcha macchiato",
				img: require("../../assets/img/products/macchiato-tra-xanh.jpg"),
				description: "37.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
		],
	},
};
