import { css } from 'styled-components';

export const variables = css`
  :root {
    /* Cores principais */
    --color-primary: #000000;
    --color-secondary: #121212;
    --color-accent: #3dff8b;
    --color-white: #ffffff;
    
    /* Variações de cores */
    --color-accent-dark: #2be078;
    --color-accent-light: #5fff9f;
    --color-gray-100: #f5f5f5;
    --color-gray-200: #e5e5e5;
    --color-gray-300: #d4d4d4;
    --color-gray-400: #a3a3a3;
    --color-gray-500: #737373;
    --color-gray-600: #525252;
    --color-gray-700: #404040;
    --color-gray-800: #262626;
    --color-gray-900: #171717;
    
    /* Tipografia */
    --font-primary: 'Space Grotesk', sans-serif;
    --font-secondary: 'Inter', sans-serif;
    
    /* Espaçamentos */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-2xl: 1400px;
    
    /* Efeitos */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-accent: 0 0 15px rgba(61, 255, 139, 0.5);
    
    /* Layout */
    --header-height: 80px;
    --container-width: 1200px;
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    --border-radius-full: 9999px;
  }
`;

export default variables;