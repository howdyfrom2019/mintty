import styled from "@emotion/styled";

interface Props {
  hlcolor?: string;
}

export const QuoteWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  width: 100%;
  color: var(--white);
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 24px;
  
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: 1rem;
    background: var(--highlight);
  }
`;