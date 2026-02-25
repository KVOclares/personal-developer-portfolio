/**
 * Card — a reusable wrapper with navy-light background, rounded corners, and hover effect.
 */
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`card-glass p-6 cursor-default ${className}`}>
            {children}
        </div>
    );
}

export default Card;
