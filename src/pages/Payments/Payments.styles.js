import styled from "styled-components";

export const Section = styled.section`
  padding: 16px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  margin-bottom: 12px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #ff3d00;
`;
export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-bottom: 10px;

  ${({ selected }) =>
    selected &&
    `
      border-color: #ff3d00;
      background: #fff5f0;
    `}
`;

export const ConfirmButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff7a18, #ff3d00);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
  background: #ccc;
  cursor: not-allowed;
}

`;
export const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 20px 0;
`;

