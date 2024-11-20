Oasis Incorporated - README

---

Project Description

This is a modern e-commerce web application built using React. It enables users to browse products, view details, add items to their cart, and complete purchases. The project focuses on providing a seamless and responsive user experience while leveraging React’s component-based architecture for efficient and scalable development.

Key Features

Home Page: Display featured and trending products.

Product Listing: Show product categories with filters like price, ratings, and brand.

Product Details: Detailed view of individual products with options for size, color, and quantity.

Shopping Cart: Add, update, or remove items.

Checkout: Streamlined checkout process with payment integration.

Responsive Design: Optimized for mobile, tablet, and desktop.

---

---

Folder Descriptions

1. assets/:

This folder contains all the static files, such as:

Product images, logos, and banner graphics (images/).

Icon sets (icons/).

Custom fonts used in the application (fonts/).

2. components/:

Houses reusable UI components like Navbar, Footer, and ProductCard.

Keeps the app modular by separating smaller pieces of the interface.

3. pages/:

Contains components for each page of the app, such as:

Home.jsx: The landing page with featured products.

ProductDetails.jsx: A detailed view of an individual product.

Cart.jsx: A shopping cart overview.

Checkout.jsx: The checkout process.

4. context/:

Manages global state using the Context API:

CartContext.jsx: Tracks items in the cart and provides functions to update it.

UserContext.jsx: Handles user authentication and data.

5. hooks/:

Contains custom hooks for encapsulating reusable logic:

useFetchProducts.js: Fetch product data from the API.

useAuth.js: Manage user login and authentication status.

6. services/:

Handles external API calls and utility functions:

api.js: Centralized API request functions for products, users, and orders.

authService.js: Handles authentication-related API calls.

7. styles/:

Stores styles to maintain a clean design:

globals.css: Contains reset styles and theme configurations.

Navbar.module.css, ProductCard.module.css: Scoped styles for individual components.

8. App.jsx:

The root component of the application, managing routing and layout structure.

9. index.js:

Entry point for the application, rendering the App.jsx component into the DOM.

---

How to Run the Project

1. Clone the repository:

git clone https://github.com/yourusername/e-commerce-app.git
cd e-commerce-app

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open the app in your browser at http://localhost:5173.

---

Technologies Used

Frontend: React, Tailwind CSS

State Management: Context API

Styling: CSS Modules, Tailwind CSS

API Integration: Axios or Fetch API
