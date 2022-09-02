import React, {useCallback, useEffect, useRef, useState} from 'react';

interface Props {
  className?: string;
  prefix?: string;
  suffix?: string;
  start?: number;
  end: number;
  callback?: (progress: number) => void;
  duration: number;
}

const CountUp: React.FC<Props> = (
  {
    className,
    prefix,
    suffix,
    start,
    end,
    callback,
    duration
  }) => {
  const [count, setCount] = useState(start ? start : 0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const increasingDuration = useRef(duration / (end - (start ? start : 0)));
  const increasingUnit = useRef((end - (start ? start : 0)) / duration);
  const currentCount = useRef(start ? start : 0);

  const easeOutQuad = useCallback((x: number): number => {
    return Math.sqrt(1 - Math.pow(x - 1, 3));
  }, []);

  const rise = useCallback(() => {
    const counter = setInterval(() => {
      const progress = currentCount.current / end - (start ? start : 0);
      const upVal = increasingUnit.current * Math.pow(easeOutQuad(progress), 2);
      currentCount.current += upVal === 0 ? 1 : (progress >= 0.96 ? upVal / (24 * progress) : upVal);
      setCurrentProgress(progress);

      if (currentCount.current + upVal >= end) {
        currentCount.current = end;
      }
      setCount(currentCount.current);
      if (progress >= 1) {
        clearInterval(counter);
      }
    }, increasingDuration.current * 1.2);
  }, [setCount, end, easeOutQuad, start]);

  useEffect(() => {
    if (currentCount.current < end) rise();
  }, [end, rise, count]);

  useEffect(() => {
    if (callback) {
      callback(currentProgress);
    }
  }, [callback, currentProgress]);

  return (
    <span className={className ? className : ""}>{prefix}{Math.floor(count)}{suffix}</span>
  )
}

export default CountUp;