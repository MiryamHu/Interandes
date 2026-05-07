import { useEffect, useRef, useState, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const t = translations[lang].hero;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Load sequence
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(overlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to(
          subRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to(scrollIndicatorRef.current, { opacity: 1, duration: 0.4 }, '-=0.2');

      // Parallax on image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: '-15%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Hide scroll indicator after scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100',
        onLeave: () => setShowScrollIndicator(false),
        onEnterBack: () => setShowScrollIndicator(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          className="absolute inset-[-10%] w-[120%] h-[120%] animate-ken-burns"
        >
          <img
            src="/images/img1.jpg"
            alt={t.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(1,8,18,0.4) 0%, rgba(1,8,18,0.85) 100%)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay z-[1]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-[5vw] max-w-[60vw] lg:max-w-[50vw]">
        <p
          ref={overlineRef}
          className="text-label text-amber uppercase tracking-[0.15em] mb-6 opacity-0 translate-y-5"
        >
          {t.overline}
        </p>

        <h1
          ref={headlineRef}
          className="text-display-1 text-light-grey uppercase opacity-0 translate-y-5"
        >
          {t.title}
        </h1>

        <p
          ref={subRef}
          className="text-body text-grey mt-8 max-w-[40vw] opacity-0 translate-y-5"
          style={{ minWidth: '280px' }}
        >
          {t.subtitle}
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 opacity-0 translate-y-5"
        >
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="bg-amber text-midnight px-7 py-3 rounded-lg text-label font-semibold hover:bg-[#e0c16a] hover:scale-[1.02] transition-all duration-300"
          >
            {t.primaryButton}
          </a>

          <a
            href="#servicios"
            onClick={(e) => handleNavClick(e, '#servicios')}
            className="border border-amber text-amber px-7 py-3 rounded-lg text-label font-medium hover:bg-amber/10 transition-all duration-300"
          >
            {t.secondaryButton}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="animate-bounce-subtle">
          <ChevronDown className="text-amber w-6 h-6" />
        </div>
      </div>
    </section>
  );
}