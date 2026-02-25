import { useEffect, useRef } from 'react';
import { PROFILE } from '../../data/profile';

/**
 * About section — professional summary with subtle scroll-fade animation.
 */
function About() {
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
            { threshold: 0.15 }
        );

        const el = sectionRef.current;
        if (el) {
            el.querySelectorAll('[data-animate]').forEach((child) => observer.observe(child));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">Who I Am</p>
                    <h2 className="section-heading">About Me</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Professional Summary */}
                    <div
                        data-animate
                        className="lg:col-span-3"
                        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}
                    >
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            {PROFILE.about}
                        </p>
                        <p className="prose-muted">
                            Outside of work, I am passionate about open-source contributions,
                            building developer tools, and exploring the intersection of engineering
                            discipline and modern software architecture. Based in Edmonton, I bring
                            a calm, methodical approach to complex problems and a genuine love for
                            clean, well-documented code.
                        </p>
                    </div>

                    {/* Stats & Highlights */}
                    <div
                        data-animate
                        className="lg:col-span-2 grid grid-cols-2 gap-4"
                        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s' }}
                    >
                        {[
                            { value: '5+', label: 'Years Experience' },
                            { value: '2×', label: 'Diplomas with Honors' },
                            { value: '4', label: 'Projects in Progress' },
                            { value: '∞', label: 'Passion for Learning' },
                        ].map((stat) => (
                            <div key={stat.label} className="card-glass p-6 text-center cursor-default">
                                <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
                                <div className="text-xs text-slate-400 font-medium leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
