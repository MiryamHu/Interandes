import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { translations, type Lang } from '../translations';

type NavigationProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Navigation({ lang, setLang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const t = translations[lang].nav;

  const navLinks = [
    { label: t.solutions, href: '/#soluciones' },
    { label: t.services, href: '/#servicios' },
    { label: t.process, href: '/#proceso' },
    { label: t.testimonials, href: '/#testimonios' },
    { label: t.about, href: '/about' },
    { label: t.contact, href: '/#contacto' },
  ];

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);

    const headerOffset = 90;

    const scrollToTarget = (hash: string) => {
      const target = document.querySelector(hash);

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', hash);
      }
    };

    if (href === '/about' || href === '/privacy' || href === '/terms') {
      return;
    }

    if (href.startsWith('/#')) {
      e.preventDefault();

      const hash = href.replace('/', '');

      if (window.location.pathname !== '/') {
        window.location.assign(href);
        return;
      }

      scrollToTarget(hash);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToTarget(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${
          scrolled
            ? 'bg-midnight/90 backdrop-blur-[12px]'
            : 'bg-midnight/35 backdrop-blur-[8px]'
        }`}
      >
        <div className="flex items-center justify-between px-[5vw] lg:px-[6vw] h-[96px]">
          <a href="/" className="flex items-center overflow-visible">
            <img
              src="/images/logo-interandes-2.png"
              alt="Interandes Trading"
              className="h-[74px] w-auto object-contain scale-[1.35] origin-left"
            />
          </a>

          {/* Menú escritorio */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-nav text-light-grey hover:text-amber transition-colors duration-300 relative group uppercase"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Botones escritorio */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="border border-amber text-amber px-4 py-2 rounded-lg text-label font-semibold hover:bg-amber hover:text-midnight transition-all duration-300"
            >
              {t.languageButton}
            </button>

            <a
              href="/#contacto"
              onClick={(e) => handleNavClick(e, '/#contacto')}
              className="inline-block bg-amber text-midnight px-7 py-3 rounded-lg text-label font-semibold hover:bg-[#e0c16a] hover:scale-[1.02] transition-all duration-300"
            >
              {t.cta}
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-light-grey hover:text-amber transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-midnight flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-heading-3 text-light-grey hover:text-amber transition-colors uppercase"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="border border-amber text-amber px-6 py-3 rounded-lg text-label font-semibold uppercase"
          >
            {t.languageButton}
          </button>

          <a
            href="/#contacto"
            onClick={(e) => handleNavClick(e, '/#contacto')}
            className="mt-4 bg-amber text-midnight px-8 py-4 rounded-lg text-label font-semibold uppercase"
          >
            {t.cta}
          </a>
        </div>
      )}
    </>
  );
}