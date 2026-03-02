import { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Circle, X } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Badge from '../ui/Badge';

// ─── Types ──────────────────────────────────────────────────────────────────────

/** A single quick-fact statistic. */
interface Stat {
    label: string;
    value: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const STATS: Stat[] = [
    { value: '4+', label: 'Years Experience' },
    { value: 'ML Intern', label: 'Current Role' },
    { value: '2×', label: 'NAIT Honors' },
    { value: 'YEG', label: 'Edmonton, AB' },
];

const CORE_STACK = [
    'Python',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Power BI',
    'REST APIs',
    'Git',
];

// ─── Component ──────────────────────────────────────────────────────────────────

/**
 * About section — two-column layout with profile photo, bio paragraphs,
 * quick stats, and tech stack highlights, with scroll-triggered animations.
 */
function About() {
    const sectionRef = useScrollAnimation<HTMLElement>(0.2);

    // ── Lightbox state ────────────────────────────────────────────────────────
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const photoTriggerRef = useRef<HTMLButtonElement>(null);

    const openLightbox = (): void => setIsLightboxOpen(true);

    const closeLightbox = useCallback((): void => {
        setIsLightboxOpen(false);
        // Return focus to the trigger element
        setTimeout(() => photoTriggerRef.current?.focus(), 0);
    }, []);

    // ── Escape key + body scroll lock ─────────────────────────────────────────
    useEffect(() => {
        if (!isLightboxOpen) return;

        const onKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') closeLightbox();
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen, closeLightbox]);

    return (
        <>
            <section
                id="about"
                ref={sectionRef}
                className="py-24"
                role="region"
                aria-labelledby="about-heading"
            >
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section header */}
                    <div
                        data-animate
                        className="mb-12"
                        style={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                    >
                        <p className="section-subheading">WHO I AM</p>
                        <h2 id="about-heading" className="section-heading">
                            About Me
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full mt-2" />
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* ── Left Column — Photo & Badges (40%) ──────────── */}
                        <div
                            data-animate
                            className="lg:col-span-2 flex flex-col items-center lg:items-center"
                            style={{
                                opacity: 0,
                                transform: 'translateX(-30px)',
                                transition: 'opacity 0.6s ease, transform 0.6s ease',
                            }}
                        >
                            {/* Profile photo — clickable for lightbox */}
                            <button
                                ref={photoTriggerRef}
                                type="button"
                                onClick={openLightbox}
                                className="relative group cursor-zoom-in rounded-2xl overflow-hidden
                                           w-48 h-64 md:w-64 md:h-[22rem]
                                           border-[3px] border-electric-500
                                           focus:outline-none focus-visible:ring-2
                                           focus-visible:ring-electric-500 focus-visible:ring-offset-2
                                           focus-visible:ring-offset-navy-900"
                                style={{
                                    boxShadow: '0 0 25px rgba(59, 130, 246, 0.2), 0 0 50px rgba(59, 130, 246, 0.1)',
                                }}
                                aria-label="View full profile photo"
                            >
                                <div
                                    className="w-full h-full transition-all duration-300
                                               group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${PROFILE.photo})`,
                                        backgroundSize: '200%',
                                        backgroundPosition: '73% 90%',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    role="img"
                                    aria-label="Kier Vincent Oclares — Machine Learning Developer at the Government of Alberta"
                                />
                            </button>

                            {/* Location badge */}
                            <div className="flex items-center gap-1.5 text-gray-400 text-sm mt-4">
                                <MapPin className="w-4 h-4" aria-hidden="true" />
                                <span>Edmonton, Alberta</span>
                            </div>

                            {/* Availability badge */}
                            {PROFILE.availability && (
                                <div className="flex items-center gap-2 mt-3 px-3 py-1.5
                                                bg-green-500/10 border border-green-500/20 rounded-full">
                                    <Circle
                                        className="w-2.5 h-2.5 fill-green-400 text-green-400 animate-pulse"
                                        aria-hidden="true"
                                    />
                                    <span className="text-green-400 text-sm font-medium">
                                        Open to Opportunities
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* ── Right Column — Bio, Stats, Stack (60%) ──────── */}
                        <div
                            data-animate
                            className="lg:col-span-3"
                            style={{
                                opacity: 0,
                                transform: 'translateX(30px)',
                                transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
                            }}
                        >

                            {/* Bio paragraphs */}
                            <div className="space-y-4 mb-10">
                                {PROFILE.bio.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className={`leading-relaxed ${i === 0
                                            ? 'text-lg text-slate-300'
                                            : 'text-base text-slate-400'
                                            }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Quick stats */}
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                                aria-label="Quick facts about Kier"
                            >
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center py-4 px-2 border border-white/5
                                                   bg-white/[0.02] rounded-xl"
                                    >
                                        <div className="text-2xl font-bold text-electric-400">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Core stack */}
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                                    Core Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {CORE_STACK.map((tech) => (
                                        <Badge key={tech} label={tech} variant="stack" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Photo Lightbox ────────────────────────────────────────────── */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center
                               bg-black/80 backdrop-blur-sm
                               animate-fade-in cursor-zoom-out"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Profile photo fullscreen view"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 p-2 rounded-lg
                                   text-white/80 hover:text-white hover:bg-white/10
                                   transition-colors duration-200"
                        aria-label="Close photo"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Full image + caption */}
                    <div
                        className="flex flex-col items-center"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <img
                            src={PROFILE.photo}
                            alt="Kier Vincent Oclares — full photo"
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg
                                       shadow-2xl shadow-black/50"
                        />
                        <p className="text-gray-400 text-sm text-center mt-3">
                            Kier at the Columbia Icefield Skywalk, Alberta
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
