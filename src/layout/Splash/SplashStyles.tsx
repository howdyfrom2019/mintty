import styled from "@emotion/styled";

export const SplashWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
    //width: 35.33vw;
    height: 100vh;
  }
  
  & > img.side {
    filter: blur(1rem);
    margin: 1.5rem 0;
  }
  
  .left {
    transform: rotateY(180deg) translateX(98%);
  }
  
  .right {
    transform: rotateY(180deg) translateX(-98%);
  }
  
  .hidden {
    transition: all ease-out 0.62s;
    opacity: 0;
  }
`;

export const Tint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.62);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .bottomContainer {
    width: 720px;
    position: absolute;
    bottom: clamp(0px, 1.667vw, 24px);
  }
  
  .progressBar {
    margin: ${({ theme }) => {
      return `${theme.fontSizes.md} auto clamp(36px, 4.44vw, ${theme.fontSizes.xl}) auto`;
    }};
  }
  
  .IceBreaking {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(18px, 2.22vw, 32px);
    text-align: center;
  }
`;