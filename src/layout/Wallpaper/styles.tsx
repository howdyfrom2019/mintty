/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
interface ImageContainerProps {
  width: number;
  height?: number;
  progress: number
}
export const WallpaperLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100vw;
  height: ${({ progress }) => {
    return progress === 1 ? "250vh" : "auto";
  }};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  transform-origin: top center;
  user-select: none;
  
  ::after {
    content: "";
    display: block;
    clear: both;
  }
  
  & > img {
    position: absolute;
    display: block;
    object-fit: cover;
    margin: 0 auto;
    height: 250vh;
  }
  
  & > img.side {
    filter: blur(1rem);
    margin: -1.5rem -2rem;
  }
  
  .left {
    transform: rotateY(180deg) translateX(98%);
  }
  
  .right {
    transform: rotateY(180deg) translateX(-98%);
  }
  
  & > img.target {
    bottom: 0;
    //left: 50%;
  }
`;