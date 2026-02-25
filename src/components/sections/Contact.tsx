import { useEffect, useRef, useState, type ReactElement } from 'react';
import { PROFILE } from '../../data/profile';

/** Result state for copy-to-clipboard action. */
type CopyState = 'idle' | 'copied' | 'failed';

/**
 * Contact section — shows email, phone, LinkedIn, and GitHub with
 * copy-to-clipboard functionality for the email address.
 */
function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [copyState, setCopyState] = useState<CopyState>('idle');

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

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopyState('copied');
            setTimeout(() => setCopyState('idle'), 2000);
        } catch {
            setCopyState('failed');
            setTimeout(() => setCopyState('idle'), 2000);
        }
    };

    /** Icon paths for each social type. */
    const socialIcons: Record<string, ReactElement> = {
        email: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        ),
        phone: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        github: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-navy-950/50">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">Get In Touch</p>
                    <h2 className="section-heading">Contact</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROFILE.socials.map((social, idx) => (
                        <div
                            key={social.label}
                            data-animate
                            className="card-glass p-6 text-center cursor-default"
                            style={{
                                opacity: 0,
                                transform: 'translateY(24px)',
                                transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
                            }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-electric-500/10 border border-electric-500/20 
                              flex items-center justify-center mx-auto mb-4 text-electric-400">
                                {socialIcons[social.icon]}
                            </div>

                            {social.icon === 'email' ? (
                                <button
                                    onClick={handleCopyEmail}
                                    className="group cursor-pointer"
                                >
                                    <p className="text-sm text-white font-medium group-hover:text-electric-400 transition-colors duration-200 mb-1">
                                        {social.label}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {copyState === 'copied'
                                            ? '✓ Copied!'
                                            : copyState === 'failed'
                                                ? '✗ Failed'
                                                : 'Click to copy'}
                                    </p>
                                </button>
                            ) : (
                                <a
                                    href={social.url}
                                    target={social.icon === 'phone' ? undefined : '_blank'}
                                    rel={social.icon === 'phone' ? undefined : 'noopener noreferrer'}
                                    className="group"
                                >
                                    <p className="text-sm text-white font-medium group-hover:text-electric-400 transition-colors duration-200 mb-1">
                                        {social.label}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {social.icon === 'phone' ? 'Tap to call' : `Visit ${social.icon === 'linkedin' ? 'LinkedIn' : 'GitHub'}`}
                                    </p>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
