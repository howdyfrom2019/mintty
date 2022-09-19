import React, { CSSProperties } from 'react';
import { BlobButton } from "./buttonStyles";

export type btnType = "default" | "text";

interface Props {
  className?: string;
  children?: React.ReactNode;
  animation?: boolean;
  style?: CSSProperties;
  btnType?: btnType;
  onClick?: (e?: React.MouseEvent) => void;
}

const Button: React.FC<Props> = ({ className, children, animation, style, btnType, onClick }) => {
  return (
    <BlobButton onClick={onClick} className={className ? className : "stencil-24"} animation={animation} style={style} btnType={btnType || "default"}>
      <span>{children}</span>
    </BlobButton>
  )
};

export default Button;