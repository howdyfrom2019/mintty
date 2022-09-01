/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const WallpaperLayout = styled.div`
  width: 100%;
  
  & > div.content {
    display: flex;
    max-width: var(--desktop-content);
    width: 75%;
    margin: 0 auto;
  }
`;