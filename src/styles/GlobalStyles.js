import { createGlobalStyle } from 'styled-components';

import PoppinsBlack from './fonts/Poppins-Black.ttf';
import PoppinsBold from './fonts/Poppins-Bold.ttf';
import PoppinsExtraBold from './fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraLight from './fonts/Poppins-ExtraLight.ttf';
import PoppinsLight from './fonts/Poppins-Light.ttf';
import PoppinsMedium from './fonts/Poppins-Medium.ttf';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';
import PoppinsThin from './fonts/Poppins-Thin.ttf';

const GlobalStyles = createGlobalStyle`
 
  /* Font Face */
  @font-face {
    font-family: 'Poppins';
    font-weight: 900;
    font-style: normal;
    src: url(${PoppinsBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: normal;
    src: url(${PoppinsBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 800;
    font-style: normal;
    src: url(${PoppinsExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 200;
    font-style: normal;
    src: url(${PoppinsExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 300;
    font-style: normal;
    src: url(${PoppinsLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    font-style: normal;
    src: url(${PoppinsMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    font-style: normal;
    src: url(${PoppinsSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 100;
    font-style: normal;
    src: url(${PoppinsThin}) format('truetype');
  }
 body {
    font-family: 'Poppins', sans-serif;
   
  }

  #root{
    height: 100vh;
    ${
      '' /* display: flex;
    flex-direction: column;  */
    }
    
  }

  main{
    flex: 1;
    display: flex;
    flex-direction: column;

  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }
  

  a {
    text-decoration: none;
  }
  

  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
   /* Global Breakpoints */
  :root {
    --small-screen: 375px;
    --medium-screen: 768px;
    --large-screen: 1440px;

    --main-green:#539536;
    --main-yellow:#fddc10;
    --main-blue:#c8ebf1;
    --header-main-color:#f0f0f0;
  }


  button {
    &:hover, &:focus {
      transition: 0.6s;
      animation:  easeIn;
    }
  }

  a {
    &:hover, &:focus {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover), &:not(:focus){
      transition: 0.6s;
      animation:  easeOut;
    }

  }

   svg {
    &:hover, &:focus {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover), &:not(:focus){
      transition: 0.6s;
      animation:  easeOut;
    }
  }

`;

export default GlobalStyles;
