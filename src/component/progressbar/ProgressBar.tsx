import React, {useCallback, useEffect, useState} from 'react';
import { FillingLine, TransparentLine } from "./ProgressBarStyles";

interface Props {
  className?: string;
  color?: string;
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ className, color, progress }) => {
  const [lineProgress, setLineProgress] = useState(0);

  const fillLine = useCallback(() => {
    setLineProgress(progress);
  }, [progress, lineProgress]);

  useEffect(() => {
    fillLine();
  }, [progress]);
  return (
    <TransparentLine className={ className } color={color}>
      <FillingLine color={color} progress={lineProgress} />
    </TransparentLine>
  );
};

export default ProgressBar;