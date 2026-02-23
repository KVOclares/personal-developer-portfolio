import { useEffect, useRef } from 'react';
import { EXPERIENCE } from '../data/experience';

/**
 * Experience section — vertical timeline of work history.
 */
function Experience() {
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
        <section id="experience" ref={sectionRef} className="py-24">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">Where I've Worked</p>
                    <h2 className="section-heading">Experience</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical rule */}
                    <div
                        className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/60 via-electric-500/20 to-transparent"
                        aria-hidden="true"
                    />

                    <div className="space-y-10">
                        {EXPERIENCE.map((entry, idx) => (
                            <div
                                key={`${entry.company}-${idx}`}
                                data-animate
                                className="relative pl-16"
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    transition: `opacity 0.6s ease ${idx * 0.12}s, transform 0.6s ease ${idx * 0.12}s`,
                                }}
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-0 top-6 w-12 h-12 rounded-full flex items-center justify-center
                               ${entry.current
                                            ? 'bg-electric-500/20 border-2 border-electric-500'
                                            : 'bg-navy-800 border-2 border-white/20'
                                        }`}
                                    aria-hidden="true"
                                >
                                    <svg
                                        className={`w-5 h-5 ${entry.current ? 'text-electric-400' : 'text-slate-500'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>

                                {/* Card */}
                                <div className="card-glass p-6 cursor-default">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2.5 flex-wrap mb-1">
                                                <h3 className="text-lg font-bold text-white">{entry.title}</h3>
                                                {entry.current && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
                                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                                                        <span className="text-green-400 text-xs font-medium">Current</span>
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-electric-400 font-semibold">{entry.company}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-slate-400 text-sm font-mono whitespace-nowrap">{entry.period}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{entry.location}</p>
                                        </div>
                                    </div>

                                    {/* Bullet points */}
                                    <ul className="space-y-2">
                                        {entry.description.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                                <span className="text-electric-500 mt-1.5 flex-shrink-0" aria-hidden="true">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.78 7.78-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.97 1.97 4.97-4.97a.75.75 0 0 1 1.06 1.06z" />
                                                    </svg>
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
