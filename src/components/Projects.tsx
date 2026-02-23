import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';

/**
 * Projects section — card grid showing portfolio projects (currently all "coming soon").
 */
function Projects() {
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
        <section id="projects" ref={sectionRef} className="py-24 bg-navy-950/50">
            <div className="section-container">
                {/* Section header */}
                <div
                    data-animate
                    className="mb-12"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
                >
                    <p className="section-subheading">What I'm Building</p>
                    <h2 className="section-heading">Projects</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
                </div>

                {/* Project cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={project.title}
                            data-animate
                            className="card-glass p-6 flex flex-col cursor-default"
                            style={{
                                opacity: 0,
                                transform: 'translateY(24px)',
                                transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 
                                flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-electric-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>
                                </div>
                                {project.status === 'coming-soon' && (
                                    <span className="tag bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                        Coming Soon
                                    </span>
                                )}
                                {project.status === 'live' && (
                                    <span className="tag bg-green-500/10 text-green-400 border border-green-500/20">
                                        Live
                                    </span>
                                )}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="prose-muted text-sm flex-grow mb-5">{project.description}</p>

                            {/* Tech stack tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="tag bg-electric-500/10 text-electric-400 border border-electric-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-white/10">
                                {project.githubUrl ? (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline text-sm py-2 px-4"
                                    >
                                        GitHub
                                    </a>
                                ) : (
                                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                        </svg>
                                        Launching soon
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
