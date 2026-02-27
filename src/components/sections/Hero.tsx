import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useTypingCycle } from '../../hooks/useTypingCycle';

/** Path to the downloadable résumé PDF. */
const RESUME_PATH = PROFILE.resumeUrl;

/**
 * Hero section — full-viewport introduction with animated cycling titles,
 * CTA buttons, and a scroll indicator.
 */
function Hero() {
    const displayedRole = useTypingCycle(PROFILE.titles, 80, 40, 2500);
    const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);

    // ── Hide scroll indicator once user scrolls past the hero ─────────────────
    useEffect(() => {
        const onScroll = (): void => {
            setShowScrollIndicator(window.scrollY < window.innerHeight * 0.3);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Tagline — full summary, no truncation ───────────────────────────────
    const tagline = PROFILE.about;

    // ── Split name for gradient styling ───────────────────────────────────────
    const nameParts = PROFILE.name.split(' ');
    const lastName = nameParts.pop() ?? '';
    const firstName = nameParts.join(' ');

    // ── Smooth scroll handler ─────────────────────────────────────────────────
    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* ── Background decorative elements ──────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Radial center glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse at 50% 40%, rgba(30, 58, 95, 0.5) 0%, transparent 70%)',
                    }}
                />
                {/* Decorative blurred circles */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-500/[0.06] rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-accent-purple/[0.05] rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-500/[0.04] rounded-full blur-3xl" />
            </div>

            {/* ── Main content ─────────────────────────────────────────────── */}
            <div className="section-container relative z-10 py-32 text-center">
                {/* 1. Greeting line */}
                <p
                    className="text-electric-400 font-mono text-sm tracking-widest uppercase mb-4
                               opacity-0 animate-fade-in"
                >
                    Hi, I'm
                </p>

                {/* 2. Name — only <h1> on the page */}
                <h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6
                               opacity-0 animate-fade-in-up drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    style={{ animationDelay: '150ms' }}
                >
                    {firstName}{' '}
                    <span className="text-gradient">{lastName}</span>
                </h1>

                {/* 3. Animated cycling role title */}
                <div
                    className="h-10 sm:h-12 flex items-center justify-center mb-6
                               opacity-0 animate-fade-in"
                    style={{ animationDelay: '350ms' }}
                    aria-live="polite"
                >
                    <p className="text-2xl md:text-3xl font-medium">
                        <span className="text-gray-500 font-mono">{'< '}</span>
                        <span className="text-electric-400">{displayedRole}</span>
                        <span className="animate-type-cursor text-electric-400 ml-0.5">|</span>
                        <span className="text-gray-500 font-mono">{' />'}</span>
                    </p>
                </div>

                {/* 4. Tagline */}
                <p
                    className="text-gray-400 text-lg max-w-xl mx-auto text-center mt-4 mb-10
                               opacity-0 animate-fade-in"
                    style={{ animationDelay: '500ms' }}
                >
                    {tagline}
                </p>

                {/* 5. CTA buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4
                               opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '650ms' }}
                >
                    <a
                        href="#projects"
                        onClick={(e) => scrollTo(e, '#projects')}
                        className="btn-primary"
                        aria-label="View my projects"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0 1 15.75 3H18a2.25 2.25 0 0 1 2.25 2.25v2.25A2.25 2.25 0 0 1 18 9.75h-2.25A2.25 2.25 0 0 1 13.5 7.5V5.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z"
                            />
                        </svg>
                        View My Projects
                    </a>
                    <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="btn-outline"
                        aria-label="Download resume"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Download Resume
                    </a>
                </div>

                {/* 6. Scroll indicator */}
                <a
                    href="#about"
                    onClick={(e) => scrollTo(e, '#about')}
                    aria-label="Scroll to about section"
                    className={`absolute bottom-10 left-1/2 -translate-x-1/2
                               text-gray-500 hover:text-electric-400 transition-all duration-500
                               ${showScrollIndicator
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                    style={{ animationDelay: '900ms' }}
                >
                    <span className="opacity-0 animate-fade-in inline-block" style={{ animationDelay: '900ms' }}>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
