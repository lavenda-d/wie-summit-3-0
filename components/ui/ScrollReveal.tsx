'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% visible
        rootMargin: '0px 0px -50px 0px', // trigger slightly before entering screen
      }
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

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-12';
      case 'down':
        return '-translate-y-12';
      case 'left':
        return 'translate-x-12';
      case 'right':
        return '-translate-x-12';
      default:
        return '';
    }
  };

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={style}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerInterval?: number; // time between item animations in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function StaggerReveal({
  children,
  className = '',
  staggerInterval = 100,
  direction = 'up',
}: StaggerRevealProps) {
  return (
    <>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return (
          <ScrollReveal
            key={idx}
            delay={idx * staggerInterval}
            direction={direction}
            className={className}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </>
  );
}
