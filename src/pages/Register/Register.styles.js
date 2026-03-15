import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/burger-background.jpg");
  background-size: cover;
  background-position: center;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
  }
`;


export const Form = styled.form`
  width: 380px;
  padding: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #777171;
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;

  transition: 0.2s;

  &:focus {
    border-color: #ff6b00;
    outline: none;
    box-shadow: 0 0 5px rgba(255,107,0,0.4);
  }
`;
export const Button = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;

  background: #ff6b00;
  color: white;
  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff7f1a;
    transform: translateY(-2px);
  }
`;

export const LoginLink = styled.span`
  text-align: center;
  cursor: pointer;
  color: #ff6b00;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
export const Logo = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  z-index: 2;
`;
export const LogoText = styled.h1`
  font-size: 26px;
  font-weight: 800;
  color: #ff6b00;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;

`;
export const ErrorMessage = styled.p`
  background: #ffe5e5;
  color: #d80913;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
`;

export const SuccessMessage = styled.p`
  background: #e6ffed;
  color: #2e7d32;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
`;