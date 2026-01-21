import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Dashboard() {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Dashboard</h2>
        <p>Welcome! You are now logged in.</p>
        <Link to="/add-product">
          <button>Add Product</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;


