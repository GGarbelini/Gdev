import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParticlesBackground = () => {
  return (
    <BackgroundContainer>
      {/* Conteúdo será adicionado posteriormente */}
    </BackgroundContainer>
  );
};

export default ParticlesBackground;