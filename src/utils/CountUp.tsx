import React, {useCallback, useEffect, useRef, useState} from 'react';

interface Props {
  className?: string;
  prefix?: string;
  suffix?: string;
  start?: number;
  end: number;
  easingFn?: (x: number) => number;
  duration: number;
}

const CountUp: React.FC<Props> = (
  {
    className,
    prefix,
    suffix,
    start,
    end,
    easingFn,
    duration
  }) => {
  const [count, setCount] = useState(start ? start : 0);
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
      currentCount.current += upVal === 0 ? 1 : (progress >= 0.93 ? upVal / (100 * progress) : upVal);
      if (currentCount.current + upVal >= end - 1) {
        currentCount.current = end;
        clearInterval(counter);
      }
      setCount(currentCount.current);
      if (progress >= 1) {
        clearInterval(counter);
      }
    }, increasingDuration.current * 1.5);
  }, [count, setCount, end]);

  useEffect(() => {
    if (currentCount.current < end) rise();
  }, [currentCount.current, rise, count]);

  return (
    <span className={className ? className : ""}>{prefix}{Math.floor(count)}{suffix}</span>
  )
}

export default CountUp;