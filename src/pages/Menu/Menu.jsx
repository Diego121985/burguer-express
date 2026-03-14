import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroCarousel from "../../components/HeroCarousel";
import CartContext from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import ProductsContext from "../../contexts/ProductsContext.jsx";

import {
  MenuContainer,
  CategorySection,
  CategoryTitle,
  CarouselWrapper,
  CarouselContainer,
  ScrollButton,
} from "./Menu.Styles";

function Menu() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const location = useLocation();

  // Scroll automático quando vem de outra página
  useEffect(() => {
    if (location.state?.scrollTo) {
      const elemento = document.getElementById(location.state.scrollTo);
      if (elemento) {
        // Pequeno delay para garantir que a página carregou
        setTimeout(() => {
          elemento.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const scrollCarousel = (carouselId, direction) => {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const scrollAmount = 300;

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  function renderCategory({ sectionId, carouselId, title, products }) {
    return (
      <CategorySection id={sectionId}>
        <CategoryTitle>{title}</CategoryTitle>

        <CarouselWrapper>
          <ScrollButton onClick={() => scrollCarousel(carouselId, "left")}>
            ‹
          </ScrollButton>

          <CarouselContainer id={carouselId}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => addToCart(product)}
              />
            ))}
          </CarouselContainer>

          <ScrollButton onClick={() => scrollCarousel(carouselId, "right")}>
            ›
          </ScrollButton>
        </CarouselWrapper>
      </CategorySection>
    );
  }

  return (
    <MenuContainer>
      <HeroCarousel onAdd={addToCart} />

      {renderCategory({
        sectionId: "lanches",
        carouselId: "carousel-lanches",
        title: "🍔 Lanches",
        products: products.lanches,
      })}

      {renderCategory({
        sectionId: "bebidas",
        carouselId: "carousel-bebidas",
        title: "🥤 Bebidas",
        products: products.bebidas,
      })}

      {renderCategory({
        sectionId: "sobremesas",
        carouselId: "carousel-sobremesas",
        title: "🍰 Sobremesas",
        products: products.sobremesas,
      })}
    </MenuContainer>
  );
}

export default Menu;