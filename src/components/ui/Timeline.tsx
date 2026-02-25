/**
 * Timeline — vertical timeline with left border accent line.
 * Uses the `kind` discriminator to render different layouts for Experience vs Education entries.
 */
import type { ExperienceEntry, EducationEntry } from '../../types';

type TimelineItem = ExperienceEntry | EducationEntry;

interface TimelineProps {
    items: TimelineItem[];
}

function isExperience(item: TimelineItem): item is ExperienceEntry {
    return item.kind === 'experience';
}

function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Vertical accent line */}
            <div
                className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/60 via-electric-500/20 to-transparent"
                aria-hidden="true"
            />

            <div className="space-y-10">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative pl-16"
                    >
                        {/* Timeline dot */}
                        <div
                            className="absolute left-0 top-6 w-12 h-12 rounded-full flex items-center justify-center bg-navy-800 border-2 border-white/20"
                            aria-hidden="true"
                        >
                            {isExperience(item) ? (
                                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                            )}
                        </div>

                        {/* Card */}
                        <div className="card-glass p-6 cursor-default">
                            {isExperience(item) ? (
                                <>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-electric-400 font-semibold">{item.company}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-slate-400 text-sm font-mono whitespace-nowrap">{item.period}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{item.location}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {item.description.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                                <span className="text-electric-500 mt-1.5 flex-shrink-0" aria-hidden="true">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.78 7.78-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.97 1.97 4.97-4.97a.75.75 0 0 1 1.06 1.06z" />
                                                    </svg>
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.field}</h3>
                                    <p className="text-electric-400 font-semibold text-sm mb-1">{item.degree}</p>
                                    <p className="text-slate-400 text-sm mb-1">{item.institution}</p>
                                    <p className="text-slate-500 text-xs font-mono mb-4">{item.period}</p>
                                    {item.highlights && (
                                        <ul className="space-y-2 border-t border-white/10 pt-4">
                                            {item.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex gap-3 text-sm text-slate-400">
                                                    <svg className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
