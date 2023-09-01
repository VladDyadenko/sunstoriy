import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import RobotoSlabBlack from './fonts Slab/RobotoSlab-Black.ttf';
import RobotoSlabBold from './fonts Slab/RobotoSlab-Bold.ttf';
import RobotoSlabExtraBold from './fonts Slab/RobotoSlab-ExtraBold.ttf';
import RobotoSlabExtraLight from './fonts Slab/RobotoSlab-ExtraLight.ttf';
import RobotoSlabLight from './fonts Slab/RobotoSlab-Light.ttf';
import RobotoSlabMedium from './fonts Slab/RobotoSlab-Medium.ttf';
import RobotoSlabRegular from './fonts Slab/RobotoSlab-Regular.ttf';
import RobotoSlabSemiBold from './fonts Slab/RobotoSlab-SemiBold.ttf';
import RobotoSlabThin from './fonts Slab/RobotoSlab-Thin.ttf';

const GlobalStyles = createGlobalStyle`
  ${normalize}
 
  @font-face {
    font-family:'RobotoSlab ';
    font-weight: 900;
    font-style: normal;
    src: url(${RobotoSlabBlack}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 700;
    font-style: normal;
    src: url(${RobotoSlabBold}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 800;
    font-style: normal;
    src: url(${RobotoSlabExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 200;
    font-style: normal;
    src: url(${RobotoSlabExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 300;
    font-style: normal;
    src: url(${RobotoSlabLight}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 500;
    font-style: normal;
    src: url(${RobotoSlabMedium}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 400;
    font-style: normal;
    src: url(${RobotoSlabRegular}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 600;
    font-style: normal;
    src: url(${RobotoSlabSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoSlab';
    font-weight: 100;
    font-style: normal;
    src: url(${RobotoSlabThin}) format('truetype');
  }


 body {
   font-family: 'Roboto Slab', serif;
   
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
    --main-dark-blue:#0456ba;
    --main-dark-blue-bg:#1976d2;
    --header-main-color:#f0f0f0;
    --bg-main-color:#68bf48;

    --teacher-color-1:#006400;
    --teacher-color-2:#4B0082;
    --teacher-color-3:#FF6347;
    --teacher-color-4:#FF00FF;
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
