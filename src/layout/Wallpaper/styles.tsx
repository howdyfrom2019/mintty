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
  
  .transition-wrapper {
    position: relative;
  }
  
  .bottomUpAnimation {
    animation: bottom-up;
    animation-duration: 1.2s;
    animation-fill-mode: both;
  }

  .right-enter {
    transform: translateX(100%);
  }

  .right-enter-active {
    transform: translateX(0);
    transition: transform 300ms ease-in-out;
  }

  .right-exit {
    transform: translateX(0);
  }

  .right-exit-active {
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;
  }
  
  @keyframes zoom {
    from {
      opacity: 1;
      transform: scale(1);
      height: 100vh;
    }
    
    to {
      opacity: 0;
      transform: scale(1.2);
      height: auto;
    }
  }

  @keyframes bottom-up {
    from {
      margin-top: 50vh;
    }

    to {
      margin-top: 0;
    }
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  margin-top: 100vh;
  width: 100vw;
  height: ${({ progress }) => {
    return progress === 1 ? "calc(100vh + 64px)" : "auto";
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
    z-index: 96;
    width: 50vw;
    height: 100vh;
    //height: calc(100vh + 64px);
  }
  
  & > img.side {
    filter: blur(1rem);
    margin: -1.5rem -2rem;
    width: 33.33vw;
    height: 100vh;
    z-index: 95;
  }
  
  .left {
    transform: rotateY(180deg) translateX(98%);
  }
  
  .right {
    transform: rotateY(180deg) translateX(-98%);
  }
  
  .centerImageDivision {
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    
    .logoContainer {
      position: absolute;
      bottom: 50vh;
      width: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all ease-out 0.14s;

      & > svg {
        //position: absolute;
        //bottom: 50vh;
        z-index: 98;
        transform: translateY(5vh);
        transition: all ease-out 0.14s;
        //width: 55vh;
      }

      .logo-128 {
        z-index: 99;
        width: 45vh;
        position: absolute;
        transform: translateY(5vh);
        //bottom: 59vh;
      }
    }

    & > img.target {
      bottom: 0;
      transform: translateY(5vh);
      width: 37vh;
      height: auto;
      z-index: 98;
    }

    .stencil-title-24 {
      position: absolute;
      bottom: 43vh;
      transform-origin: center center;
      z-index: 100;
      white-space: pre-line;
    }
  }
  
  & > div.verticalLine {
    position: absolute;
    top: 25%;
    left: 3vw;
    z-index: 99;
    width: 40vh;
  }
`;

export const LeftNav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4.23vmin;
  margin: 4vw;
  transform: translateY(-50%);
  z-index: 99;
  
  & > a {
    text-decoration: none;
    border-radius: 1rem;
    padding: 0 12px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const RightNav = styled.aside`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  transform: translate(-4.3vw, -50%);
  margin-bottom: 2vw;
  gap: 4.23vmin;
  align-items: center;
  z-index: 99;
  
  & > div.flex-row {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    & > svg {
      cursor: pointer;
    }
  }
`;