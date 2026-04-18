'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedProgressBar({ value }) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = wrapperRef.current;

    if (!currentElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="progress" ref={wrapperRef}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          width: isVisible ? `${value}%` : '0%',
          transition: 'width 1s ease'
        }}
      />
    </div>
  );
}
