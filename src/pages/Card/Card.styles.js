import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const CardInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#e74c3c" : "#ccc")};
  font-size: 14px;
  flex: 1;
  min-width: 0;
  outline: none;

  &:focus {
    border-color: ${({ $invalid }) => ($invalid ? "#e74c3c" : "#27ae60")};
  }
`;

export const CardRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CardInputCVV = styled(CardInput)`
  flex: 0.5;
  max-width: 80px;
  text-align: center;

  @media (max-width: 480px) {
    max-width: 100%;
    flex: 1;
  }
`;

export const CardInputValidity = styled(CardInput)`
  flex: 0.7;
  max-width: 150px;
  text-align: center;

  @media (max-width: 480px) {
    max-width: 100%;
    flex: 1;
  }
`;

export const CardValue = styled.p`
  font-weight: bold;
  margin-top: 8px;
`;

export const PayButton = styled.button`
  margin-top: 12px;
  padding: 14px;
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? "#bdc3c7" : "#27ae60")};
  color: white;
  font-weight: bold;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s, opacity 0.2s;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#bdc3c7" : "#219150")};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #e74c3c;
`;
