import { useContext } from "react";
import Button from "../UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContex from "../store/CartContext";
import UserProgressContex from "../store/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContex);
  const userProgressCtx = useContext(UserProgressContex);

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
