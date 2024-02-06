import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContexProvider } from "./store/CartContext";
import { UserProgressContexProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContexProvider>
      <CartContexProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContexProvider>
    </UserProgressContexProvider>
  );
}

export default App;
