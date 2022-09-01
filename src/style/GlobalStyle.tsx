import React from 'react';
import { Global, css } from "@emotion/react";

const style = css`
  html {
    font-size: 16px;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  
`;

const GlobalStyle = () => {
  return <Global styles={style} />
};

export default GlobalStyle;