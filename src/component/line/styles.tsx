import styled from "@emotion/styled";

interface LineProps {
  isVertical?: boolean;
  color?: string;
  height?: number;
}

export const LineWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const LineBody = styled.span<LineProps>`
  width: 100%;
  ${({ height }) => `
    height: ${height ? height : 4}px; 
  `}
  border-radius: 1rem;
  filter: drop-shadow(0, 0, 12px, var(--highlight));
  transform-origin: left top;
  ${(props) => props.isVertical && (
    `transform: rotate(90deg)`
  )};
  background-color: ${({ color }) => color ? color : `var(--white)`};
`;

export const Blur = styled(LineBody)`
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(2px);
`;