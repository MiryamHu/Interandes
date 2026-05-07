import { useEffect, useRef, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type CTAProps = {
  lang: Lang;
};

export default function CTA({ lang }: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const t = translations[lang].cta;
  const email = 'angelahuamani@interandes.com.pe';

  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    t.emailSubject
  )}`;

  const whatsappHref =
    'https://wa.me/51976719704?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.querySelectorAll('.reveal-item'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = mailHref;
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-[10vw]"
      style={{
        background:
          'radial-gradient(circle at center, rgba(19,67,87,0.6) 0%, #010812 70%)',
      }}
    >
      <div
        ref={contentRef}
        className="content-max-width flex flex-col items-center text-center px-[5vw]"
      >
        <h2
          className="text-heading-2 text-light-grey uppercase max-w-[50vw] reveal-item"
          style={{ minWidth: '300px' }}
        >
          {t.title}
        </h2>

        <p
          className="text-body text-grey max-w-[40vw] mt-6 reveal-item"
          style={{ minWidth: '280px' }}
        >
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 reveal-item">
          <a
            href={mailHref}
            onClick={handleEmailClick}
            className="bg-amber text-midnight px-10 py-4 rounded-lg text-label font-semibold hover:bg-[#e0c16a] hover:scale-[1.03] transition-all duration-300 hover:shadow-glow animate-pulse-cta inline-block"
          >
            {t.emailButton}
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber text-amber px-10 py-4 rounded-lg text-label font-semibold hover:bg-amber/10 hover:scale-[1.03] transition-all duration-300 hover:shadow-glow animate-pulse-cta inline-block"
          >
            {t.whatsappButton}
          </a>
        </div>

        <p className="text-label text-grey/70 mt-8 reveal-item">
          {email} · {t.location}
        </p>
      </div>
    </section>
  );
}