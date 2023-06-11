import { createGlobalStyle } from "styled-components";
import FONTS from "../constants/fonts";

export const GlobalStyle = createGlobalStyle`
  *{
    font-size: large;
    margin: 0;
    padding: 0;
    font-family: ${FONTS.PRIMARY};
    color: white;
    font-weight: 400;
    box-sizing: border-box;
  }
  input{
    &:focus{
      outline: 0;
    }
  }
  button{
    border: none;
  }

  a{
    color: black;
  }

`;