import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 60%;

    --white-200: rgba(209, 213, 219, 1);
    --white-300: #E6E6F0;
    --white-800: rgb(240, 246, 252);
    --white-900: #FFFFFF;

    --gray-50: hsla(0, 0%, 100%, 0.75)
    --gray-100: #6b7280;
    --gray-200: #d1d5db;
    --gray-250: #a1a1aa;
    --gray-300: #71717a;
    --gray-350: #52525b;
    --gray-400: #3f3f46;
    --gray-500: #343333;
    --gray-600: rgba(255, 255, 255, 0.13);
    --gray-700: #18181b;

    --slate-400: #21262c;
    --slate-500: #111827;

    --red-500: rgb(229, 62, 62);

    --blue-600: #3b82f6;
  }

  html, body {
    background: var(--gray-200);
    line-height: 1.5;
    min-height: 100vh;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  span {
    font-family: 'Poppins', sans-serif;
  }

  a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    background: transparent;
    color: var(--white-900)
  }

  p {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo', sans-serif;
    line-height: 1.2;
  }

  label {
    font-family: 'Poppins', sans-serif;
  }

  strong {
    font-family: 'Archivo', sans-serif;
    color: black
  }

  small {
    font-family: 'Archivo', sans-serif
  }
`
