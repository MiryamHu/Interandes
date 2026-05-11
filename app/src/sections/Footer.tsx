import { useEffect, useRef, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, MessageCircle, Instagram } from 'lucide-react';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  const t = translations[lang].footer;
  const serviceLinks = t.serviceLinks;
  const companyLinks = t.companyLinks;

  const email = 'angelahuamani@interandes.com.pe';
  const phoneDisplay = '+51 976 719 704';

  const whatsappHref =
    'https://wa.me/51976719704?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios';

  const instagramHref = 'https://www.instagram.com/interandes_trading_sac?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

  const linkedinHref = 'https://www.linkedin.com/in/angela-huamani-mallque-b72880125/';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-black">
      <div className="content-max-width py-[6vw] px-[5vw] lg:px-[6vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <p className="text-[clamp(16px,1.2vw,20px)] font-bold text-light-grey tracking-wide">
              INTERANDES
            </p>

            <p className="text-label text-amber mb-4">TRADING SAC</p>

            <p className="text-body text-grey text-sm">{t.location}</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-label text-light-grey uppercase mb-4">
              {t.servicesTitle}
            </p>

            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <span className="text-body text-grey text-sm hover:text-amber hover:translate-x-1 transition-all duration-300 inline-block cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-label text-light-grey uppercase mb-4">
              {t.companyTitle}
            </p>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-body text-grey text-sm hover:text-amber hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label text-light-grey uppercase mb-4">
              {t.contactTitle}
            </p>

            <a
              href={`mailto:${email}`}
              className="text-body text-light-grey text-sm mb-2 block hover:text-amber transition-colors"
            >
              {email}
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-grey text-sm mb-4 block hover:text-amber transition-colors"
            >
              {phoneDisplay}
            </a>

            <div className="flex items-center gap-4">
              <a
                href={linkedinHref}
                className="text-amber hover:text-[#e0c16a] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>

              <a
                href={instagramHref}
                className="text-amber hover:text-[#e0c16a] transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>

              <a
                href={whatsappHref}
                className="text-amber hover:text-[#e0c16a] transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey/15">
        <div className="content-max-width px-[5vw] lg:px-[6vw] py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-label text-grey/50 text-xs">
            © 2024 INTERANDES TRADING SAC. {t.rights}
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="/privacy"
              className="text-label text-grey/50 hover:text-grey transition-colors"
            >
              {t.privacy}
            </a>

            <a
              href="/terms"
              className="text-label text-grey/50 hover:text-grey transition-colors"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}