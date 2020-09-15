import styled from "styled-components";

export const Headline = styled.div``;

export const HeadlineTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
	text-transform: uppercase;
`;

export const Products = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	margin-bottom: 50px;
`;
