import styled from "styled-components";

export const Headline = styled.div``;

export const HeadlineTitle = styled.h1`
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	text-transform: uppercase;

	margin-bottom: 24px;

	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Products = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

	margin-bottom: 50px;
`;
