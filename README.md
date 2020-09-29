# Project: Noor Coffee Website

### Date: Sep - 2020

### Functions

- Design website for my coffee shop in Danang 😙

### Screenshot

<img src="https://i.imgur.com/okPlhtY.png" alt="noor-coffee-website"/>

### Releases

- https://noordn.cf

### Plan Of Action

1. Initial Project
2. setup react, install tool
3. Design Wireframe
4. Creating globalStyles
5. Creating Navbar
6. Initial Homepage
7. Creating Footer
8. Creating InfoSection
9. Import Data to InfoSection
10. Create Stores page
11. Create StoreMaps component
12. Create Maps component
13. Implement OpenStreetMap to StoreMaps
14. Deploy to Firebase
15. Add custom domain
16. Add SSL certification for domain
17. Import Data to Stores page
18. Create Products page
19. Create Products component
20. Create ProductList component
21. Create Product component
22. Import Data to Products page
23. LazyLoad image products
24. Add StoreMaps to homepage
25. Add Products Special to homepage

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── public
└── src
    ├── assets
        └── img
    ├── components
        ├── Footer
        ├── InfoSection
        ├── InfoSectionFull
        ├── Navbar
        ├── Products
            └── ProductList
                └── Product
        ├── StoreMaps
            └── Maps
        ├── UI
            ├── Spinner
            ├── NotFound
            └── index.js
        ├── ScrollToTop.jsx
        └── index.js
    ├── pages
        ├── About
        ├── Blog
        ├── HomePage
        ├── Products
        └── Stores
    ├── App.js
    ├── GlobalStyles.js
    └── index.js
```

For the project to build, these must exist with exact filenames:

- `public/index.html` is the page template
- `src/index.js` is the entry point
- `src/GlobalStyles.js` is the Global Styles
- `src/App.js` is the Router

## Installation Guide

### Tech-Stack

- React Hooks
- react-router-dom
- react-router-hash-link
- styled-components
- react-icons
- leaflet
- react-leaflet
- react-lazy-load-image-component

### Production

- Clone this project

```
git clone https://github.com/tinspham209/noor-coffee
```

- Install dependencies

```
npm install
```

- Start the server

```
npm start
```

### Development

- Clone this project
- Install dependencies

```
npm install
```

- Start packager

```
npm start
```

### Components function:

- **InfoSection**
- **InfoSectionFull** : is InfoSection, Full height & children in center
- **StoreMaps**: is InfoSection, and have custom Maps
- **Maps**: OpenStreetMaps custom Maps component
- **Products**: bem Layout to Left Right
- **ProductList**: List of Products
- **Product**: product information

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.jsx`
- Style component file name: should be -- Ex: `InfoSection.elements.js`

### How to style for each component?

- Create a styled-component file. Ex: `InfoSection.elements.js`
- Import to `jsx` file

```
InfoSection.jsx

import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to import and export module?

- Import:

```
//import every thing
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//for default export
import InfoSection from './InfoSection'

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to update new product

```js
// src/pages/Products/Data.js

export const products = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Chi tiết",
	productList: [
		{
			id: "special", // need to update
			headlineName: "Nổi bật", // need to update

			products: [
				{
					cardTitle: "Cà phê Noor", // need to update
					img: require("../../assets/img/products/cf-que.jpg"), // need to update
					description: "25.000Đ", // need to update

					urlLinkBtn: "/products",
					newProduct: true, // need to update
					trend: true,// need to update
				},
            ]
        }
```

- `id`: ID for onScrollToView
- `headlineName`: name of productList
- `cardTitle`: name of product
- `img`: url link image of product
- `description`: price of product
- `newProduct`: an Label tag for new product
- `trend`: an Label tag for Best Seller product
