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
    font-family: 'Noto Sans KR', sans-serif;
    background-color: var(--black);
    max-width: 100vw;
    overflow-x: hidden;
    
    .normal-24 {
      font-family: "Noto Sans KR", sans-serif;
      color: var(--white);
      font-size: clamp(12px, 1.667vw, 24px);
      font-style: normal;
      font-weight: normal;
      letter-spacing: -0.017em;
      white-space: break-spaces;
    }

    .bold-36 {
      font-family: "Noto Sans KR", sans-serif;
      color: var(--white);
      font-size: clamp(16px, 2.5vw, 36px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }
    
    .stencil-64 {
      font-family: "Atami", sans-serif;
      color: var(--white);
      font-size: clamp(36px, 4.44vw, 64px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }

    .normal-64 {
      font-family: "Noto Sans KR", sans-serif;
      color: var(--white);
      font-size: clamp(36px, 4.44vw, 64px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
      white-space: break-spaces;
    }
    
    .stencil-24 {
      font-family: "Atami", sans-serif;
      color: var(--white);
      font-size: clamp(12px, 1.667vw, 24px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }
    
    .stencil-title-24 {
      font-family: 'a Atmospheric', sans-serif;
      color: var(--white);
      font-size: clamp(12px, 0.2vh, 24px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: 0.068em;
    }
    
    .stencil-48 {
      font-family: "Atami", sans-serif;
      color: var(--white);
      font-size: clamp(24px, 3.333vw, 48px);
      font-style: normal;
      font-weight: bold;
      letter-spacing: -0.017em;
    }
    
    .stencil-128 {
      font-family: 'a Atmospheric', sans-serif;
      color: var(--white);
      font-size: clamp(48px, 8.89vw, 128px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: -0.017em;
    }
    
    .logo-128 {
      font-family: 'Sango', sans-serif;
      color: var(--white);
      font-size: clamp(48px, 5vw, 96px);
      font-style: normal;
      font-weight: normal;
      text-align: center;
      letter-spacing: -0.017em;
    }
  }
  
  @font-face {
    font-family: "Atami";
    font-style: auto;
    font-weight: normal;
    src: url("../assets/fonts/Atami-Regular.otf") format("opentype"),
    url("../assets/fonts/Atami-Regular.woff") format("woff"),
    url("../assets/fonts/Atami-Regular.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Atami";
    font-style: auto;
    font-weight: bold;
    src: url("../assets/fonts/Atami-Bold.otf") format("opentype"),
    url("../assets/fonts/Atami-Bold.woff") format("woff"),
    url("../assets/fonts/Atami-Bold.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Atami";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/Atami-Stencil.otf") format("opentype"),
    url("../assets/fonts/Atami-Stencil.woff") format("woff"),
    url("../assets/fonts/Atami-Stencil.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Atami";
    font-style: normal;
    font-weight: Bold;
    src: url("../assets/fonts/Atami-Stencil-Bold.otf") format("opentype"),
    url("../assets/fonts/Atami-Stencil-Bold.woff") format("woff"),
    url("../assets/fonts/Atami-Stencil-Bold.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "a Atmospheric";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/aAtmospheric.ttf") format("truetype"),
    url("../assets/fonts/aAtmospheric.woff") format("woff"),
    url("../assets/fonts/aAtmospheric.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/NotoSansKR-Regular.otf") format("opentype"),
    url("../assets/fonts/NotoSansKR-Regular.woff") format("woff"),
    url("../assets/fonts/NotoSansKR-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/Atami-Regular.otf") format("opentype"),
    url("../assets/fonts/Atami-Regular.woff") format("woff"),
    url("../assets/fonts/Atami-Regular.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: Bold;
    src: url("../assets/fonts/NotoSansKR-Bold.otf") format("opentype"),
    url("../assets/fonts/NotoSansKR-Bold.woff") format("woff"),
    url("../assets/fonts/NotoSansKR-Bold.woff2") format("woff2");
  }

  @font-face {
    font-family: "Atami";
    font-style: normal;
    font-weight: Bold;
    src: url("../assets/fonts/Atami-Bold.otf") format("opentype"),
    url("../assets/fonts/Atami-Bold.woff") format("woff"),
    url("../assets/fonts/Atami-Bold.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: "Sango";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/SangoUppercase-Static.otf") format("opentype"),
    url("../assets/fonts/SangoUppercase-Static.woff") format("woff"),
    url("../assets/fonts/SangoUppercase-Static.woff2") format("woff2");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />
};

export default GlobalStyle;