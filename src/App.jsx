import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <div>
      <ProductsProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
