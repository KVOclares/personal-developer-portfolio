/**
 * SectionHeader — consistent heading style used across all sections.
 */

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    /** Optional id for the h2, enabling aria-labelledby references. */
    headingId?: string;
}

function SectionHeader({ title, subtitle, headingId }: SectionHeaderProps) {
    return (
        <div className="mb-12">
            {subtitle && <p className="section-subheading">{subtitle}</p>}
            <h2 id={headingId} className="section-heading">{title}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
        </div>
    );
}

export default SectionHeader;
