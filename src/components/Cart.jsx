import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContex from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import UserProgressContex from "../store/UserProgressContext";

function Cart() {
  const cartCtx = useContext(CartContex);
  const userProgressCtx = useContext(UserProgressContex);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
