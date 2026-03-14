import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  max-width: 270px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Info = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.25rem;
`;

export const Description = styled.p`
  margin: 0 0 16px 0;
  color: #666;
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
margin-top: auto;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b35;
`;

export const Button = styled.button`
  background-color: #b6aeab;
  color: black;
  border: 1px solid #0f0f0f;
  padding: 10px ;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: 100%;
  
  
  &:hover {
    background-color: #c0392b;
    color: white;
  }
  
  &:active {
    transform: scale(0.95);
  };
`