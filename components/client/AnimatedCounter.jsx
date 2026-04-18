'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({
  start = 0,
  end,
  duration = 1000,
  className = '',
  suffix = ''
}) {
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement || hasAnimated) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const animationStart = performance.now();

        setHasAnimated(true);

        function tick(currentTime) {
          const progress = Math.min((currentTime - animationStart) / duration, 1);
          const nextValue = Math.round(start + ((end - start) * progress));

          setValue(nextValue);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [duration, end, hasAnimated, start]);

  return (
    <span ref={elementRef} className={className}>
      {value}
      {suffix}
    </span>
  );
}
