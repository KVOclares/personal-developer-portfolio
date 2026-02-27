import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

// ─── Types ──────────────────────────────────────────────────────────────────────

/** A single navigation anchor link. */
interface NavLink {
    label: string;
    href: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────────

/** Ordered navigation links rendered in the Navbar. */
const NAV_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
] as const;

import { PROFILE } from '../../data/profile';

/** Path to the downloadable résumé PDF. */
const RESUME_PATH = PROFILE.resumeUrl;

// ─── Component ──────────────────────────────────────────────────────────────────

/**
 * Sticky top navigation bar.
 *
 * - Transitions from transparent → navy background on scroll.
 * - Highlights the link whose section is currently in the viewport.
 * - Responsive hamburger menu on mobile with animated open / close icon.
 */
function Navbar() {
    // ── State ─────────────────────────────────────────────────────────────────
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const activeHref = useActiveSection(NAV_LINKS);

    // ── Scroll listener ───────────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = (): void => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Handlers ──────────────────────────────────────────────────────────────
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = (): void => setMenuOpen((prev) => !prev);

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ── Helpers ───────────────────────────────────────────────────────────────

    /** Desktop active link: text color + bottom border. */
    const desktopLinkClasses = (href: string): string =>
        href === activeHref
            ? 'text-electric-500 border-b-2 border-electric-500'
            : 'text-gray-300 hover:text-white';

    /** Mobile active link: text color + left accent bar (no full-width underline). */
    const mobileLinkClasses = (href: string): string =>
        href === activeHref
            ? 'text-electric-500 border-l-2 border-electric-500 bg-white/5'
            : 'text-gray-300 hover:text-white';

    // ── Render ─────────────────────────────────────────────────────────────────
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900 shadow-lg shadow-black/20' : 'bg-transparent'
                    }`}
            >
                <div className="section-container flex items-center justify-between h-16">
                    {/* ── Logo ─────────────────────────────────────────────── */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        aria-label="Back to top"
                        className="font-mono text-electric-500 text-xl font-bold tracking-tight
                                   hover:text-electric-400 transition-colors duration-200"
                    >
                        KVO
                    </a>

                    {/* ── Desktop + Mobile nav (single landmark) ───────────── */}
                    <nav aria-label="Main navigation" className="flex items-center">
                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${desktopLinkClasses(link.href)}`}
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Resume button (desktop) */}
                            <a
                                href={RESUME_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                download="KierVincentOclares_Resume.pdf"
                                className="btn-outline ml-3 text-sm py-2 px-4"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Hamburger button (mobile) */}
                        <button
                            type="button"
                            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white
                                       hover:bg-white/5 transition-colors duration-200"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                {/* Top bar */}
                                <line
                                    x1={menuOpen ? 6 : 4}
                                    y1={menuOpen ? 6 : 6}
                                    x2={menuOpen ? 18 : 20}
                                    y2={menuOpen ? 18 : 6}
                                    strokeLinecap="round"
                                    className="origin-center transition-all duration-300"
                                />
                                {/* Middle bar — fades out when open */}
                                <line
                                    x1="4"
                                    y1="12"
                                    x2="20"
                                    y2="12"
                                    strokeLinecap="round"
                                    className={`origin-center transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />
                                {/* Bottom bar */}
                                <line
                                    x1={menuOpen ? 6 : 4}
                                    y1={menuOpen ? 18 : 18}
                                    x2={menuOpen ? 18 : 20}
                                    y2={menuOpen ? 6 : 18}
                                    strokeLinecap="round"
                                    className="origin-center transition-all duration-300"
                                />
                            </svg>
                        </button>
                    </nav>
                </div>

                {/* ── Mobile dropdown menu ──────────────────────────────────── */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-navy-900
                                border-t border-white/15 shadow-lg shadow-black/30
                                transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col px-4 py-4 gap-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${mobileLinkClasses(link.href)}`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Resume button (mobile) */}
                        <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="KierVincentOclares_Resume.pdf"
                            className="btn-outline mt-3 text-sm py-2.5 px-4 text-center"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </header>

            {/* ── Back to Top button ───────────────────────────────────────── */}
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`fixed bottom-6 right-6 z-50 p-3 rounded-full
                           bg-electric-500 text-white shadow-lg shadow-electric-500/30
                           hover:bg-electric-600 hover:scale-110
                           transition-all duration-300 cursor-pointer
                           ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </>
    );
}

export default Navbar;
