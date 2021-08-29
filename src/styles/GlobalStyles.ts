import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .loginPage {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100vh
  }

  :root {
    font-size: 60%;
    --color-primary-lighter: #329ae4;
    --color-background: #F0F0F7;
    --color-primary: #1981CD;
    --color-primary-light: #2b93dd;
    --color-primary-darker: #15659e;
    --color-primary-dark: #1973b4;
    --color-secundary-dark: #0382dd;
    --color-secundary: #0095ff;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #BEBEBE;
    --color-text-title: #1F204D;
    --color-text-complement: #A3A1A8;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-input-border: #e1e4e8;
    --color-shadow-inset: inset 0 1px 0 rgba(255, 228, 232, 0.2);
    --color-state-focus-border: #0366d6;
    --color-state-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #343333;
    --color-buttons: #24292e;
    --color-buttons-hover: rgba(27,31,35,0.85);
    --color-text-base: #5C5C5C;
    --color-search: rgba(255, 255, 255, 0.13);
    --color-text-search: rgb(240, 246, 252);
    --color-header-and-footer: #21262c;
    --color-background-button: #24292d;
  }

  html {
    min-height: 100%;
  }

  body {
    background: var(--color-background);
    line-height: 1.5;

    color: #212529;
  }

  /* ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(125deg, #1981cd, #676767);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: white;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  } */

  body, input, button, textarea {
    font-weight: 500;
    font-family: Poppins, sans-serif;
    color: var(--color-button-text);
    border: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  b {
    font-family: Poppins, sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  span {
    font-family: Poppins, sans-serif;
  }

  a {
    font-family: Poppins, sans-serif;
    text-decoration: none;
    background: transparent;
    color: var(--color-line-in-white)
  }

  p {
    font-family: Poppins, sans-serif;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Archivo, sans-serif;
    line-height: 1.2;
    color: black
  }

  h5 {
    font-size: 2rem !important;
  }

  h6 {
    font-size: 1.4rem !important;
  }

  label {
    font-family: Poppins, sans-serif;
    font-size: 1.6rem !important;

    display: inline-block;

    color: black
  }

  strong {
    font-family: Archivo, sans-serif;
    color: black
  }

  small {
    font-family: Archivo, sans-serif
  }

  @media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
