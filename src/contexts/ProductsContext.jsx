import { createContext, useState } from "react";
import { productsData } from "../data/ProductsData";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(productsData);

  function addProduct(product) {
    setProducts((prev) => ({
      ...prev,
      [product.category]: [...prev[product.category], product],
    }));
  }

  function removeProduct(category, id) {
    setProducts((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id !== id),
    }));
  }

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
