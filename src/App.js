import Cart from "./components/Cart";
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
      </CartContexProvider>
    </UserProgressContexProvider>
  );
}

export default App;
