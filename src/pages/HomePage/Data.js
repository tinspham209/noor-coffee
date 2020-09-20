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
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
					trend: true,
					newProduct: true,
				},
				{
					cardTitle: "Bạc xỉu",
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
					trend: true,
				},
				{
					cardTitle: "trà đen macchiato",
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
					newProduct: true,
				},
				{
					cardTitle: "Trà thạch vải",
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "trà tắc xí muội",
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
				{
					cardTitle: "nước chanh xí muội",
					img: require("../../assets/img/products/ca-phe-sua.jpg"),
					description: "25.000Đ",

					urlLinkBtn: "/products",
				},
			],
		},
	],
};
