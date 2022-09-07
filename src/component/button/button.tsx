import React, { CSSProperties } from 'react';
import { BlobButton } from "./buttonStyles";

export type btnType = "default" | "text";

interface Props {
  className?: string;
  content: string;
  animation?: boolean;
  style?: CSSProperties;
  btnType?: btnType;
}

const Button: React.FC<Props> = ({ className, content, animation, style, btnType }) => {
  return (
    <BlobButton className={className ? className : "stencil-24"} animation={animation} style={style}>
      <span>{content}</span>
    </BlobButton>
  )
};

export default Button;