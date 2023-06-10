import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-size: large;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input{
    &:focus{
      outline: 0;
    }
  }

  a{
    color: black;
  }

`;