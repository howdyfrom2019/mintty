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
  
  .zoomAnimation {
    animation-name: zoom;
    animation-duration: 1s;
    animation-fill-mode: both;
    transition: all ease-out 1s;
  }
  
  @keyframes scroll-up {
    from {
      opacity: 1;
      transform: scale(1);
    }
    
    to {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100vw;
  height: ${({ progress }) => {
    return progress === 1 ? "150vh" : "auto";
  }};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
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
    height: 150vh;
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
  
  & > svg {
    position: absolute;
    bottom: 44vh;
    left: 50%;
    transform: translate(-50%);
    z-index: 97;
  }
  
  & > img.target {
    bottom: 0;
    width: 37vh;
    height: auto;
    z-index: 99;
  }
  
  .logo-128 {
    z-index: 99;
    position: absolute;
    bottom: 50vh;
    left: 49vw;
  }
`;