import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0; 
    padding: 0;
    border: 0;
  }

  body { 
    font-family: 'Mulish', sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    border: 0;

    input, textarea {
      font-family: 'Mulish', sans-serif;
    }
  } 
  
  p, span, ul, li {
    margin: 0;
    padding: 0;
}
`;
