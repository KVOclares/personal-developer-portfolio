import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE } from '../../data/profile';

interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    // Extract required links from profile data
    const githubLink = PROFILE.socials.find((s) => s.icon === 'github')?.url || 'https://github.com/KVOclares';
    const linkedinLink = PROFILE.socials.find((s) => s.icon === 'linkedin')?.url || 'https://www.linkedin.com/in/kier-vincent-o-2150051a0/';

    // Dynamically assemble email to avoid exposing complete string in JS bundle
    const emailUser = 'KierVOclares';
    const emailDomain = 'gmail.com';
    const emailLink = (PROFILE.emailUser && PROFILE.emailDomain)
        ? `mailto:${PROFILE.emailUser}${String.fromCharCode(64)}${PROFILE.emailDomain}`
        : `mailto:${emailUser}${String.fromCharCode(64)}${emailDomain}`;

    return (
        <footer aria-label="Site footer" className="bg-navy-800 border-t border-gray-800 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Row 1 — Logo + Tagline */}
                <div className="flex flex-col items-center">
                    <span className="text-electric-500 font-mono font-bold text-2xl">KVO</span>
                    <p className="text-gray-600 text-xs text-center mt-1">
                        Built with React + TypeScript · kiervoclares.works
                    </p>
                </div>

                {/* Row 2 — Quick Nav Links */}
                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link.label} className="flex items-center gap-3 sm:gap-4">
                                <a
                                    href={link.href}
                                    className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                                {index < NAV_LINKS.length - 1 && (
                                    <span className="text-gray-700" aria-hidden="true">
                                        ·
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Back to Top */}
                <a
                    href="#"
                    aria-label="Scroll back to top"
                    className="flex items-center gap-1 mx-auto w-fit text-gray-600 text-xs hover:text-electric-400 transition-colors"
                >
                    <ArrowUp className="w-4 h-4" />
                    Back to top
                </a>

                {/* Row 3 — Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs text-center">
                        {new Date().getFullYear()} {PROFILE.name}.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href={PROFILE.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            aria-label="Download Kier's Resume"
                            className="text-gray-600 hover:text-electric-500 transition-colors duration-200"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider">Resume</span>
                        </a>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Kier's GitHub profile (opens in new tab)"
                            className="text-gray-600 hover:text-electric-500 transition-colors duration-200"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Kier's LinkedIn profile (opens in new tab)"
                            className="text-gray-600 hover:text-electric-500 transition-colors duration-200"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href={emailLink}
                            aria-label="Send email to Kier"
                            className="text-gray-600 hover:text-electric-500 transition-colors duration-200"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
