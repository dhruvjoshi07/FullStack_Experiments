 
# fsd_1(6sem)
Login & Product Management Experiment
1. Aim of the Experiment
The aim of this experiment is to design a web-based login system and product management interface using React. Users should be able to:
Login with email and password
Navigate to a Dashboard
Add new products
View products in a cart-like interface (optional Redux integration)

2. Tools Used
Visual Studio Code – code editor
Node.js & npm – package management and runtime
React.js – frontend library for building UI
React Router – for page navigation
React Context API – for managing authentication state
Redux Toolkit & React-Redux – for managing global product/cart state
Git & GitHub – version control and repository hosting
Browser (Chrome/Edge/Firefox) – for testing and running the app

3. Technologies Used
HTML5, CSS3 – page structure and styling
JavaScript (ES6+) – dynamic functionality
React Hooks – useState, useContext, useNavigate
React Router DOM – route management
Redux Toolkit – state management for cart/products
Vite – development server for fast React builds

4. How the System Works
Login Page
Users enter their email and password.
On submission, the system validates the input (basic client-side validation) and redirects to the Dashboard using useNavigate.
Dashboard Page
Shows a welcome message.
Contains a button to navigate to Add Product page.
Add Product Page
Users can enter product name and price.
On submitting, products are stored in the Redux store.
Routing
React Router handles navigation between pages without reloading the browser.

5. Procedure / Steps
Clone the repository from GitHub.
Navigate to the project folder: fsdexp1.
Install dependencies:
npm install
Start the development server:
npm run dev
Use the Login page → Dashboard → Add Product flow.

6. Outcome
Successfully created a functional login page.
Dashboard correctly redirects after login.
Users can add products and see them stored in Redux store.
Demonstrated use of React Hooks, Context API, Redux, and Router in a small-scale project.
Improved understanding of state management, routing, and component styling.

7. Advantages / Use
Provides a foundation for web-based product management systems.
Helps understand frontend routing and state management.

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

