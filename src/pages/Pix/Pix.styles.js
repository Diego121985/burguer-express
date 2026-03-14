import styled from "styled-components";

export const PixContainer = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
`;

export const PixTitle = styled.h2`
  margin-bottom: 16px;
`;

export const PixInfo = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PixQr = styled.div`
  width: 200px;
  height: 200px;
  background: #eee;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const PixValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const FinishButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #00c853;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
