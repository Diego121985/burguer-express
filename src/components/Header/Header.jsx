import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";
import {
  HeaderContainer,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuButton,
  CartWrapper,
  CartBadge,
} from "./Header.styles";

function Header() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isCartPage = location.pathname === "/cart";
  const isPaymentsPage = location.pathname === "/payments";
  const isPixPage = location.pathname === "/pix";
  const isCardPage = location.pathname === "/cartao";

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToSection(id) {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Nav>
        <Logo>Burger Express</Logo>
<Menu>
  {/* 🔹 Menu (sempre visível) */}
  <MenuItem>
    <MenuButton
      onClick={() => {
        if (location.pathname !== "/") {
          navigate("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      Menu
    </MenuButton>
  </MenuItem>

  {/* 🔹 PIX ou CARTÃO */}
  {isPixPage || isCardPage ? (
    <MenuItem>
      <MenuButton onClick={() => navigate("/payments")}>
        ← Alterar forma de pagamento
      </MenuButton>
    </MenuItem>

  ) : isPaymentsPage ? (
    /* 🔹 PAYMENTS → só carrinho */
    <MenuItem>
      <MenuButton onClick={() => navigate("/cart")}>
        <CartWrapper>
          🛒
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </CartWrapper>
      </MenuButton>
    </MenuItem>

  ) : (
    /* 🔹 HEADER COMPLETO (Home, Cart, etc.) */
    <>
      <MenuItem>
        <MenuButton onClick={() => goToSection("lanches")}>
          Lanches
        </MenuButton>
      </MenuItem>

      <MenuItem>
        <MenuButton onClick={() => goToSection("bebidas")}>
          Bebidas
        </MenuButton>
      </MenuItem>

      <MenuItem>
        <MenuButton onClick={() => goToSection("sobremesas")}>
          Sobremesas
        </MenuButton>
      </MenuItem>

      <MenuItem>
        <MenuButton onClick={() => navigate("/cart")}>
          <CartWrapper>
            🛒
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </CartWrapper>
        </MenuButton>
      </MenuItem>
    </>
  )}
</Menu>

      </Nav>
    </HeaderContainer>
  );
}

export default Header;
