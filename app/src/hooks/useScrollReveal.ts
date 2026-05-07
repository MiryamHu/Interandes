import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    delay?: number;
    childSelector?: string;
  }
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || triggeredRef.current) return;
    const container = containerRef.current;
    const childSelector = options?.childSelector;
    const targets = childSelector
      ? container.querySelectorAll(childSelector)
      : container.querySelectorAll(selector);

    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options?.y ?? 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.6,
          stagger: options?.stagger ?? 0.1,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          delay: options?.delay ?? 0,
          scrollTrigger: {
            trigger: container,
            start: options?.start ?? 'top 85%',
            once: true,
          },
        }
      );
    }, container);

    triggeredRef.current = true;

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
}
