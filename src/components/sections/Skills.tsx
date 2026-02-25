import { useEffect, useRef } from 'react';
import { SKILLS } from '../../data/skills';

/** Color map for category badge styles. */
const CATEGORY_COLORS: Record<string, string> = {
    electric: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    purple: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

/**
 * Skills section — categorized grid of technical skills with SVG icons.
 */
function Skills() {
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
        <section id="skills" ref={sectionRef} className="py-24 bg-navy-950/50">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">What I Know</p>
                    <h2 className="section-heading">Technical Skills</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                {/* Skill categories */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {SKILLS.map((cat, catIdx) => (
                        <div
                            key={cat.category}
                            data-animate
                            className="card-glass p-6 cursor-default"
                            style={{
                                opacity: 0,
                                transform: 'translateY(20px)',
                                transition: `opacity 0.6s ease ${catIdx * 0.08}s, transform 0.6s ease ${catIdx * 0.08}s`,
                            }}
                        >
                            {/* Category label */}
                            <span
                                className={`tag border mb-5 ${CATEGORY_COLORS[cat.color] ?? CATEGORY_COLORS['electric']}`}
                            >
                                {cat.category}
                            </span>

                            {/* Skills grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 
                               transition-colors duration-150 group"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 
                                    group-hover:bg-electric-500/10 transition-colors duration-150 flex-shrink-0">
                                            <svg
                                                className="w-4 h-4 text-slate-400 group-hover:text-electric-400 transition-colors duration-150"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d={skill.iconPath} />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-150 leading-tight">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
