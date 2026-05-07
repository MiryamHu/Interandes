import { useEffect, useRef, useCallback, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ClipboardCheck,
  ShieldCheck,
  Globe,
  Handshake,
  Link2,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type ServicesProps = {
  lang: Lang;
};

type Service = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

const serviceIcons: LucideIcon[] = [
  ClipboardCheck,
  ShieldCheck,
  Globe,
  Handshake,
  Link2,
  GraduationCap,
];

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !innerRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    innerRef.current.style.transform = `rotateX(${y * -15}deg) rotateY(${
      x * 15
    }deg) translateZ(30px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!innerRef.current) return;

    innerRef.current.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className="card-3d opacity-0 translate-y-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        ref={innerRef}
        className="card-3d-inner bg-teal/60 border border-amber/15 rounded-2xl p-[3vw] md:p-8 h-full"
      >
        <div className="flex items-start justify-between mb-6">
          <Icon className="w-12 h-12 text-amber" strokeWidth={1.5} />
          <span className="text-label text-grey/50">{service.number}</span>
        </div>

        <h3 className="text-heading-3 text-light-grey uppercase mb-4">
          {service.title}
        </h3>

        <p className="text-body text-grey leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services({ lang }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const t = translations[lang].services;

  const services: Service[] = t.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index] ?? ClipboardCheck,
  }));

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

      // Cards staggered reveal
      gsap.fromTo(
        cardsRef.current!.querySelectorAll('.card-3d'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="servicios"
      ref={sectionRef}
      className="relative bg-midnight section-padding"
    >
      <div className="content-max-width">
        <div ref={headerRef} className="mb-[4vw]">
          <p className="text-label text-amber uppercase tracking-[0.15em] mb-4 reveal-item">
            {t.overline}
          </p>

          <h2
            className="text-heading-2 text-light-grey uppercase max-w-[50vw] reveal-item"
            style={{ minWidth: '300px' }}
          >
            {t.title}
          </h2>

          <p
            className="text-body text-grey max-w-[35vw] mt-8 reveal-item"
            style={{ minWidth: '280px' }}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}