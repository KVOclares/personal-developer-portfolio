import { Building2, MapPin, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { EXPERIENCE } from '../../data/experience';

export default function Experience() {
    const sectionRef = useScrollAnimation<HTMLElement>(0.1);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-24 section-container relative"
            role="region"
            aria-labelledby="experience-heading"
        >
            <div id="experience-heading" className="sr-only">Experience</div>
            <SectionHeader title="Experience" subtitle="My professional journey so far" />

            <div className="relative mt-12 bg-navy-900" role="list">
                {/* Vertical Timeline Line */}
                <div
                    data-animate
                    className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-electric-500/30 origin-top scale-y-0 transition-transform duration-1000 ease-out"
                />

                <div className="flex flex-col gap-12">
                    {EXPERIENCE.map((entry, index) => {
                        const isGoA = entry.current;

                        return (
                            <div
                                key={`exp-${index}`}
                                className="relative flex flex-col md:flex-row gap-8 md:gap-12"
                                role="listitem"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 flex items-center justify-center">
                                    <div
                                        data-animate
                                        className="relative flex items-center justify-center w-8 h-8 scale-0 transition-transform duration-500 delay-300"
                                        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', transitionDelay: `${index * 150 + 300}ms` }}
                                        aria-label={isGoA ? "Current position" : undefined}
                                    >
                                        <div className={`absolute w-8 h-8 rounded-full bg-electric-500/10 ${isGoA ? 'animate-pulse' : ''}`} />
                                        <div className="absolute w-4 h-4 rounded-full bg-electric-500" />
                                    </div>
                                </div>

                                {/* Spacer for Timeline Dot on desktop/mobile */}
                                <div className="w-10 md:w-16 shrink-0" />

                                {/* Experience Entry Card */}
                                <div
                                    data-animate
                                    className="flex-1 bg-navy-800/40 border border-white/5 p-6 rounded-2xl opacity-0 translate-x-8 transition-all duration-700 ease-out hover:border-electric-500/30"
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    {/* Top row */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                        <h3 className="text-xl font-bold text-white">{entry.title}</h3>
                                        <div
                                            className="inline-flex max-w-max items-center justify-center bg-electric-500/10 text-electric-400 text-xs px-3 py-1 rounded-full border border-electric-500/20 whitespace-nowrap"
                                            aria-label={`${entry.title} at ${entry.company}, ${entry.period}`}
                                        >
                                            {entry.period}
                                        </div>
                                    </div>

                                    {/* Second row */}
                                    <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                                        <div className="flex items-center gap-1.5 text-electric-400 font-medium">
                                            <Building2 className="w-4 h-4" />
                                            <span>{entry.company}</span>
                                        </div>
                                        <span className="text-gray-600">·</span>
                                        <div className="flex items-center gap-1.5 text-gray-400">
                                            <MapPin className="w-4 h-4" />
                                            <span>{entry.location}</span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <hr className="border-gray-800 my-4" />

                                    {/* Bullet points */}
                                    <ul className="space-y-3">
                                        {entry.description.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start gap-3 group">
                                                <ChevronRight
                                                    className="w-4 h-4 text-electric-500 shrink-0 mt-0.5"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-gray-300 text-sm leading-relaxed transition-colors group-hover:text-white">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Highlights Row (Current Role only) */}
                                    {isGoA && entry.highlights && (
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {entry.highlights.map((highlight, hIndex) => (
                                                <Badge key={hIndex} variant="stack" label={highlight} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
