import styled from "@emotion/styled";

export const BlobButton = styled.button<{ animation?: boolean }>`
  padding: 28px 30px;
  background: transparent;
  border: 1px solid var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  transition: all .14s ease-out;
  
  ${({ animation }) => `
    :hover {
      transform: translate(-0.25rem,-0.25rem);
      box-shadow: 0.25rem 0.25rem var(--highlight);
    }
  `};
`;