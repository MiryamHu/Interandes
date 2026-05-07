import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type TestimonialsProps = {
  lang: Lang;
};

export default function Testimonials({ lang }: TestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const t = translations[lang].testimonials;
  const testimonials = t.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        carouselRef.current!.querySelectorAll('.testimonial-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative bg-teal section-padding"
    >
      <div className="content-max-width">
        <div ref={headerRef} className="mb-[4vw] text-center">
          <p className="text-label text-amber uppercase tracking-[0.15em] mb-4 reveal-item">
            {t.overline}
          </p>

          <h2 className="text-heading-2 text-light-grey uppercase reveal-item">
            {t.title}
          </h2>
        </div>

        <div
          ref={carouselRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="testimonial-card bg-midnight/70 border border-amber/20 rounded-2xl p-[2.5vw] md:p-8 flex flex-col opacity-0"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber fill-amber" />
                ))}
              </div>

              <blockquote className="text-body text-light-grey italic mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-auto">
                <p className="text-label text-amber font-semibold">
                  {testimonial.author}
                </p>

                <p className="text-sm text-grey mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}