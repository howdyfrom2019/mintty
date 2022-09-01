/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const WallpaperLayout = styled.div`
  color: ${({ theme }) => {
    console.log(theme);
    return theme.colors.black;
  }};
`;