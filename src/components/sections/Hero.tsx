import { PROFILE } from '../../data/profile';
import { useTypingCycle } from '../../hooks/useTypingCycle';

/**
 * Hero section — full viewport introduction with animated cycling titles and CTA buttons.
 */
function Hero() {
    const animatedTitle = useTypingCycle(PROFILE.titles);

    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/8 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10 py-32 text-center">
                {/* Greeting badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/20 
                        rounded-full mb-8 animate-fade-in">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                    <span className="text-electric-400 text-sm font-mono font-medium">
                        Available for opportunities
                    </span>
                </div>

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
                    <span className="text-white">Kier Vincent </span>
                    <span className="text-gradient">Oclares</span>
                </h1>

                {/* Animated cycling title */}
                <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
                    <p className="text-xl sm:text-2xl font-mono font-semibold text-electric-400">
                        {animatedTitle}
                        <span className="animate-type-cursor text-electric-400 ml-0.5">|</span>
                    </p>
                </div>

                {/* Location */}
                <p className="flex items-center justify-center gap-2 text-slate-400 mb-10 animate-fade-in">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.079 3.218-4.417 3.218-7.327C19.5 6.108 16.171 3 12 3 7.828 3 4.5 6.108 4.5 10a9.5 9.5 0 0 0 .293 2.36 15.74 15.74 0 0 0 .765 2.17 18.573 18.573 0 0 0 2.207 3.764 17.075 17.075 0 0 0 1.487 1.687c.292.284.582.552.862.803l.071.063.028.025.014.011.005.004A.752.752 0 0 0 11.54 22.351zM12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" clipRule="evenodd" />
                    </svg>
                    {PROFILE.location}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                    <button
                        onClick={() => scrollTo('#projects')}
                        className="btn-primary"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0 1 15.75 3H18a2.25 2.25 0 0 1 2.25 2.25v2.25A2.25 2.25 0 0 1 18 9.75h-2.25A2.25 2.25 0 0 1 13.5 7.5V5.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z" />
                        </svg>
                        View Projects
                    </button>
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="btn-outline"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        Get In Touch
                    </button>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in">
                    <a
                        href="https://github.com/KVOclares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 
                       border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                        aria-label="GitHub profile"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kier-vincent-o-2150051a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 
                       border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                        aria-label="LinkedIn profile"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:KierVOclares@gmail.com"
                        className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 
                       border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                        aria-label="Send email"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
                    <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Hero;
