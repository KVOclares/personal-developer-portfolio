import { useState, useEffect } from 'react';

/** Navigation item definition. */
interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

/**
 * Sticky navigation bar with smooth scroll links.
 * Becomes opaque with a backdrop blur when the user scrolls past the hero.
 */
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-navy-900/90 backdrop-blur-md border-b border-white/10 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo / Name */}
                <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <span className="font-mono text-electric-500 text-lg font-bold group-hover:text-electric-400 transition-colors duration-200">
                        KVO
                    </span>
                    <span className="hidden sm:block text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-200">
                        · Portfolio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 
                         rounded-lg transition-all duration-200 cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                        className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-electric-500 hover:bg-electric-600 
                       rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-electric-500/25"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 
                     transition-all duration-200 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/10 px-4 py-4">
                    <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 
                           rounded-lg transition-all duration-200 cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;
