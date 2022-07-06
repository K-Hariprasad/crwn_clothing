import AppRoutes from "./routes";
import { UserProvider } from "./context/userContext";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
