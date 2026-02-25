/**
 * Badge — a styled pill/tag for skills, statuses, and tech stack items.
 */

interface BadgeProps {
    label: string;
    variant?: 'skill' | 'status' | 'stack';
}

const variantStyles: Record<string, string> = {
    skill: 'bg-electric-500/10 text-electric-400 border-electric-500/20',
    status: 'bg-green-500/10 text-green-400 border-green-500/20',
    stack: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

function Badge({ label, variant = 'skill' }: BadgeProps) {
    return (
        <span
            className={`inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-md border ${variantStyles[variant]}`}
        >
            {label}
        </span>
    );
}

export default Badge;
