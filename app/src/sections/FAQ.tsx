import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';
import { translations, type Lang } from '../translations';

gsap.registerPlugin(ScrollTrigger);

type FAQProps = {
    lang: Lang;
    };

    export default function FAQ({ lang }: FAQProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const t = translations[lang].faq;

    useEffect(() => {
        if (!sectionRef.current || !headerRef.current || !listRef.current) return;

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
            listRef.current!.querySelectorAll('.faq-item'),
            { opacity: 0, y: 30 },
            {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: listRef.current,
                start: 'top 90%',
                once: true,
            },
            }
        );
        }, sectionRef);

        return () => ctx.revert();
    }, [lang]);

    return (
        <section
        id="faq"
        ref={sectionRef}
        className="relative bg-midnight section-padding"
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
                className="text-body text-grey max-w-[42vw] mx-auto mt-6 reveal-item"
                style={{ minWidth: '280px' }}
            >
                {t.subtitle}
            </p>
            </div>

            <div ref={listRef} className="max-w-[900px] mx-auto space-y-4">
            {t.items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                <div
                    key={`${lang}-${index}`}
                    className="faq-item bg-teal/40 border border-amber/15 rounded-2xl overflow-hidden"
                >
                    <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 text-left px-6 py-5 lg:px-8 lg:py-6 hover:bg-amber/5 transition-colors"
                    >
                    <span className="text-[15px] md:text-[17px] text-light-grey font-semibold leading-snug">
                        {item.question}
                    </span>

                    <span className="flex-shrink-0 w-9 h-9 rounded-full border border-amber/40 flex items-center justify-center text-amber">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                    </button>

                    <div
                    className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                    >
                    <div className="overflow-hidden">
                        <p className="text-body text-grey leading-relaxed px-6 pb-6 lg:px-8 lg:pb-8">
                        {item.answer}
                        </p>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
    }