import React, {useCallback, useEffect, useRef, useState} from 'react';
import { FillingLine, TransparentLine } from "./ProgressBarStyles";

interface Props {
  className?: string;
  color?: string;
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ className, color, progress }) => {
  // const [lineProgress, setLineProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const fillLine = useCallback(() => {
    // setLineProgress(progress);
    if (!ref.current) return;
    ref.current.style.minWidth = `${progress}%`;
    window.requestAnimationFrame(fillLine);
  }, [progress]);

  useEffect(() => {
    fillLine();
  }, [fillLine]);
  return (
    <TransparentLine className={ className } color={color}>
      <FillingLine color={color} ref={ref} />
    </TransparentLine>
  );
};

export default ProgressBar;