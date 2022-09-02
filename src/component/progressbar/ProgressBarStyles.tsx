import styled from "@emotion/styled";

export const TransparentLine = styled.div<{ color?: string}>`
  width: 100%;
  height: 10px;
  position: relative;
  background: ${({ color }) => color ? color : "rgba(255, 255, 255, 0.2)"};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FillingLine = styled.div<{ color?: string, progress: number }>`
  position: absolute;
  height: 10px;
  top: 0;
  left: 0;
  //transform: translate(0, -50%);
  min-width: ${({ progress }) => `${ progress }%`};
  transition: min-width ease-out 0.14s;
  background: ${({ color }) => color ? color : "var(--white)"};
  border-radius: 1rem;
`;