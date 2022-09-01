import React from 'react';
import { BlobButton } from "./buttonStyles";

interface Props {
  content: string;
  animation?: boolean;
}

const Button: React.FC<Props> = ({ content, animation }) => {
  return (
    <BlobButton animation={animation}>
      <span className={"stencil-24"}>{content}</span>
    </BlobButton>
  )
};

export default Button;