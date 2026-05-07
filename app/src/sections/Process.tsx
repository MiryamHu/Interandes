import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type ProcessProps = {
  lang: Lang;
};

export default function Process({ lang }: ProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const t = translations[lang].process;
  const steps = t.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current!.querySelectorAll('.reveal-item'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Steps reveal
      const stepEls = stepsRef.current!.querySelectorAll('.process-step');

      stepEls.forEach((el, i) => {
        const isLeft = i % 2 === 0;

        gsap.fromTo(
          el,
          { opacity: 0, x: isLeft ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Line draw animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative section-padding"
      style={{
        background:
          'linear-gradient(180deg, #010812 0%, #0a1628 50%, #010812 100%)',
      }}
    >
      <div className="content-max-width">
        <div ref={headerRef} className="mb-[4vw] text-center">
          <p className="text-label text-amber uppercase tracking-[0.15em] mb-4 reveal-item">
            {t.overline}
          </p>

          <h2 className="text-heading-2 text-light-grey uppercase reveal-item">
            {t.title}
          </h2>

          <p
            className="text-body text-grey max-w-[40vw] mx-auto mt-6 reveal-item"
            style={{ minWidth: '280px' }}
          >
            {t.subtitle}
          </p>
        </div>

        <div ref={stepsRef} className="relative max-w-[900px] mx-auto">
          {/* Vertical line - desktop center, mobile left */}
          <div
            ref={lineRef}
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-amber -translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`process-step relative flex items-start gap-6 lg:gap-0 opacity-0 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-amber bg-midnight flex items-center justify-center ml-2 lg:ml-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <span className="text-label text-amber">
                      {step.number}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`bg-teal/30 rounded-xl p-6 lg:p-8 lg:w-[45%] ${
                      isLeft ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                    }`}
                    style={{ marginLeft: '4rem', marginRight: 0 }}
                  >
                    <h3 className="text-heading-3 text-light-grey uppercase mb-3">
                      {step.title}
                    </h3>

                    <p className="text-body text-grey">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}