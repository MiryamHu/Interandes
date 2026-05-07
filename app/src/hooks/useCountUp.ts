import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCountUp(
  endValue: number,
  suffix: string = '',
  prefix: string = ''
) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const ctx = gsap.context(() => {
      const obj = { value: 0 };
      ScrollTrigger.create({
        trigger: ref.current!,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          setHasAnimated(true);
          gsap.to(obj, {
            value: endValue,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (ref.current) {
                const isDecimal = endValue % 1 !== 0;
                const display = isDecimal
                  ? obj.value.toFixed(1)
                  : Math.round(obj.value).toString();
                ref.current.textContent = `${prefix}${display}${suffix}`;
              }
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [endValue, suffix, prefix, hasAnimated]);

  return ref;
}
