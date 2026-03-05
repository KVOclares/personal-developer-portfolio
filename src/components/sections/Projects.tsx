import { Github, ExternalLink, Clock, Terminal, Lock, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
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

function StandardProjectCard({ project }: { project: Project }) {
    const [isRoleExpanded, setIsRoleExpanded] = useState(false);
    const style = STATUS_STYLES[project.status];

    return (
        <div
            role="listitem"
            data-animate
            className={`card-glass flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:border-electric-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/10 h-full w-full`}
            style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease 0s, transform 0.6s ease 0s',
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
                                    className="btn-green text-xs py-2 px-4"
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

    /* Separate standard and featured projects */
    const standardProjects = PROJECTS.filter((p) => !p.featured);
    const featuredProject = PROJECTS.find((p) => p.featured);

    // ── Carousel state ────────────────────────────────────────────────────────
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
    const ITEM_COUNT = standardProjects.length;
    // We render 3 sets of projects to achieve infinite scroll (pre, main, post).
    const extendedProjects = [...standardProjects, ...standardProjects, ...standardProjects];

    // Start at the first item of the middle set
    const [activeIndex, setActiveIndex] = useState(ITEM_COUNT);

    // ── Drag state ────────────────────────────────────────────────────────────
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setDragDistance(0);
        // Remove smooth scroll and snapping while dragging
        carouselRef.current.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeftState(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (carouselRef.current) {
            carouselRef.current.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
            // Snap back to closest slide on mouse leave
            scrollToSlide(activeIndex);
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (carouselRef.current) {
            carouselRef.current.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
            // Snap back to closest slide on mouse up
            scrollToSlide(activeIndex);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        setDragDistance(Math.abs(walk));
        carouselRef.current.scrollLeft = scrollLeftState - walk;
    };

    // Initial scroll setup instantly to the middle set
    useEffect(() => {
        const container = carouselRef.current;
        if (!container || ITEM_COUNT === 0) return;
        const child = container.children[ITEM_COUNT] as HTMLElement;
        if (child) {
            // Remove scroll-smooth so initial scroll is instant
            container.classList.remove('scroll-smooth');
            const scrollTarget = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
            container.scrollTo({ left: scrollTarget, behavior: 'instant' });

            // Re-enable smooth scrolling after position is set
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    container.classList.add('scroll-smooth');
                });
            });
        }
    }, [ITEM_COUNT]);


    const handleCarouselScroll = () => {
        if (!carouselRef.current || ITEM_COUNT === 0) return;
        const container = carouselRef.current;
        const scrollLeft = container.scrollLeft;

        let closestIndex = ITEM_COUNT;
        let minDiff = Infinity;
        const center = scrollLeft + container.clientWidth / 2;

        Array.from(container.children).forEach((child, index) => {
            const childNode = child as HTMLElement;
            const childRect = childNode.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const childCenter = childRect.left - containerRect.left + scrollLeft + childNode.clientWidth / 2;
            const diff = Math.abs(center - childCenter);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);

        // Infinite loop seamless reset logic
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            // If we've scrolled into the first set or the last set
            if (closestIndex < ITEM_COUNT || closestIndex >= ITEM_COUNT * 2) {
                const targetIndex = ITEM_COUNT + (closestIndex % ITEM_COUNT);
                const child = container.children[targetIndex] as HTMLElement;
                if (child) {
                    // Disable smooth scrolling temporarily to jump silently
                    container.classList.remove('scroll-smooth');
                    const childLeft = child.offsetLeft;
                    const scrollTarget = childLeft - (container.clientWidth - child.clientWidth) / 2;
                    container.scrollTo({ left: scrollTarget, behavior: 'instant' });
                    setActiveIndex(targetIndex);

                    // Re-enable smooth scrolling after jump
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            container.classList.add('scroll-smooth');
                        });
                    });
                }
            }
        }, 300); // Wait for scroll momentum to finish
    };

    const scrollToSlide = (index: number) => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;

        // Ensure smooth scrolling is on
        container.classList.add('scroll-smooth');
        const child = container.children[index] as HTMLElement;
        if (!child) return;

        const childLeft = child.offsetLeft;
        const scrollTarget = childLeft - (container.clientWidth - child.clientWidth) / 2;

        container.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    };

    const handlePrevSlide = () => {
        scrollToSlide(activeIndex - 1);
    };

    const handleNextSlide = () => {
        scrollToSlide(activeIndex + 1);
    };

    const handleIndicatorClick = (idx: number) => {
        // Go directly to the requested item in the middle set
        scrollToSlide(ITEM_COUNT + idx);
    };

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
                                                    className="btn-green text-xs py-2 px-4"
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

                {/* ── Standard project cards Carousel ──────────────────────── */}
                <div
                    className="relative w-full group mt-12"
                >
                    {/* Left/Right Navigation Buttons */}
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 
                                   bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-full
                                   text-white/70 hover:text-white hover:bg-electric-500/20 hover:border-electric-500/50
                                   transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNextSlide}
                        className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 
                                   bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-full
                                   text-white/70 hover:text-white hover:bg-electric-500/20 hover:border-electric-500/50
                                   transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        ref={carouselRef}
                        onScroll={handleCarouselScroll}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onClickCapture={(e) => {
                            if (dragDistance > 10) {
                                e.stopPropagation();
                                e.preventDefault();
                            }
                        }}
                        className={`flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar scroll-smooth relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        role="list"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)'
                        }}
                    >
                        {extendedProjects.map((project, idx) => (
                            <div
                                key={`${project.title}-${idx}`}
                                className="w-[85vw] md:w-[350px] lg:w-[380px] shrink-0 snap-center flex"
                            >
                                <StandardProjectCard
                                    project={project}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Carousel Indicators ────────────────────────────── */}
                <div className="flex justify-center items-center gap-2.5 mt-2">
                    {standardProjects.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            aria-label={`Go to project slide ${idx + 1}`}
                            onClick={() => handleIndicatorClick(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${(activeIndex % ITEM_COUNT) === idx
                                ? 'bg-electric-500 w-8'
                                : 'bg-white/20 hover:bg-white/40 w-2 hover:scale-110'
                                }`}
                        />
                    ))}
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
