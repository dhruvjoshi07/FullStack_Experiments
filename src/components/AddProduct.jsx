import React from "react";
import "../App.css";

function AddProduct() {
  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Add Product</h2>
        <form>
          <input type="text" placeholder="Product Name" />
          <input type="number" placeholder="Price" />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;


