import styled from "styled-components";

export const InfoSec = styled.div`
	color: #fff;
	height: calc(100vh - 80px);
	background: ${({ urlImg }) =>
		urlImg ? `url(${urlImg}) center center/cover no-repeat` : "#fff"};
	display: grid;
	place-items: center;
`;

export const InfoRowCenter = styled.div`
	display: grid;
	place-items: center;
	margin: 0 -15px -15px --15px;
	flex-wrap: wrap;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 200px;
	text-transform: uppercase;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};

	@media screen and (max-width: 768px) {
		font-size: 120px;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 60px;
	line-height: 24px;
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
