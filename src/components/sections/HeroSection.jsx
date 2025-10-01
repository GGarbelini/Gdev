import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Componentes estilizados
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: calc(80px + 2rem);
  padding-bottom: 5rem;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
`;

const HeroContainerMobile = styled(HeroContainer)`
  @media (max-width: 768px) {
    padding-bottom: 3rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  z-index: 1;
`;

const PreTitle = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(90deg, #3dff8b, #5fff9f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(61, 255, 139, 0.3);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

const TitleHighlight = styled.span`
  color: #3dff8b;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #3dff8b;
    opacity: 0.3;
    border-radius: 4px;
    z-index: -1;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #d4d4d4;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const ButtonContainerMobile = styled(ButtonContainer)`
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #3dff8b, #5fff9f);
  color: #000000;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(61, 255, 139, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(61, 255, 139, 0.4);
  }
  
  svg {
    margin-left: 0.5rem;
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const PrimaryButtonMobile = styled(PrimaryButton)`
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3dff8b;
    color: #3dff8b;
    transform: translateY(-3px);
  }
`;

const SecondaryButtonMobile = styled(SecondaryButton)`
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const HeroGraphic = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle at center, rgba(61, 255, 139, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
`;

const HeroGraphicTablet = styled(HeroGraphic)`
  @media (max-width: 992px) {
    width: 400px;
    height: 400px;
    right: -200px;
  }
`;

const HeroGraphicMobile = styled(HeroGraphicTablet)`
  @media (max-width: 768px) {
    opacity: 0.5;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a3a3a3;
  font-size: 0.9rem;
`;

const ScrollLine = styled.div`
  width: 2px;
  height: 60px;
  background-color: #3dff8b;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    animation: scrollDown 2s ease-in-out infinite;
  }
  
  @keyframes scrollDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const ScrollIndicatorTablet = styled(ScrollIndicator)`
  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

const ScrollLineTablet = styled(ScrollLine)`
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const ScrollIndicatorMobile = styled(ScrollIndicatorTablet)`
  @media (max-width: 576px) {
    display: none;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainerMobile id="home">
      <div className="container">
        <HeroContent>
          <PreTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Designer & Desenvolvedor
          </PreTitle>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transformando ideias em <br />
            experiências <TitleHighlight>digitais</TitleHighlight> incríveis
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Especialista em criar landing pages de alto impacto e páginas de Link na Bio
            que convertem visitantes em clientes. Design moderno, tecnológico e focado em resultados.
          </Description>
          
          <ButtonContainerMobile
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PrimaryButtonMobile href="#portfolio">
              Ver Portfólio <FiArrowRight />
            </PrimaryButtonMobile>
            <SecondaryButtonMobile href="#contact">
              Entrar em Contato
            </SecondaryButtonMobile>
          </ButtonContainerMobile>
        </HeroContent>
      </div>
      
      <HeroGraphicMobile
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <ScrollIndicatorMobile
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span>Scroll</span>
        <ScrollLineTablet />
      </ScrollIndicatorMobile>
    </HeroContainerMobile>
  );
};

export default HeroSection;