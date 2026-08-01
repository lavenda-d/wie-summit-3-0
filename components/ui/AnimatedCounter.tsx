'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "500+", "50+", "100%", "20+"
  duration?: number; // total duration in ms
  className?: string;
}

export function AnimatedCounter({ value, duration = 1500, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Parse digits and suffix (e.g., "500+" -> number: 500, suffix: "+")
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function outQuad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * targetNumber);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, targetNumber, duration]);

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  );
}
