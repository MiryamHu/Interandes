import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCountUp } from '../hooks/useCountUp';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type StatsProps = {
  lang: Lang;
};

type Stat = {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
};

function StatItem({
  stat,
  index,
  total,
}: {
  stat: Stat;
  index: number;
  total: number;
}) {
  const ref = useCountUp(stat.value, stat.suffix, stat.prefix);

  return (
    <div className="flex flex-col items-center text-center px-4 relative">
      <span ref={ref} className="text-stat text-amber">
        0{stat.suffix}
      </span>

      <span className="text-label text-light-grey mt-2">{stat.label}</span>

      {index < total - 1 && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[4vw] bg-grey/20" />
      )}
    </div>
  );
}

export default function Stats({ lang }: StatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = translations[lang].stats.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelector('.stats-row'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-[6vw]">
      <div className="content-max-width">
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={i}
              total={stats.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}