import styled from "@emotion/styled";
import { btnType } from "./button";

interface Props {
  animation?: boolean;
  btnType?: btnType;
}

export const BlobButton = styled.button<Props>`
  padding: 28px 30px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  
  ${({ btnType }) => 
    (btnType === "default") &&  `
      border: 1px solid var(--white);
      border-radius: 0.25rem;
    `
  };
  
  ${({ animation }) => animation && `
    :hover {
      transition: all .14s ease-out;
      transform: translate(-0.25rem,-0.25rem);
      box-shadow: 0.25rem 0.25rem var(--highlight);
    }
  `};
  
  & > span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;