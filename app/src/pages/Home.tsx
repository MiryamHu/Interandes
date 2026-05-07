import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Stats from '../sections/Stats';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import type { Lang } from '../translations';
import About from './About';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <main className="bg-midnight min-h-screen">
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Stats lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}