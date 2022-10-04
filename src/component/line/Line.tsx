import React, { CSSProperties } from 'react';
import {Blur, LineBody, LineWrapper} from "./styles";

interface Props {
  className?: string;
  height?: number;
  style?: CSSProperties;
  glowEffect?: boolean;
  color?: string;
  isVertical?: boolean;
}

const Line: React.FC<Props> = (
  {
    height,
    className,
    style,
    glowEffect,
    color,
    isVertical
  }) => {
  return (
    <LineWrapper className={className}>
      <LineBody isVertical={isVertical} style={style} color={color} height={height} />
      {glowEffect && <Blur isVertical={isVertical} style={style} color={color} />}
    </LineWrapper>
  )
}

export default Line;