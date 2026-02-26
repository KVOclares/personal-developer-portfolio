import { Github, ExternalLink, Clock, Terminal } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { ProjectStatus } from '../../types';

/* ─── Status colour system ──────────────────────────────────────────────────── */

const STATUS_STYLES: Record<
    ProjectStatus,
    { bar: string; badge: string; label: string }
> = {
    live: {
        bar: 'bg-green-500',
        badge: 'bg-green-500/10 text-green-400 border border-green-500/20',
        label: 'Live',
    },
    'in-progress': {
        bar: 'bg-yellow-500',
        badge: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
        label: 'In Progress',
    },
    'coming-soon': {
        bar: 'bg-gray-600',
        badge: 'bg-gray-700 text-gray-400 border border-gray-600',
        label: 'Coming Soon',
    },
};

/* ─── Featured-card mock terminal content ────────────────────────────────────── */

const MOCK_MESSAGES = [
    { role: 'user' as const, text: 'What benefits am I eligible for?' },
    {
        role: 'ai' as const,
        text: `Based on your situation, here are 3 programs you may qualify for:\n1. AISH — Assured Income\n2. Alberta Works\n3. Child Benefit Supplement`,
    },
];

/* ─── Component ──────────────────────────────────────────────────────────────── */

/**
 * Projects section — responsive card grid showcasing portfolio projects.
 * Fully data-driven: adding a project = one new object in projects.ts.
 */
function Projects() {
    const sectionRef = useScrollAnimation<HTMLElement>();

    /* Separate standard and featured projects */
    const standardProjects = PROJECTS.filter((p) => !p.featured);
    const featuredProject = PROJECTS.find((p) => p.featured);

    /* Animation delay index — featured card animates last */
    const featuredDelay = standardProjects.length;

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-24"
            role="region"
            aria-labelledby="projects-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Animated section header */}
                <div
                    data-animate
                    style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                >
                    <SectionHeader
                        title="Projects"
                        subtitle="Things I have built and am building"
                        headingId="projects-heading"
                    />
                </div>

                {/* ── Standard project cards ─────────────────────────────── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                >
                    {standardProjects.map((project, idx) => {
                        const style = STATUS_STYLES[project.status];
                        const isLoneCard = standardProjects.length % 3 === 1 && idx === standardProjects.length - 1;

                        return (
                            <div
                                key={project.title}
                                role="listitem"
                                data-animate
                                className={`card-glass flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:border-electric-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/10 ${isLoneCard ? 'lg:col-start-2' : ''}`}
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
                                }}
                            >
                                {/* Top accent bar */}
                                <div className={`h-1 w-full rounded-t-xl ${style.bar}`} />

                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Header row */}
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        <span
                                            className={`inline-flex items-center whitespace-nowrap px-2.5 py-1 text-xs font-mono font-medium rounded-md ${style.badge}`}
                                            aria-label={`Project status: ${style.label}`}
                                        >
                                            {style.label}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="mb-5">
                                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech) => (
                                                <Badge key={tech} label={tech} variant="stack" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action row */}
                                    <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline text-xs py-2 px-4"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <Github className="w-4 h-4" aria-hidden="true" />
                                                GitHub
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline text-xs py-2 px-4"
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                                Live Demo
                                            </a>
                                        )}

                                        {project.status === 'coming-soon' && (
                                            <span
                                                className="inline-flex items-center gap-2 px-4 py-2 text-xs text-slate-500 border border-white/5 rounded-xl cursor-not-allowed"
                                                aria-disabled="true"
                                            >
                                                <Clock className="w-4 h-4" aria-hidden="true" />
                                                In Development
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Featured project card ──────────────────────────────── */}
                {featuredProject && (
                    <div
                        data-animate
                        role="listitem"
                        className="mt-6 card-glass overflow-hidden transition-all duration-300 ease-in-out
                                   hover:border-electric-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/10"
                        style={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: `opacity 0.6s ease ${featuredDelay * 0.1}s, transform 0.6s ease ${featuredDelay * 0.1}s`,
                        }}
                    >
                        {/* Top accent bar */}
                        <div className={`h-1 w-full rounded-t-xl ${STATUS_STYLES[featuredProject.status].bar}`} />

                        <div className="flex flex-col lg:flex-row">
                            {/* Left column — 60% */}
                            <div className="p-6 lg:p-8 lg:w-[60%] flex flex-col">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <Terminal className="w-5 h-5 text-electric-400" aria-hidden="true" />
                                        <h3 className="text-xl font-bold text-white">{featuredProject.title}</h3>
                                    </div>
                                    <span
                                        className={`inline-flex items-center whitespace-nowrap px-2.5 py-1 text-xs font-mono font-medium rounded-md ${STATUS_STYLES[featuredProject.status].badge}`}
                                        aria-label={`Project status: ${STATUS_STYLES[featuredProject.status].label}`}
                                    >
                                        {STATUS_STYLES[featuredProject.status].label}
                                    </span>
                                </div>

                                {/* Featured label */}
                                <span className="inline-flex items-center gap-1.5 text-xs text-electric-400 font-mono mb-4">
                                    ★ Flagship Project
                                </span>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                    {featuredProject.description}
                                </p>

                                {/* Tech stack */}
                                <div className="mb-5">
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.stack.map((tech) => (
                                            <Badge key={tech} label={tech} variant="stack" />
                                        ))}
                                    </div>
                                </div>

                                {/* Action row */}
                                <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                                    {featuredProject.githubUrl && (
                                        <a
                                            href={featuredProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline text-xs py-2 px-4"
                                            aria-label={`View ${featuredProject.title} on GitHub`}
                                        >
                                            <Github className="w-4 h-4" aria-hidden="true" />
                                            GitHub
                                        </a>
                                    )}

                                    {featuredProject.liveUrl && (
                                        <a
                                            href={featuredProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline text-xs py-2 px-4"
                                            aria-label={`View live demo of ${featuredProject.title}`}
                                        >
                                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                            Live Demo
                                        </a>
                                    )}

                                    {featuredProject.status === 'coming-soon' && (
                                        <span
                                            className="inline-flex items-center gap-2 px-4 py-2 text-xs text-slate-500 border border-white/5 rounded-xl cursor-not-allowed"
                                            aria-disabled="true"
                                        >
                                            <Clock className="w-4 h-4" aria-hidden="true" />
                                            In Development
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Right column — 40% mock terminal */}
                            <div
                                className="lg:w-[40%] p-6 lg:p-8 flex items-center"
                                aria-hidden="true"
                            >
                                <div className="w-full bg-black/40 rounded-xl p-4 font-mono text-xs space-y-4 border border-white/5">
                                    {/* Terminal title bar */}
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        <span className="ml-2 text-gray-600 text-[10px]">benefits-navigator</span>
                                    </div>

                                    {/* Chat messages */}
                                    {MOCK_MESSAGES.map((msg, i) => (
                                        <div key={i} className="space-y-1">
                                            <span className={msg.role === 'user' ? 'text-gray-400' : 'text-green-400'}>
                                                {msg.role === 'user' ? '> User: ' : '> AI: '}
                                            </span>
                                            <p
                                                className={`whitespace-pre-wrap pl-2 ${msg.role === 'user' ? 'text-gray-400' : 'text-green-400'
                                                    }`}
                                            >
                                                {msg.text}
                                            </p>
                                        </div>
                                    ))}

                                    {/* Blinking cursor */}
                                    <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
