import { Github, ExternalLink, Clock, Terminal, Lock, ChevronDown, X } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { PROJECTS } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { Project, ProjectStatus } from '../../types';
import abnChattedImg from '../../assets/images/abn_chatted.jpg';

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
    finished: {
        bar: 'bg-blue-500',
        badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        label: 'Finished',
    },
};


/* ─── Standard Project Card Component ────────────────────────────────────────── */

function StandardProjectCard({ project, idx, isLoneCard }: { project: Project; idx: number; isLoneCard: boolean }) {
    const [isRoleExpanded, setIsRoleExpanded] = useState(false);
    const style = STATUS_STYLES[project.status];

    return (
        <div
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
                    <div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        {project.subtitle && (
                            <div className="text-electric text-xs font-mono mt-1">{project.subtitle}</div>
                        )}
                        {project.organization && (
                            <div className="text-gray-500 text-xs mt-1">{project.organization}</div>
                        )}
                    </div>
                    <span
                        className={`inline-flex items-center whitespace-nowrap px-2.5 py-1 text-xs font-mono font-medium rounded-md ${style.badge}`}
                        aria-label={`Project status: ${style.label}`}
                    >
                        {style.label}
                    </span>
                </div>

                {/* Description */}
                <p className={`text-gray-400 text-sm leading-relaxed mb-5 ${!project.role?.length ? 'flex-grow' : ''}`}>
                    {project.description}
                </p>

                {/* My Role section */}
                {project.role && project.role.length > 0 && (
                    <div className="mb-5 flex-grow">
                        <button
                            onClick={() => setIsRoleExpanded(!isRoleExpanded)}
                            className="flex items-center gap-1 text-gray-500 text-xs hover:text-gray-400 transition-colors"
                        >
                            <span>{isRoleExpanded ? "Hide my role" : "View my role ↓"}</span>
                            <ChevronDown
                                className={`w-3 h-3 transition-transform duration-300 ${isRoleExpanded ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isRoleExpanded && (
                            <div className="pt-3">
                                <ul className="list-disc pl-4 space-y-2 text-gray-400 text-xs marker:text-electric-500/50">
                                    {project.role.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

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
                <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto flex-wrap">
                    {project.isInternal ? (
                        <div className="flex items-center">
                            <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs px-3 py-1 rounded-full">
                                <Lock size={12} aria-hidden="true" />
                                Internal Project
                            </span>
                        </div>
                    ) : (
                        <>
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

                            <div className="flex items-center">
                                <span className={`inline-flex items-center px-3 py-1 text-xs rounded-full border ${project.note === 'Academic Project' || project.title.includes('Capstone')
                                    ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                    : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                    }`}>
                                    {project.note === 'Academic Project' || project.title.includes('Capstone')
                                        ? 'Academic Project'
                                        : 'Personal Project'}
                                </span>
                            </div>
                        </>
                    )}

                    {project.status === 'coming-soon' && (
                        <div className="flex items-center">
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1 text-xs text-slate-400 bg-slate-800/50 border border-white/5 rounded-full cursor-not-allowed"
                                aria-disabled="true"
                            >
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                In Development
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Component ──────────────────────────────────────────────────────────────── */

/**
 * Projects section — responsive card grid showcasing portfolio projects.
 * Fully data-driven: adding a project = one new object in projects.ts.
 */
function Projects() {
    const sectionRef = useScrollAnimation<HTMLElement>();

    // ── Lightbox state ────────────────────────────────────────────────────────
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const photoTriggerRef = useRef<HTMLButtonElement>(null);

    const openLightbox = (): void => setIsLightboxOpen(true);

    const closeLightbox = useCallback((): void => {
        setIsLightboxOpen(false);
        // Return focus to the trigger element
        setTimeout(() => photoTriggerRef.current?.focus(), 0);
    }, []);

    // ── Escape key + body scroll lock ─────────────────────────────────────────
    useEffect(() => {
        if (!isLightboxOpen) return;

        const onKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') closeLightbox();
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen, closeLightbox]);

    /* Separate standard and featured projects */
    const standardProjects = PROJECTS.filter((p) => !p.featured);
    const featuredProject = PROJECTS.find((p) => p.featured);



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

                {/* ── Featured project card ──────────────────────────────── */}
                {featuredProject && (
                    <div
                        data-animate
                        role="listitem"
                        className="mb-8 card-glass overflow-hidden transition-all duration-300 ease-in-out
                                   hover:border-electric-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/10"
                        style={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: `opacity 0.6s ease 0s, transform 0.6s ease 0s`,
                        }}
                    >
                        {/* Top accent bar */}
                        <div className={`h-1 w-full rounded-t-xl ${STATUS_STYLES[featuredProject.status].bar}`} />

                        <div className="flex flex-col lg:flex-row">
                            {/* Left column — 1/3 */}
                            <div className="p-6 lg:p-8 lg:w-1/3 flex flex-col">
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
                                <div className="mb-5 flex-grow">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                        {featuredProject.description}
                                    </p>
                                    {featuredProject.disclaimer && (
                                        <div className="mt-2 text-yellow-500/80 text-[10px] sm:text-xs leading-relaxed italic">
                                            {featuredProject.disclaimer}
                                        </div>
                                    )}
                                </div>

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
                                <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto flex-wrap">
                                    {featuredProject.isInternal ? (
                                        <div className="flex items-center">
                                            <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs px-3 py-1 rounded-full">
                                                <Lock size={12} aria-hidden="true" />
                                                Internal Project
                                            </span>
                                        </div>
                                    ) : (
                                        <>
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

                                            <div className="flex items-center">
                                                <span className={`inline-flex items-center px-3 py-1 text-xs rounded-full border ${featuredProject.note === 'Academic Project' || featuredProject.title.includes('Capstone')
                                                    ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                                    : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    }`}>
                                                    {featuredProject.note === 'Academic Project' || featuredProject.title.includes('Capstone')
                                                        ? 'Academic Project'
                                                        : 'Personal Project'}
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {featuredProject.status === 'coming-soon' && (
                                        <div className="flex items-center">
                                            <span
                                                className="inline-flex items-center gap-2 px-3 py-1 text-xs text-slate-400 bg-slate-800/50 border border-white/5 rounded-full cursor-not-allowed"
                                                aria-disabled="true"
                                            >
                                                <Clock className="w-4 h-4" aria-hidden="true" />
                                                In Development
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right column — 2/3 image section */}
                            <div
                                className="lg:w-2/3 p-6 lg:p-8 flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <button
                                    ref={photoTriggerRef}
                                    type="button"
                                    onClick={openLightbox}
                                    className="w-full relative group bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-electric-500/10 border border-white/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                                    aria-label="View full featured project image"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-30"></div>
                                    <img
                                        src={abnChattedImg}
                                        alt="Alberta Benefits Navigator chat interface"
                                        className="w-full block h-auto object-cover max-h-[600px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Standard project cards ─────────────────────────────── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                >
                    {standardProjects.map((project, idx) => {
                        const isLoneCard = standardProjects.length % 3 === 1 && idx === standardProjects.length - 1;
                        return (
                            <StandardProjectCard
                                key={project.title}
                                project={project}
                                idx={idx + 1}
                                isLoneCard={isLoneCard}
                            />
                        );
                    })}
                </div>
            </div>

            {/* ── Photo Lightbox ────────────────────────────────────────────── */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center
                               bg-black/80 backdrop-blur-sm
                               animate-fade-in cursor-zoom-out"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Featured project fullscreen view"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 p-2 rounded-lg
                                   text-white/80 hover:text-white hover:bg-white/10
                                   transition-colors duration-200"
                        aria-label="Close photo"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Full image */}
                    <div
                        className="flex flex-col items-center"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <img
                            src={abnChattedImg}
                            alt="Alberta Benefits Navigator chat interface — full photo"
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg
                                       shadow-2xl shadow-black/50"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
