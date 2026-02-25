/**
 * Button — primary and outline variants matching the design system.
 */

interface ButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
}

function Button({ label, href, onClick, variant = 'primary' }: ButtonProps) {
    const className = variant === 'primary' ? 'btn-primary' : 'btn-outline';

    if (href) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {label}
        </button>
    );
}

export default Button;
