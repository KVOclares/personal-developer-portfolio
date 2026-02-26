import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { copyToClipboard } from '../../utils';
import SectionHeader from '../ui/SectionHeader';

// ─── Local Types ────────────────────────────────────────────────────────────────

/** A single contact link card definition. */
interface ContactLink {
    icon: LucideIcon;
    label: string;
    value: string;
    subValue?: string;
    href?: string;
    newTab?: boolean;
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const CONTACT_LINKS: ContactLink[] = [
    {
        icon: Phone,
        label: 'Phone',
        value: PROFILE.phone,
        href: 'tel:+17809208681',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'kier-vincent-o',
        href: PROFILE.socials.find((s) => s.icon === 'linkedin')!.url,
        newTab: true,
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'KVOclares',
        href: PROFILE.socials.find((s) => s.icon === 'github')!.url,
        newTab: true,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: PROFILE.location.replace(', Canada', ''),
        subValue: 'Remote-ready across Alberta',
    },
];

// ─── Component ──────────────────────────────────────────────────────────────────

/**
 * Contact section — confident closing statement with direct email CTA,
 * contact link cards, and availability status pill.
 */
function Contact() {
    const sectionRef = useScrollAnimation<HTMLElement>();
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // prevent the parent <a> mailto from firing
        e.stopPropagation();
        const success = await copyToClipboard(PROFILE.email);
        if (success) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24"
            role="region"
            aria-labelledby="contact-heading"
        >
            <div className="section-container">
                {/* ── Section Header ────────────────────────────── */}
                <div
                    data-animate
                    className="text-left"
                    style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                >
                    <SectionHeader
                        title="Get In Touch"
                        subtitle="Open to opportunities and conversations"
                        headingId="contact-heading"
                    />
                </div>

                {/* ── Closing Statement ─────────────────────────── */}
                <p
                    data-animate
                    className="text-gray-400 text-center max-w-xl mx-auto leading-relaxed mb-10"
                    style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
                    }}
                >
                    I am currently open to Full Stack Developer roles in Alberta.
                    If you think I could be a good fit for your team — I would love
                    to hear from you.
                </p>

                {/* ── Primary CTA — Email Button ───────────────── */}
                <div
                    data-animate
                    className="flex flex-col items-center"
                    style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                    }}
                >
                    <a
                        href={`mailto:${PROFILE.email}`}
                        aria-label="Send email to Kier"
                        className="relative bg-electric-500 hover:bg-electric-600 text-white font-medium
                                   px-8 py-4 rounded-xl text-base flex items-center gap-3 mx-auto
                                   transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25
                                   hover:-translate-y-1 group"
                    >
                        <Mail className="w-5 h-5" aria-hidden="true" />
                        <span>{PROFILE.email}</span>

                        {/* Copy icon — overlaid on the right */}
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            aria-label={isCopied ? 'Email copied' : 'Copy email address'}
                            className="ml-1 p-1 rounded-md hover:bg-white/20
                                       opacity-0 group-hover:opacity-100
                                       transition-opacity duration-200 cursor-pointer"
                        >
                            {isCopied ? (
                                <Check className="w-4 h-4 text-green-400" aria-hidden="true" />
                            ) : (
                                <Copy className="w-4 h-4" aria-hidden="true" />
                            )}
                        </button>
                    </a>

                    <p className="text-gray-600 text-xs text-center mt-3">
                        or reach out through any of the links below
                    </p>
                </div>

                {/* ── Contact Links Row ─────────────────────────── */}
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {CONTACT_LINKS.map((link, idx) => {
                        const isInteractive = Boolean(link.href);
                        const CardIcon = link.icon;

                        const cardContent = (
                            <>
                                <CardIcon
                                    className="w-5 h-5 text-electric-400 mb-1"
                                    aria-hidden="true"
                                />
                                <span className="text-gray-500 text-xs uppercase tracking-wider">
                                    {link.label}
                                </span>
                                <span className="text-white text-sm font-medium">
                                    {link.value}
                                </span>
                                {link.subValue && (
                                    <span className="text-gray-500 text-xs">
                                        {link.subValue}
                                    </span>
                                )}
                            </>
                        );

                        const sharedClasses = `bg-navy-800/60 border border-gray-800 rounded-xl
                            px-6 py-4 flex flex-col items-center gap-1
                            transition-all duration-300`;

                        const animationStyle = {
                            opacity: 0 as const,
                            transform: 'translateY(20px)',
                            transition: `opacity 0.6s ease ${0.3 + idx * 0.1}s, transform 0.6s ease ${0.3 + idx * 0.1}s`,
                        };

                        if (isInteractive) {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.newTab ? '_blank' : undefined}
                                    rel={link.newTab ? 'noopener noreferrer' : undefined}
                                    aria-label={
                                        link.newTab
                                            ? `Visit ${link.label} profile (opens in new tab)`
                                            : `Call ${link.value}`
                                    }
                                    data-animate
                                    className={`${sharedClasses} cursor-pointer hover:border-electric-500/30 hover:-translate-y-0.5`}
                                    style={animationStyle}
                                >
                                    {cardContent}
                                </a>
                            );
                        }

                        return (
                            <div
                                key={link.label}
                                role="presentation"
                                data-animate
                                className={`${sharedClasses} cursor-default`}
                                style={animationStyle}
                            >
                                {cardContent}
                            </div>
                        );
                    })}
                </div>

                {/* ── Availability Status ───────────────────────── */}
                <div
                    data-animate
                    className="flex justify-center mt-8"
                    style={{
                        opacity: 0,
                        transform: 'translateY(10px)',
                        transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
                    }}
                >
                    <span
                        className="bg-green-500/5 border border-green-500/20 text-green-400 text-sm
                                   px-4 py-2 rounded-full flex items-center gap-2 w-fit"
                        aria-label="Current availability status"
                    >
                        {/* Pulsing green dot */}
                        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        {PROFILE.availabilityNote}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
