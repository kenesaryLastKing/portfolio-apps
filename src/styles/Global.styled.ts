import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width:  425px;

  }
  
  code {
    font-family: "Roboto",  "Kalameh Bold", "Manrope", "Inter", "Gilroy-Black", "Gilroy-Bold", source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
  text-decoration: none;
  }

  li {
  list-style: none;
  }

  button {
  background-color: unset;
  border: none;
  }

  section {
  padding: 100px 0;
  @media ${theme.media.tablet} {
  padding: 80px 0;
  };
  @media ${theme.media.mobile} {
  padding: 60px 0;
  };
  };
 
  
`
