import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext.jsx";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import PageSection from "../../components/PageSection/PageSection.jsx";

import {
  CardContainer,
  CardTitle,
  CardInput,
  CardRow,
  CardInputCVV,
  CardInputValidity,
  PayButton,
  CardValue,
} from "./Card.styles.js";

function Card() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardDateRef = useRef(null);
  const cardCvvRef = useRef(null);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const isCardNumberValid = cardNumber.length === 16;
  const isCvvValid = cardCvv.length === 3;
  const isDateValid = isCardDateValid(cardDate);
  const isNameValid = cardName.trim().length > 0;

  const isFormValid =
    isCardNumberValid && isCvvValid && isDateValid && isNameValid;

 function handlePay() {
  setSubmitted(true);

  if (!isCardNumberValid) {
    cardNumberRef.current?.focus();
    return;
  }

  if (!isNameValid) {
    cardNameRef.current?.focus();
    return;
  }

  if (!isDateValid) {
    cardDateRef.current?.focus();
    return;
  }

  if (!isCvvValid) {
    cardCvvRef.current?.focus();
    return;
  }

  clearCart();
  navigate("/success");
}

  function formatCardNumber(value) {
    let formatted = [];
    let i = 0;

    while (i < value.length) {
      formatted.push(value.slice(i, i + 4));
      i += 4;
    }

    return formatted.join(" ");
  }

  function isCardDateValid(value) {
    if (!/^\d{2}\/\d{2}$/.test(value)) return false;

    const [monthStr, yearStr] = value.split("/");

    const month = Number(monthStr);
    const year = Number(yearStr);

    if (month < 1 || month > 12) return false;

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;

    return true;
  }

  return (
    <PageContainer>
      <PageSection title="Pagamento com Cartão">
        <CardContainer>
          <CardTitle>Dados do cartão</CardTitle>

          <CardInput
          ref={cardNumberRef}
            placeholder="Número do cartão"
            value={formatCardNumber(cardNumber)}
            $invalid={submitted && !isCardNumberValid}
            inputMode="numeric"
            onChange={(e) => {
              const numbersOnly = e.target.value.replace(/\D/g, "");
              setCardNumber(numbersOnly.slice(0, 16));
            }}
          />

          <CardInput
            ref={cardNameRef}
            placeholder="Nome no cartão"
            value={cardName}
            $invalid={submitted && !isNameValid}
            onChange={(e) => setCardName(e.target.value)}
          />

        

          <CardRow>
            <div>
              <CardInputValidity
                ref={cardDateRef}
                placeholder="Validade (MM/AA)"
                value={cardDate}
                $invalid={submitted && !isDateValid}
                inputMode="numeric"
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "");
                  const limited = numbersOnly.slice(0, 4);

                  let formatted = limited;
                  if (limited.length > 2) {
                    formatted = `${limited.slice(0, 2)}/${limited.slice(2)}`;
                  }

                  setCardDate(formatted);
                }}
              />

             
            </div>

            <div>
              <CardInputCVV
               ref={cardCvvRef}
                placeholder="CVV"
                value={cardCvv}
                $invalid={submitted && !isCvvValid}
                inputMode="numeric"
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "");
                  setCardCvv(numbersOnly.slice(0, 3));
                }}
              />

             
            </div>
          </CardRow>

          <CardValue>Total: R$ {total.toFixed(2)}</CardValue>

          <PayButton onClick={handlePay}>
            Pagar com cartão
          </PayButton>
        </CardContainer>
      </PageSection>
    </PageContainer>
  );
}

export default Card;
