import React from 'react';
import { Global, css } from "@emotion/react";

const style = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    --black: #12101D;
    --white: #FFFFFF;
    --primary: #B672FD;
    --secondary: #E7266C;
    --highlight: #E2FAFF;
    
    --desktop-content: 1083px;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    font-family: Noto Sans KR, sans-serif;
    background-color: var(--black);
    max-width: 100vw;
    overflow-x: hidden;
    
    .normal-24 {
      font-family: Noto Sans KR, sans-serif;
      color: var(--white);
      font-size: clamp(12px, 1.667vw, 24px);
      font-style: normal;
      font-weight: normal;
      letter-spacing: -0.017em;
      white-space: break-spaces;
    }

    .bold-24 {
      font-family: Noto Sans KR, sans-serif;
      color: var(--white);
      font-size: clamp(12px, 1.667vw, 24px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.068em;
      line-height: 29px;
      white-space: break-spaces;
    }

    .bold-36 {
      font-family: Noto Sans KR, sans-serif;
      color: var(--white);
      font-size: clamp(16px, 2.5vw, 36px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }
    
    .stencil-64 {
      font-family: Atami, sans-serif;
      color: var(--white);
      font-size: clamp(36px, 4.44vw, 64px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }

    .normal-64 {
      font-family: Noto Sans KR, sans-serif;
      color: var(--white);
      font-size: clamp(36px, 4.44vw, 64px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
      white-space: break-spaces;
    }
    
    .stencil-24 {
      font-family: Atami, sans-serif;
      color: var(--white);
      font-size: clamp(12px, 1.667vw, 24px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }
    
    .stencil-title-24 {
      font-family: a Atmospheric, sans-serif;
      color: var(--white);
      font-size: clamp(12px, 0.2vh, 24px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: 0.068em;
    }
    
    .stencil-48 {
      font-family: Atami, sans-serif;
      color: var(--white);
      font-size: clamp(24px, 3.333vw, 48px);
      font-style: normal;
      font-weight: normal;
      letter-spacing: -0.017em;
    }
    
    .stencil-128 {
      font-family: a Atmospheric, sans-serif;
      color: var(--white);
      font-size: clamp(48px, 8.89vw, 128px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: -0.017em;
    }
    
    .logo-128 {
      font-family: Sango, sans-serif;
      color: var(--white);
      font-size: clamp(48px, 5vw, 96px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: -0.017em;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />
};

export default GlobalStyle;