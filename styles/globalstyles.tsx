import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;    
    /* screen size: >= 1800px; html font-size: 12px */
    @media only screen and (min-width: 112.5em) {
      {
        font-size: 75%;
      }  
    }
    /* screen size: <= 1200px; html font-size: 9px */
    @media only screen and (max-width: 75em) {
      {
        font-size: 56.25%;
      }  
    }
    /* screen size: <= 900px; html font-size: 8px */
    @media only screen and (max-width: 56.25em) {
      {
        font-size: 50%;
      }  
    }
    /* screen size: <= 600px; html font-size: 7px */
    @media only screen and (max-width: 37.5em) {
      {
        font-size: 43.75%;
      }  
    }
  }

  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle
