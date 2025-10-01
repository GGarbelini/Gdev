import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Gdev. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;