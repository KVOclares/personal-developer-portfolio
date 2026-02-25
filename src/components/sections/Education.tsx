import { useEffect, useRef } from 'react';
import { EDUCATION } from '../../data/education';

/**
 * Education section — two NAIT diploma entries with highlights.
 */
function Education() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const el = sectionRef.current;
        if (el) {
            el.querySelectorAll('[data-animate]').forEach((child) => observer.observe(child));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-24">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">Academic Background</p>
                    <h2 className="section-heading">Education</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {EDUCATION.map((entry, idx) => (
                        <div
                            key={entry.field}
                            data-animate
                            className="card-glass p-6 cursor-default"
                            style={{
                                opacity: 0,
                                transform: 'translateY(24px)',
                                transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
                            }}
                        >
                            {/* Header row */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 
                                flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-electric-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                {entry.honors && (
                                    <span className="ml-auto tag bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 flex items-center gap-1.5">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                                        </svg>
                                        With Honors
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{entry.field}</h3>
                            <p className="text-electric-400 font-semibold text-sm mb-1">{entry.degree}</p>
                            <p className="text-slate-400 text-sm mb-1">{entry.institution}</p>
                            <p className="text-slate-500 text-xs font-mono mb-5">{entry.period}</p>

                            {entry.highlights && (
                                <ul className="space-y-2 border-t border-white/10 pt-4">
                                    {entry.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex gap-3 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
