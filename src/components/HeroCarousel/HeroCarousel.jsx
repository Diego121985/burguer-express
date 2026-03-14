import { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroLeft,
  HeroSubtitle,
  HeroTitle,
  HeroPrice,
  HeroButton,
  HeroRight,
  ImageWrapper,
  HeroImage,
  ArrowButton,
  ArrowSmall,
  Controls,
  HeroDescription,
} from "./HeroCarousel.styles.js";

function HeroCarousel({ onAdd }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const slides = [
    {
      id:23,
      title: "Cheezy Bluster",
      subtitle: "Try Our New",
      price: 24.9,
      description:
        "Pão brioche artesanal, hambúrguer 180g, queijo cheddar triplo, cebola caramelizada e molho especial da casa",
      image:
        "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96772.png",
    },
    {
      id:24,
      title: "X-Bacon Supreme",
      subtitle: "Delicioso",
      price: 28.9,
      description:
        "Pão australiano, hambúrguer 200g, bacon crocante, queijo prato, alface, tomate e maionese defumada",
      image:
        "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png",
    },
    {
      id:25,
      title: "Duplo Smash",
      subtitle: "Novidade",
      price: 32.9,
      description:
        "Pão de batata, dois smash burgers 120g cada, queijo cheddar derretido, picles, cebola roxa e molho barbecue",
      image:
        "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4133.png",
    },
  ];

  const changeSlide = (direction) => {
    if (isChanging) return;
    setIsChanging(true);

    setTimeout(() => {
      setCurrentSlide((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length,
      );
      setIsChanging(false);
    }, 500);
  };
  console.log(currentSlide);
  return (
    <HeroContainer>
      <HeroContent>
        <HeroLeft>
          <HeroSubtitle>{slides[currentSlide].subtitle}</HeroSubtitle>
          <HeroTitle>{slides[currentSlide].title}</HeroTitle>
          <HeroDescription>{slides[currentSlide].description}</HeroDescription>
         <HeroButton onClick={() => {
  const currentProduct = slides[currentSlide]
  onAdd(currentProduct);
}}>
  Peça Agora
</HeroButton>
        </HeroLeft>

        <HeroRight>
          <ImageWrapper $isChanging={isChanging}>
            <HeroImage src={slides[currentSlide].image} />
            <HeroPrice>{slides[currentSlide].price}</HeroPrice>
          </ImageWrapper>
        </HeroRight>
      </HeroContent>

      <Controls>
        <ArrowSmall onClick={() => changeSlide("prev")}>‹</ArrowSmall>
        <ArrowSmall onClick={() => changeSlide("next")}>›</ArrowSmall>
      </Controls>
    </HeroContainer>
  );
}

export default HeroCarousel;
