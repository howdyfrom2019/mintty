import React, { useState, useCallback, useEffect } from 'react';

const useMouseInteractive = (
  target:  React.RefObject<HTMLElement | SVGSVGElement>,
  targetsOffset: number,
  originCenter?: boolean,
  speed = 0.01,
) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);

  const makeAnimationWork = useCallback(() => {
      if (!target.current) return;
      if (originCenter) {
        target.current.style.transform = `translate(calc(-50% + ${-(targetX) / targetsOffset}px), calc(-50% + ${-(targetY) / targetsOffset}px))`;
      } else {
        target.current.style.transform = `translate(${-(targetX) / targetsOffset}px, ${-(targetY) / targetsOffset}px)`;
      }

    window.requestAnimationFrame(makeAnimationWork);
  }, [target, targetX, targetY, targetsOffset]);

  const mouseSpeedHandler = useCallback((e: MouseEvent) => {
    setX(e.clientX - window.innerWidth / 2);
    setY(e.clientY - window.innerHeight / 2);
    setTargetX((prev) => prev + (x - prev) * speed);
    setTargetY((prev) => prev + (y - prev) * speed);
    makeAnimationWork();
  }, [setX, setY, x, y, makeAnimationWork, speed]);

  useEffect(() => {
    window.addEventListener("mousemove", mouseSpeedHandler, false);
    return () => {
      window.removeEventListener("mousemove", mouseSpeedHandler, false);
    }
  }, [mouseSpeedHandler]);
}

export default useMouseInteractive;