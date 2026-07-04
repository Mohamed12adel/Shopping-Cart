# Shopping Cart

A React shopping cart application built with Vite and Tailwind CSS. The app includes product listing, product details, cart management, and shared cart state using React Context.

## Features

- Product listing with add-to-cart actions
- Product details pages
- Cart page with selected items and totals
- Shared cart state managed via React Context
- Built with React, Vite, React Router, and Tailwind CSS

## Project structure

- `src/main.jsx` — App entry point
- `src/App.jsx` — Main application component and routes
- `src/context/index.jsx` — Cart context provider and state management
- `src/pages/productList/index.jsx` — Product listing page
- `src/pages/productDetails/index.jsx` — Product detail page
- `src/pages/cartList/index.jsx` — Shopping cart page
- `src/components/productTile/index.jsx` — Product card component
- `src/components/cartTile/index.jsx` — Cart item component

## Getting started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn installed

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

## Notes

- Vite provides fast development server and optimized builds.
- React Router handles page navigation.
- Tailwind CSS is included through `@tailwindcss/vite`.

## License

This project is provided as-is for learning and experimentation.
