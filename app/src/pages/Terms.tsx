import { useState } from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { translations, type Lang } from '../translations';

export default function Terms() {
    const [lang, setLang] = useState<Lang>(() => {
        const savedLang = localStorage.getItem('lang');

        return savedLang === 'en' ? 'en' : 'es';
    });

    const t = translations[lang].termsPage;

    return (
        <main className="bg-midnight min-h-screen">
        <Navigation lang={lang} setLang={setLang} />

        <section className="relative section-padding pt-[150px] bg-midnight">
            <div className="content-max-width max-w-[900px]">
            <p className="text-label text-amber uppercase tracking-[0.15em] mb-4">
                {t.overline}
            </p>

            <h1 className="text-heading-2 text-light-grey uppercase mb-4">
                {t.title}
            </h1>

            <p className="text-sm text-grey mb-10">{t.lastUpdated}</p>

            <p className="text-body text-grey leading-relaxed mb-10">
                {t.intro}
            </p>

            <div className="space-y-10">
                {t.sections.map((section) => (
                <div key={section.title}>
                    <h2 className="text-heading-3 text-light-grey uppercase mb-4">
                    {section.title}
                    </h2>

                    <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                        <p
                        key={paragraph}
                        className="text-body text-grey leading-relaxed"
                        >
                        {paragraph}
                        </p>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            <div className="mt-12 border border-amber/20 bg-black/30 rounded-2xl p-6">
                <h2 className="text-heading-3 text-light-grey uppercase mb-3">
                {t.contactTitle}
                </h2>

                <p className="text-body text-grey leading-relaxed">
                {t.contactText}
                </p>
            </div>
            </div>
        </section>

        <Footer lang={lang} />
        </main>
    );
    }