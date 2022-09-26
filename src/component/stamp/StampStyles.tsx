import styled from "@emotion/styled";

export const StampWrapper = styled.figure`
  position: relative;
  width: clamp(86px, 7.7vw, 148px);
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: wiggle 0.45s cubic-bezier(.36, .07, .19, .97) both;
  animation-delay: 3s;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  
  .svg-arrow {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg) translate(50%, 50%);
  }
  
  .bottom {
    top: 100%;
    left: 100%;
    transform: translate(-50%, -50%);
  }
  
  .hover-effect {
    display: inline-block;
    position: relative;
  }
  
  .hover-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: -0.45vmin;
    left: 0;
    border-radius: 1rem;
    background: var(--highlight);
    transform-origin: bottom right;
    transition: transform 0.32s ease-out;
    box-shadow: 0 2px 2px rgba(255, 255, 255, 0.3);
  }
  
  .hover-effect:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  @keyframes wiggle {
    10%, 90% {
      transform: translate3d(-1px, -2px, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 4px, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 6px, 0);
    }

    40%, 60% {
      transform: translate3d(4px, -6px, 0);
    }
  }
`;