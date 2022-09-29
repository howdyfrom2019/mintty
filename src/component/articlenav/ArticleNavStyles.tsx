import styled from "@emotion/styled";

interface BorderProps {
  hlColor?: string;
  glowEffect?: boolean;
}
export const ArticleNavDivider = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 42px;
  
  & > a {
    text-decoration: none;
    padding: 0 24px;
  }
  
  .blur {
    color: rgba(255, 255, 255, 0.66);
  }
`;

export const BorderLine = styled.div<BorderProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4px;
  border-radius: 1rem;
  background: ${({ hlColor}) => hlColor ? hlColor : `var(--highlight)`};
  filter: drop-shadow(0, 0, 12px, #88D2E0);
  
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.3);
  }
`;