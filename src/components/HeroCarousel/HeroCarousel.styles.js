import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg) scale(1);
    opacity: 0;
  }
  to {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
`;

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  background: linear-gradient(to right, #ffffff 63%, #fff1e8 66%, #ff7a2f 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroLeft = styled.div`
  max-width: 460px;
`;

export const HeroSubtitle = styled.span`
  color: #ff7a2f;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  margin: 16px 0 24px;
  color: #2c2c2c;
`;

export const HeroButton = styled.button`
  background: #ff7a2f;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ff641a;
  }
`;

export const HeroRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 780px;
  height: 580px;
  border-radius: 50%;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ $isChanging }) =>
    $isChanging
      ? css`
          animation: ${spin} 0.6s ease-in-out;
        `
      : css`
          animation: none;
        `}
`;

export const HeroImage = styled.img`
  width: 560px;
  pointer-events: none;
  transform: translateZ(40px);
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.3));
`;

export const HeroPrice = styled.div`
  position: absolute;
  bottom: 22px;
  background: white;
  color: #ff6a1a;
  font-weight: 700;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
`;

export const HeroDescription = styled.p`
  color: #666;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  max-width: 28rem;
  line-height: 1.75;
`;

export const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  transition: 0.2s;

  &:hover {
    background: white;
  }

  ${({ direction }) =>
    direction === "left"
      ? css`
          left: -22px;
        `
      : css`
          right: -22px;
        `}
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;

  display: flex;
  gap: 12px;
  z-index: 5;
`;

export const ArrowSmall = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f1f1f1;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e5e5e5;
  }
`;
