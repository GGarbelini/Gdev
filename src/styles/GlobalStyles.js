import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #000000;
    --color-secondary: #121212;
    --color-accent: #3dff8b;
    --color-white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: var(--color-primary);
    color: var(--color-white);
    line-height: 1.5;
    overflow-x: hidden;
  }

  /* Remover cores padrão de links visitados */
  a, a:link, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }
  
  /* Container para todas as seções */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Classes de utilidade */
  .text-accent {
    color: var(--color-accent);
  }

  /* Media queries para responsividade */
  @media (max-width: 1200px) {
    .container {
      max-width: 992px;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 768px;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 576px;
    }
  }

  @media (max-width: 576px) {
    .container {
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  /* Estilos para dispositivos móveis */
  @media (max-width: 576px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;