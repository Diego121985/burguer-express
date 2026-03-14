import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext.jsx";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import PageSection from "../../components/PageSection/PageSection.jsx";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  Section,
  SectionTitle,
  Row,
  Total,
  PaymentOption,
  ConfirmButton,
  Divider,
} from "./Payments.styles";

function OrderSummary({ total }) {
  return (
    <Section>
      <SectionTitle>Resumo do pedido</SectionTitle>

      <Row>
        <span>Total</span>
        <Total>R$ {total.toFixed(2)}</Total>
      </Row>
    </Section>
  );
}

function Payments() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <Navigate to="/cart" />;
  }
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  function handleContinue() {
    if (paymentMethod === "pix") {
      navigate("/pix");
    }

    if (paymentMethod === "card") {
      navigate("/cartao");
    }
  }

  return (
    <PageContainer>
      <PageSection title="Pagamento">
        <OrderSummary total={total} />
        <Divider />

        <Section>
          <SectionTitle>Forma de pagamento</SectionTitle>

          <PaymentOption selected={paymentMethod === "pix"}>
            <input
              type="radio"
              name="payment"
              value="pix"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>Pix</span>
          </PaymentOption>

          <PaymentOption selected={paymentMethod === "card"}>
            <input
              type="radio"
              name="payment"
              value="card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>Cartão de crédito / débito</span>
          </PaymentOption>
        </Section>

        <ConfirmButton disabled={!paymentMethod} onClick={handleContinue}>
          Confirmar a forma de pagamento
        </ConfirmButton>
      </PageSection>
    </PageContainer>
  );
}

export default Payments;
