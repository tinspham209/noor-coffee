import styled from "styled-components";

export const Card = styled.div`
	margin: 5px;
	background-color: white;
	border-radius: 10px;
	padding: 1em;
	-webkit-box-shadow: 17px -12px 23px 6px rgba(99, 99, 99, 1);
	-moz-box-shadow: 17px -12px 23px 6px rgba(99, 99, 99, 1);
	box-shadow: 17px -12px 23px 6px rgba(99, 99, 99, 1);
	text-align: center;

	height: auto;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(1, 1fr);

	position: relative;
`;

export const CardTitle = styled.div`
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
	font-size: 24px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: left;
`;

export const CardImage = styled.div`
	max-width: 100%;
	max-height: 100%;
	border-radius: 5px;
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	max-height: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const TrendLabel = styled.span`
	content: "";
	color: #fff;
	background-color: #ec8b38;
	font-size: 18px;
	line-height: 35px;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	padding: 0 7px;
	position: absolute;
	top: 30px;
	left: 0px;
	z-index: 3;
`;

export const CardDescription = styled.div`
	text-align: left;

	font-size: 30px;
	text-transform: uppercase;
	color: #ec8b38;
`;

export const Button = styled.button`
	background-color: #f9ca24;
	border: none;
	padding: 10px;
	border-radius: 5px;
	font-weight: bold;
	font-size: 20px;
	width: 100%;
	color: #000;
	text-transform: uppercase;

	&:hover {
		box-shadow: 0px 5px 5px #b2bec3;
		color: #4b59f7;
	}
`;
