import { GraduationCap, Award, ShieldCheck, BookOpen } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, CURRENTLY_LEARNING } from '../../data/education';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import type { EducationEntry, Certification } from '../../types';

/** Status → colour mapping for certification badges. */
const CERT_STATUS_STYLES: Record<Certification['status'], string> = {
    active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    expired: 'bg-red-500/10 text-red-400 border-red-500/20',
    'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const CERT_STATUS_LABELS: Record<Certification['status'], string> = {
    active: 'Active',
    expired: 'Expired',
    'in-progress': 'In Progress',
};

/**
 * Education section — two-column layout with education cards,
 * certifications, and a "Currently Learning" sidebar.
 */
function Education() {
    const sectionRef = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="education"
            ref={sectionRef}
            className="py-24"
            role="region"
            aria-labelledby="education-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* ── Left Column (40%) ──────────────────────────── */}
                    <div
                        className="lg:col-span-2"
                        data-animate
                        style={{
                            opacity: 0,
                            transform: 'translateX(-20px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                    >
                        <SectionHeader
                            title="Education"
                            subtitle="Foundations that shaped how I think"
                            headingId="education-heading"
                        />

                        {/* Personal note */}
                        <blockquote className="mt-6 border-l-[3px] border-electric-500 pl-4 italic text-gray-400 text-sm leading-relaxed">
                            I have two NAIT diplomas with Honors and I am currently building
                            the full stack skills to match my data engineering background
                            &mdash; one project at a time.
                        </blockquote>

                        {/* Currently Learning */}
                        <div className="mt-8" aria-label="Technologies currently being learned">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                                Currently Learning
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {CURRENTLY_LEARNING.map((topic) => (
                                    <span
                                        key={topic}
                                        className="bg-electric-500/5 border border-electric-500/20 text-electric-400/70
                                                   text-xs px-3 py-1 rounded-full animate-pulse"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column (60%) ─────────────────────────── */}
                    <div className="lg:col-span-3">
                        {/* Education cards */}
                        <div role="list" className="space-y-6">
                            {EDUCATION.map((entry: EducationEntry, idx: number) => (
                                <div
                                    key={entry.field}
                                    role="listitem"
                                    data-animate
                                    className="bg-navy-800/60 border border-gray-800 rounded-xl p-6
                                               hover:border-electric-500/30 hover:-translate-y-0.5
                                               transition-all duration-200"
                                    style={{
                                        opacity: 0,
                                        transform: 'translateY(15px)',
                                        transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
                                    }}
                                >
                                    {/* Top row — institution + period */}
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <GraduationCap
                                                className="w-5 h-5 text-electric-400 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="text-gray-300 text-sm font-medium truncate">
                                                {entry.institution}
                                            </span>
                                        </div>
                                        <span className="bg-electric-500/10 text-electric-400 text-xs px-3 py-1 rounded-full border border-electric-500/20 whitespace-nowrap flex-shrink-0">
                                            {entry.period}
                                        </span>
                                    </div>

                                    {/* Credential + field */}
                                    <h3 className="text-base font-bold text-white mb-0.5">
                                        {entry.degree}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">{entry.field}</p>

                                    {/* Honors badge */}
                                    {entry.honors && (
                                        <span
                                            className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400
                                                       border border-amber-500/20 text-xs px-2 py-0.5 rounded-full mb-3"
                                            aria-label="Dean's Honour Roll"
                                        >
                                            <Award className="w-3 h-3" aria-hidden="true" />
                                            Dean&apos;s Honour Roll
                                        </span>
                                    )}

                                    {/* Coursework */}
                                    {entry.coursework && entry.coursework.length > 0 && (
                                        <div className="mt-3 pt-3 border-t border-white/5">
                                            <p className="text-gray-500 text-xs mb-1">Coursework</p>
                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                {entry.coursework.join(', ')}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Certifications block */}
                        {CERTIFICATIONS.length > 0 && (
                            <div
                                data-animate
                                className="mt-10"
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(15px)',
                                    transition: `opacity 0.6s ease ${EDUCATION.length * 0.1 + 0.2}s, transform 0.6s ease ${EDUCATION.length * 0.1 + 0.2}s`,
                                }}
                            >
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                                    Certifications &amp; Training
                                </p>

                                <div className="space-y-3">
                                    {CERTIFICATIONS.map((cert: Certification) => (
                                        <div
                                            key={cert.title}
                                            className="bg-navy-800/60 border border-gray-800 rounded-xl p-4
                                                       flex items-center justify-between gap-4
                                                       hover:border-electric-500/30 hover:-translate-y-0.5
                                                       transition-all duration-200"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <BookOpen
                                                    className="w-4 h-4 text-electric-400 flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                                <div className="min-w-0">
                                                    <p className="text-white text-sm font-medium truncate">
                                                        {cert.title}
                                                    </p>
                                                    <p className="text-gray-500 text-xs truncate">
                                                        {cert.issuer}
                                                    </p>
                                                </div>
                                            </div>
                                            <span
                                                className={`text-xs px-2.5 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${CERT_STATUS_STYLES[cert.status]}`}
                                            >
                                                {CERT_STATUS_LABELS[cert.status]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
