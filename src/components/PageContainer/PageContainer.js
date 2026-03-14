import styled from "styled-components";

export const Container = styled.main`
  max-width: 400px;
  margin: 96px auto 48px;
  padding: 0 16px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  color: #222;
`;

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 16px;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(6px);
`;
