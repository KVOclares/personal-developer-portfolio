/**
 * SectionHeader — consistent heading style used across all sections.
 */

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="mb-12">
            {subtitle && <p className="section-subheading">{subtitle}</p>}
            <h2 className="section-heading">{title}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-electric-500 to-accent-cyan rounded-full" />
        </div>
    );
}

export default SectionHeader;
