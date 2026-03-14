import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff5ed;
`;


export const CategorySection = styled.section`
  padding: 80px 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 24px;
  padding-left: 20px;
  font-weight: bold;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 41px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px;
  flex: 1;
  scroll-snap-type: x proximity;
  
  /* Esconder scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    scroll-snap-align: start;
  }
`;

export const ScrollButton = styled.button`
  background-color: #181616;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 30%;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    background-color: #c0392b;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`;