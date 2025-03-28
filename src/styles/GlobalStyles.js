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
    --main-text-black:#2a2a2a;
    --lightSeaGreen:#20B2AA;
    --teal:#008080;
    --blue-tint:#00ace7;

    --teacher-color-1:#006400;
    --teacher-color-2:#4B0082;
    --teacher-color-3:#FF6347;
    --teacher-color-4:#FF00FF;

    --main-red:#e94734;

    --main-disabled:#777582;

    --text-lessons-time:rgba(0, 0, 0, 0.45);
    --lessons-background:#F5F5F5;
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

   // DatePickerLesson


.ant-picker-panels {

justify-content: center !important;
}


.ant-select-selector{
  border: 2px solid var(--main-green) !important;
  min-width: 130px !important;
}
.ant-picker-panels{
 
    @media (max-width: 768px) {
   flex-wrap: wrap !important;
  }
}

.ant-picker.ant-picker-range.ant-picker-middle.css-17a39f8.custom-datepicker,
.ant-picker.ant-picker-range.ant-picker-middle.css-17a39f8.custom-datepicker.ant-picker-focused{
   border: 2px solid var(--main-green) !important;
}

.ant-picker-input > input::placeholder{
  color: var(--main-green) !important;
}

.ant-picker.css-17a39f8.ant-picker-focused, .ant-picker.css-17a39f8{
 border: 2px solid var(--main-green) !important;
}

 /* ChoseLessonData component*/
 
.ant-collapse-header-text{
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 16px;
  color: #006400;
}

.anticon.anticon-right.ant-collapse-arrow{
  color: #006400;
}

.ant-popover .ant-popover-content{
 border: 3px solid var(--main-yellow);
 border-radius: 8px;
}
.ant-select-selection-placeholder, .ant-select-selection-item {
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 14px;
  color: var(--main-text-black) !important;
}
.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper{
 border: 2px solid var(--main-dark-blue);
 border-radius: 8px !important;
 min-width: 340px !important;
}
`;

export default GlobalStyles;

export const btnStyledAll = `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

   transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: #fff !important;
  }
`;
