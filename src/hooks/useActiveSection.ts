import { useState, useEffect, useRef } from 'react';

/** Shape of a navigation link used by the Navbar. */
interface NavLink {
    label: string;
    href: string;
}

/**
 * Watches every section referenced by `navLinks` with an IntersectionObserver
 * and returns the `href` of whichever section is currently most visible.
 *
 * Uses a persistent `Map` to track all currently-intersecting sections so that
 * the active section updates correctly even when the observer only fires for a
 * subset of entries in each callback.
 *
 * @param navLinks - Array of navigation link objects whose `href` values
 *                   correspond to section element ids (e.g. "#about").
 * @returns The `href` string of the currently active section.
 */
export function useActiveSection(navLinks: NavLink[]): string {
    const [activeHref, setActiveHref] = useState<string>(navLinks[0]?.href ?? '');

    // Persistent map: sectionId → IntersectionObserverEntry
    const visibleMap = useRef<Map<string, IntersectionObserverEntry>>(new Map());

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

        // Reset on re-mount
        visibleMap.current.clear();

        const observer = new IntersectionObserver(
            (entries) => {
                // Update the persistent map with every entry in this batch.
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        visibleMap.current.set(entry.target.id, entry);
                    } else {
                        visibleMap.current.delete(entry.target.id);
                    }
                }

                // Of all currently-visible sections, pick the one whose top
                // edge is closest to the top of the viewport (but still within
                // the observed root margin).
                let bestId: string | null = null;
                let bestTop = Infinity;

                for (const [id, entry] of visibleMap.current) {
                    const top = entry.boundingClientRect.top;
                    if (top < bestTop) {
                        bestTop = top;
                        bestId = id;
                    }
                }

                if (bestId) {
                    setActiveHref(`#${bestId}`);
                }
            },
            {
                // Observe when a section enters roughly the top-third of the
                // viewport. The negative top margin means "don't count it until
                // it's 10% past the top edge", and the large negative bottom
                // margin means "stop counting once it passes the top 40%".
                rootMargin: '-70% 0px -30% 0px',
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
            },
        );

        const elements: Element[] = [];

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
                elements.push(el);
            }
        }

        return () => {
            for (const el of elements) {
                observer.unobserve(el);
            }
            visibleMap.current.clear();
        };
    }, [navLinks]);

    return activeHref;
}
