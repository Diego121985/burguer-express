import styled, { css } from "styled-components";

/* Container principal */
export const CartContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const CartItemsList = styled.div`
max-height: 400px;
overflow-y: auto;
margin-bottom: 16px;

`
/* Carrinho vazio */
export const CartEmpty = styled.p`
 text-align: center;
  color: #777;
  margin: 32px 0;
  font-size: 16px;

`;

/* Item do carrinho */
export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  background: #fff;
  padding: 12px;
  border-radius: 14px;
  margin-bottom: 12px;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

/* Imagem do produto */
export const CartImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 12px;
`;

/* Área do meio */
export const CartMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

/* Texto genérico com variantes */
export const Text = styled.span`
  ${({ $variant }) => {
    switch ($variant) {
      case "title":
        return css`
          font-size: 0.95rem;
          font-weight: 600;
        `;
      case "description":
        return css`
          font-size: 0.8rem;
          color: #777;
          line-height: 1.3;
        `;
      case "price":
        return css`
          font-size: 0.85rem;
          color: #444;
        `;
      case "total":
        return css`
          font-size: 1.2rem;
          font-weight: 600;
        `;
      default:
        return "";
    }
  }}
`;

/* Controles genéricos */
export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;

  button {
    border: none;
    background: #f3f3f3;
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #e0e0e0;
    }

    &.remove {
      background: #ffe5e5;

      &:hover {
        background: #ffcccc;
      }
    }
  }

  span {
    display: inline-block;
    width: 24px;
    text-align: center;
  }
`;

/* Preço do item */
export const CartRight = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
`;

/* Rodapé do carrinho */
export const CartFooter = styled.div`
  position: sticky;
  bottom: 0;
  background: #fff;
  padding: 14px;
  border-radius: 14px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
`;
export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: #ff6b35;
  color: #fff;
  font-weight: bold;
  
    &:hover {
    opacity: 0.9;
  }

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"};
`