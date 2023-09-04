import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
`;
