import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { addProduct, removeProduct } from "../redux/productsSlice";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const Dashboard = () => {
  const { user, role, logout } = useContext(AuthContext);
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Welcome {user}</h2>
      <p className="role">Role: {role}</p>
      <button className="logout-btn" onClick={logout}>Logout</button>

      <h3>Product Catalog</h3>

       {/* ADMIN CONTROLS */}
      {role === "admin" && (
        <button
          onClick={() =>
            dispatch(addProduct({ id: Date.now(), name: "New Product" }))
          }
        >
          Add Product
        </button>
      )}

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name}

            {/* ADMIN */}
            {role === "admin" && (
              <button onClick={() => dispatch(removeProduct(p.id))}>
                Delete
              </button>
            )}

            {/* USER */}
            {role === "user" && (
              <button onClick={() => dispatch(addToCart(p))}>
                Add to Cart
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* USER CART */}
      {role === "user" && (
        <>
          <h3>My Cart</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dashboard;