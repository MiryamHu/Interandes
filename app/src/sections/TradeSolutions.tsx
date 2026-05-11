import { useEffect, useRef, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Search,
    FileCheck,
    Truck,
    Globe2,
    ShieldCheck,
    Handshake,
    PackageCheck,
    TrendingUp,
    XCircle,
    CheckCircle2,
    type LucideIcon,
    } from 'lucide-react';
    import { translations, type Lang } from '../translations';

    gsap.registerPlugin(ScrollTrigger);

    type TradeSolutionsProps = {
    lang: Lang;
    };

    const exportIcons: LucideIcon[] = [Search, Handshake, FileCheck, Truck];

    const importIcons: LucideIcon[] = [
    ShieldCheck,
    FileCheck,
    Handshake,
    PackageCheck,
    ];

    export default function TradeSolutions({ lang }: TradeSolutionsProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const t = translations[lang].tradeSolutions;

    useEffect(() => {
        const ctx = gsap.context(() => {
        gsap.fromTo(
            headerRef.current!.querySelectorAll('.reveal-item'),
            { opacity: 0, y: 40 },
            {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
                once: true,
            },
            }
        );

        gsap.fromTo(
            cardsRef.current!.querySelectorAll('.trade-card'),
            { opacity: 0, y: 40 },
            {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
                once: true,
            },
            }
        );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const target = document.querySelector('#contacto');

        if (target) {
        const headerOffset = 90;
        const targetPosition =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });

        window.history.pushState(null, '', '#contacto');
        }
    };

    return (
        <section
        id="soluciones"
        ref={sectionRef}
        className="relative bg-black section-padding overflow-hidden"
        >
        <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-[45vw] h-[45vw] bg-amber/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] bg-teal/30 rounded-full blur-[120px]" />
        </div>

        <div className="content-max-width relative z-10">
            <div ref={headerRef} className="mb-[5vw] text-center">
            <p className="text-label text-amber uppercase tracking-[0.15em] mb-4 reveal-item">
                {t.overline}
            </p>

            <h2
                className="text-heading-2 text-light-grey uppercase max-w-[65vw] mx-auto reveal-item"
                style={{ minWidth: '300px' }}
            >
                {t.title}
            </h2>

            <p
                className="text-body text-grey max-w-[45vw] mx-auto mt-6 reveal-item"
                style={{ minWidth: '280px' }}
            >
                {t.subtitle}
            </p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exportación */}
            <article className="trade-card opacity-0 relative bg-midnight/90 border border-amber/20 rounded-2xl overflow-hidden shadow-xl">
                <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
                style={{
                    backgroundImage: "url('/images/exportacion-portuaria.png')",
                }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-midnight/92 to-black/98" />

                <div className="relative z-10 p-8 lg:p-10">
                <p className="text-label text-amber uppercase tracking-[0.2em] mb-5">
                    {t.exportCard.overline}
                </p>

                <h3 className="text-heading-2 text-light-grey uppercase mb-5">
                    {t.exportCard.title}
                </h3>

                <p className="text-body text-grey mb-8">
                    {t.exportCard.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {t.exportCard.steps.map((step, index) => {
                    const Icon = exportIcons[index] ?? Globe2;

                    return (
                        <div
                        key={step.title}
                        className="bg-black/85 border border-amber/15 rounded-xl p-4"
                        >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-amber/15 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-amber" />
                            </div>

                            <span className="text-label text-amber">
                            {step.number}
                            </span>
                        </div>

                        <h4 className="text-label text-light-grey uppercase mb-2">
                            {step.title}
                        </h4>

                        <p className="text-sm text-grey leading-relaxed">
                            {step.description}
                        </p>
                        </div>
                    );
                    })}
                </div>

                <div className="bg-red-950/85 border border-red-500/25 rounded-xl p-5 mb-5">
                    <p className="text-label text-red-300 uppercase tracking-[0.15em] mb-4">
                    {t.exportCard.problemsTitle}
                    </p>

                    <ul className="space-y-2">
                    {t.exportCard.problems.map((item) => (
                        <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-grey"
                        >
                        <XCircle className="w-4 h-4 text-red-300 mt-[2px] flex-shrink-0" />
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="bg-black/85 border border-amber/25 rounded-xl p-5">
                    <p className="text-label text-amber uppercase tracking-[0.15em] mb-4">
                    {t.exportCard.solutionsTitle}
                    </p>

                    <ul className="space-y-2">
                    {t.exportCard.solutions.map((item) => (
                        <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-light-grey"
                        >
                        <CheckCircle2 className="w-4 h-4 text-amber mt-[2px] flex-shrink-0" />
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </article>

            {/* Importación */}
            <article className="trade-card opacity-0 relative bg-teal/70 border border-blue-400/20 rounded-2xl overflow-hidden shadow-xl">
                <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
                style={{
                    backgroundImage: "url('/images/importacion-logistica.png')",
                }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-teal/92 to-black/98" />

                <div className="relative z-10 p-8 lg:p-10">
                <p className="text-label text-blue-300 uppercase tracking-[0.2em] mb-5">
                    {t.importCard.overline}
                </p>

                <h3 className="text-heading-2 text-light-grey uppercase mb-5">
                    {t.importCard.title}
                </h3>

                <p className="text-body text-grey mb-8">
                    {t.importCard.subtitle}
                </p>

                <div className="bg-red-950/85 border border-red-500/25 rounded-xl p-5 mb-5">
                    <p className="text-label text-red-300 uppercase tracking-[0.15em] mb-4">
                    {t.importCard.problemsTitle}
                    </p>

                    <ul className="space-y-2">
                    {t.importCard.problems.map((item) => (
                        <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-grey"
                        >
                        <XCircle className="w-4 h-4 text-red-300 mt-[2px] flex-shrink-0" />
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="bg-black/85 border border-blue-400/25 rounded-xl p-5 mb-8">
                    <p className="text-label text-blue-300 uppercase tracking-[0.15em] mb-4">
                    {t.importCard.solutionsTitle}
                    </p>

                    <div className="space-y-4">
                    {t.importCard.solutions.map((item, index) => {
                        const Icon = importIcons[index] ?? CheckCircle2;

                        return (
                        <div key={item.title} className="flex gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-300" />
                            </div>

                            <div>
                            <h4 className="text-label text-light-grey uppercase">
                                {item.title}
                            </h4>

                            <p className="text-sm text-grey mt-1">
                                {item.description}
                            </p>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {t.importCard.stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-black/90 border border-grey/15 rounded-xl p-4 text-center"
                    >
                        <p className="text-heading-3 text-amber">{stat.value}</p>

                        <p className="text-label text-grey mt-1 uppercase">
                        {stat.label}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
            </article>
            </div>

            <div className="mt-10 bg-black/60 border border-amber/20 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
                <p className="text-label text-amber uppercase tracking-[0.15em] mb-3">
                {t.bottom.overline}
                </p>

                <p className="text-heading-3 text-light-grey">
                {t.bottom.title}{' '}
                <span className="text-amber">{t.bottom.highlight}</span>
                </p>
            </div>

            <a
                href="#contacto"
                onClick={handleContactClick}
                className="bg-amber text-midnight px-8 py-4 rounded-lg text-label font-semibold hover:bg-[#e0c16a] hover:scale-[1.03] transition-all duration-300 hover:shadow-glow inline-flex items-center gap-2"
            >
                <TrendingUp className="w-5 h-5" />
                {t.bottom.button}
            </a>
            </div>
        </div>
        </section>
    );
    }