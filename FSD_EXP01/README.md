Login Experiment – Context API & Redux Toolkit
Project Overview
This project is a React-based web application developed to demonstrate modern state management techniques using: React Context API for Authentication & Role Management Redux Toolkit for Product Catalog and Cart State Management The application supports role-based access control, where Admin and User have different permissions.

Objectives
Implement authentication using Context API Manage global application state using Redux Toolkit Apply role-based authorization (Admin vs User) Separate concerns between authentication state and application data Deploy the application with a live production link

Project Structure
Screenshot 2026-01-20 at 12 18 57 PM
Description
A React application demonstrating state management using:

Context API for Authentication
Redux Toolkit for Product Catalog and Cart
Features
Role-based login (Admin / User)
Admin can manage products
Users can add/remove products from cart
Clean and simple UI
Screenshot 2026-01-19 at 7 35 32 PM Screenshot 2026-01-19 at 7 36 08 PM Screenshot 2026-01-19 at 7 36 35 PM
Tech Stack
React-Frontend UI
Redux Toolkit-Product & Cart State
Context API-Authentication & Role State
Vite-Build Tool
React Redux-Store Integration
CSS-UI
Vercel-Deployement
State Management (Redux Toolkit)
Products Slice
Stores product catalog Actions: Add product (Admin only) Remove product (Admin only)

Cart Slice
Stores user-specific cart items Actions: Add to cart (User only) Remove from cart (User only) Redux ensures predictable and scalable state updates.

Conclusion
This project successfully demonstrates how Context API and Redux Toolkit can be combined in a React application to build a scalable, maintainable, and role-based system. The separation of authentication and application data improves clarity, performance, and real-world usability.

How to Run
npm install
npm run dev
 Local:   http://localhost:5173/