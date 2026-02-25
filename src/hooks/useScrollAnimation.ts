import { useEffect, useRef } from 'react';

/**
 * Custom hook for triggering scroll-based CSS animations via IntersectionObserver.
 * Observes all children with [data-animate] and adds 'animate-in' class when visible.
 *
 * @param threshold - Intersection threshold (0–1). Default: 0.1
 * @returns A ref to attach to the section container element.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
    const ref = useRef<T>(null);

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
            { threshold }
        );

        const el = ref.current;
        if (el) {
            el.querySelectorAll('[data-animate]').forEach((child) => observer.observe(child));
        }

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
