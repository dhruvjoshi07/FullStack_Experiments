import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PublicPostsTable from './components/PublicPostsTable';
import PublicPostsTableFetch from './components/PublicPostsTableFetch';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import ProductForm from './components/ProductForm';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Axios GET</Link>
        <Link to="/fetch-posts">Fetch GET</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Protected Product API</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="container">
        <div className="card">
          <h1>Experiment 8: React + Spring Boot Integration</h1>
          <p>
            This project demonstrates public API fetching, form submission with response-code handling,
            global CORS configuration, and JWT-protected API calls.
          </p>
        </div>
        <Routes>
          <Route path="/" element={<PublicPostsTable />} />
          <Route path="/fetch-posts" element={<PublicPostsTableFetch />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
