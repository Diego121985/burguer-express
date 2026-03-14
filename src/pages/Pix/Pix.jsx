import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext.jsx";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import PageSection from "../../components/PageSection/PageSection.jsx";

import {
  PixContainer,
  PixTitle,
  PixInfo,
  PixValue,
  PixQr,
  FinishButton,
} from "./Pix.styles";

function Pix() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();


  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handlePaid() {
    clearCart();
    navigate("/success");
  }

  return (
    <PageContainer>
      <PageSection title="Pagamento via PIX">
        <PixContainer>
          <PixTitle>Pagamento via PIX</PixTitle>

          <PixInfo>
            Escaneie o QR Code abaixo para realizar o pagamento
          </PixInfo>

          <PixQr>QR CODE</PixQr>

          <PixValue>Valor: R$ {total.toFixed(2)}</PixValue>

          <FinishButton onClick={handlePaid}>
            Já paguei
          </FinishButton>
        </PixContainer>
      </PageSection>
    </PageContainer>
  );
}

export default Pix;
