// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;






