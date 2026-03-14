import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import PageSection from "../../components/PageSection/PageSection.jsx";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

import {
  CartContainer,
  CartEmpty,
  CartItem,
  CartImage,
  CartMiddle,
  CartRight,
  CartFooter,
  Text,
  Button,
  CartItemsList,
} from "./Cart.styles";
import QuantityControls from "./QuantityControls";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const isCartEmpty = cartItems.length === 0;
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <PageContainer>
      <CartContainer>
        {isCartEmpty && <CartEmpty>Seu carrinho está vazio 🛒</CartEmpty>}

        <CartItemsList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImage src={item.image} alt={item.name} />

              <CartMiddle>
                <Text $variant="title">{item.name}</Text>
                <Text $variant="description">{item.description}</Text>
                <Text $variant="price">R$ {item.price.toFixed(2)}</Text>

                <QuantityControls
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                />
              </CartMiddle>

              <CartRight>
                R$ {(item.price * item.quantity).toFixed(2)}
              </CartRight>
            </CartItem>
          ))}
        </CartItemsList>
        {cartItems.length > 0 && (
          <CartFooter>
            <span>Total</span>
            <Text $variant="total">R$ {total.toFixed(2)}</Text>
          </CartFooter>
        )}
        <Button disabled={isCartEmpty} onClick={() => navigate("/payments")}>
          Finalizar o Pedido
        </Button>
      </CartContainer>
    </PageContainer>
  );
}

export default Cart;
