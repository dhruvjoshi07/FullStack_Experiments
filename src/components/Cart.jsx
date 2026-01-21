import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cart</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;