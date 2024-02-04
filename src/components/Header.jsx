import { useContext } from "react";
import Button from "../UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContex from "../store/CartContext";

function Header() {
  const cartCtx = useContext(CartContex);

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

export default Header;
