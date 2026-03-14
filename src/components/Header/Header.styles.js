import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

/* Header fixo no topo com sombra dinâmica */
export const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 32px;
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "0 4px 12px rgba(0, 0, 0, 0.15)"
      : "0 2px 6px rgba(0, 0, 0, 0.1)"};
  position: fixed; /* Fixo no topo */
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
`;

/* Nav interno */
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Logo */
export const Logo = styled.h1`
  color: #ff7a2f;
  font-size: 1.5rem;
  font-weight: bold;
`;

/* Menu (ul) */
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  
  nav {
    display: flex;
    gap: 24px;
    
  }

    nav a {
    text-decoration: none;
    color: #0d0e0b;
    font-weight: 500;
    transition: color 0.2s;
  }

  nav a:hover {
    color: #ff7a2f;
  }
`;

/* Item do menu (li) */
export const MenuItem = styled.li`

`;

/* Link estilizado */
export const MenuLink = styled(RouterLink)`
  text-decoration: none;
  color: #080808;
  font-weight: 500;
  transition: color 0.2s;
  background-color: none;
  

  &:hover {
    color: #ffd6c0;
  }
`;
export const CartWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 0;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -13px;
  right: -13px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
  color: black;
`;
export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #f5f507;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(10, 10, 10);
  }
`;

