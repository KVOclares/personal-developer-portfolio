import { useEffect, useRef, type ComponentType, type SVGProps } from 'react';
import { SKILLS } from '../../data/skills';
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiR,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiVite,
    SiNodedotjs,
    SiExpress,

    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiPostgresql,
    SiSupabase,
    SiGit,
    SiGithub,
    SiDocker,
} from '@icons-pack/react-simple-icons';
import { CircleDot, Database, BrainCircuit, BarChart3 } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Icon mapping — skill name → Simple Icons component                */
/* ------------------------------------------------------------------ */

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; color?: string }>;

const SKILL_ICON_MAP: Record<string, IconComponent> = {
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Python: SiPython,
    R: SiR,
    React: SiReact,
    'Tailwind CSS': SiTailwindcss,
    HTML5: SiHtml5,
    Vite: SiVite,
    'Node.js': SiNodedotjs,
    Express: SiExpress,
    'Power BI': BarChart3 as unknown as IconComponent,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    'Scikit-learn': SiScikitlearn,
    PostgreSQL: SiPostgresql,
    Supabase: SiSupabase,
    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    'Azure AI': BrainCircuit as unknown as IconComponent,
    SQL: Database as unknown as IconComponent,
};

/** Fallback icon for skills without a Simple Icon. */
const FallbackIcon = CircleDot as unknown as IconComponent;

/** Per-category tag color styles. */
const CATEGORY_COLORS: Record<string, string> = {
    Languages: 'bg-blue-500/10   text-blue-400   border-blue-500/20',
    Frontend: 'bg-cyan-500/10   text-cyan-400   border-cyan-500/20',
    Backend: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Data & ML': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    Database: 'bg-amber-500/10  text-amber-400  border-amber-500/20',
    'Tools & DevOps': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

/**
 * Skills section — categorized grid of technical skills with brand icons.
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
                            {/* Category label — unique color per category */}
                            <span className={`tag border mb-5 ${CATEGORY_COLORS[cat.category] ?? 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                                {cat.category}
                            </span>

                            {/* Skills — pill badges with flex wrap */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => {
                                    const Icon = SKILL_ICON_MAP[skill.name] ?? FallbackIcon;
                                    return (
                                        <span
                                            key={skill.name}
                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5
                                               bg-navy-950/80 border border-gray-700 text-sm text-gray-300
                                               hover:border-electric-500/50 hover:text-white
                                               transition-colors duration-150 cursor-default"
                                        >
                                            <Icon size={14} className="flex-shrink-0" aria-hidden="true" />
                                            {skill.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
