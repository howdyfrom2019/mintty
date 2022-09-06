import React, { CSSProperties } from 'react';
import {Blur, LineBody, LineWrapper} from "./styles";

interface Props {
  className?: string;
  style?: CSSProperties;
  glowEffect?: boolean;
  color?: string;
  isVertical?: boolean;
}

const Line: React.FC<Props> = (
  {
    className,
    style,
    glowEffect,
    color,
    isVertical
  }) => {
  return (
    <LineWrapper className={className}>
      <LineBody isVertical={isVertical} style={style} color={color} />
      {glowEffect && <Blur isVertical={isVertical} style={style} color={color} />}
    </LineWrapper>
  )
}

export default Line;