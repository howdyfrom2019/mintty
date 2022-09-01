import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: {
      xs: string,
      sm: string,
      base: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
      xxxl: string,
    },
    colors: {
      black: string,
      white: string,
      primary: string,
      secondary: string,
    }
  }
}