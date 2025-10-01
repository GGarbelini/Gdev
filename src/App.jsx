import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import './styles/PortfolioSection.css';
import './styles/ContactSection.css';
import './styles/ScrollToTop.css';
import './styles/Preloader.css';

// Componentes de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Componentes de seções
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

// Componentes de UI
import ScrollToTop from './components/ui/ScrollToTop';
import Preloader from './components/ui/Preloader';
import ParticlesBackground from './components/animations/ParticlesBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : null}
      <AppContainer>
        <GlobalStyles />
        <ParticlesBackground />
        <Header />
        
        <MainContent>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </MainContent>
        
        <Footer />
        <ScrollToTop />
      </AppContainer>
    </>
  );
}

export default App;