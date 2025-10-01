import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

// Importe o logo
import logoImage from '../../assets/images/logo.png';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${props => props.isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(61, 255, 139, ${props => props.isScrolled ? '0.3' : '0.1'});
  transition: all 0.3s ease;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(motion.li)`
  position: relative;
  list-style: none;
  
  a {
    font-weight: 500;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-decoration: none;
    
    &:hover {
      color: #3dff8b;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3dff8b;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  list-style: none;
`;

const MobileNavItem = styled(motion.li)`
  a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    
    &:hover {
      color: #3dff8b;
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Desativar scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' }
  ];
  
  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  
  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  
  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };
  
  const mobileNavItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };
  
  return (
    <HeaderContainer
      variants={headerVariants}
      initial="initial"
      animate="animate"
      isScrolled={isScrolled}
    >
      <Logo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#home">
          <img src={logoImage} alt="Gdev Logo" />
        </a>
      </Logo>
      
      <Nav>
        <NavList>
          {navItems.map((item, i) => (
            <NavItem
              key={item.name}
              custom={i}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
            >
              <a href={item.href}>{item.name}</a>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>
      
      <MobileMenu
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
      >
        <MobileNavList>
          {navItems.map((item, i) => (
            <MobileNavItem
              key={item.name}
              custom={i}
              variants={mobileNavItemVariants}
              initial="closed"
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            >
              <a href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;