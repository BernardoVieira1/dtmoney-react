import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --text: #969CB3;
    --title: #363F5F;
    --green: #33CC95; 
    --red:#E62E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }
  body{
    background: var(--background) ;
    -webkit-font-smoothing: antialiased;

  }

  border-style, input, textarea,p , button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`

