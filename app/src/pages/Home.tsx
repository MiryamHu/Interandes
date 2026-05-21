import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import TradeSolutions from '../sections/TradeSolutions';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import type { Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    const savedLang = localStorage.getItem('lang');

    return savedLang === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      const hash = window.location.hash;

      if (hash) {
        const target = document.querySelector(hash);

        if (target) {
          const headerOffset = 120;
          const targetPosition =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <main className="bg-midnight min-h-screen">
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TradeSolutions lang={lang} />
      <Services lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}