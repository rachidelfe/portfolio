'use client';

import { useEffect, useRef } from 'react';

export default function TypedText({ strings }) {
  const elementRef = useRef(null);

  useEffect(() => {
    let typedInstance;

    async function initTyped() {
      const Typed = (await import('typed.js')).default;

      if (!elementRef.current) {
        return;
      }

      typedInstance = new Typed(elementRef.current, {
        strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    initTyped();

    return () => {
      typedInstance?.destroy();
    };
  }, [strings]);

  return <span ref={elementRef} className="typed" />;
}
