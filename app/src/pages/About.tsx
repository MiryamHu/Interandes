import { useState } from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { translations, type Lang } from '../translations';

export default function About() {
    const [lang, setLang] = useState<Lang>(() => {
        const savedLang = localStorage.getItem('lang');

        return savedLang === 'en' ? 'en' : 'es';
    });

    const t = translations[lang].about;

    return (
        <main className="bg-midnight min-h-screen">
        <Navigation lang={lang} setLang={setLang} />

        <section className="relative section-padding pt-[140px] bg-midnight">
            <div className="content-max-width grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
                <p className="text-label text-amber uppercase tracking-[0.15em] mb-4">
                {t.overline}
                </p>

                <h1
                className="text-heading-2 text-light-grey uppercase mb-6"
                style={{ minWidth: '300px' }}
                >
                {t.title}
                </h1>

                <div className="space-y-5">
                <p className="text-body text-grey leading-relaxed">
                    {t.description}
                </p>

                <p className="text-body text-grey leading-relaxed">
                    {t.description2}
                </p>

                <p className="text-body text-grey leading-relaxed">
                    {t.description3}
                </p>

                <p className="text-body text-grey leading-relaxed">
                    {t.description4}
                </p>
                </div>

                <div className="mt-8">
                <p className="text-label text-amber font-semibold">
                    {t.name}
                </p>

                <p className="text-sm text-grey mt-1">
                    {t.role}
                </p>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-amber/20 shadow-xl">
                <img
                    src="/images/duena-interandes.jpg"
                    alt={t.imageAlt}
                    className="w-full h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </div>
            </div>
        </section>

        <Footer lang={lang} />
        </main>
    );
    }