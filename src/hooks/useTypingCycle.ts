import { useState, useEffect } from 'react';

/**
 * Custom hook for cycling through animated title strings with a typewriter effect.
 * Extracted from Hero.tsx for reuse.
 */
export function useTypingCycle(
    words: string[],
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseMs = 2000
) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex] ?? '';

        const timeout = setTimeout(() => {
            if (!deleting) {
                if (charIndex < currentWord.length) {
                    setDisplayed(currentWord.slice(0, charIndex + 1));
                    setCharIndex((c) => c + 1);
                } else {
                    setTimeout(() => setDeleting(true), pauseMs);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayed(currentWord.slice(0, charIndex - 1));
                    setCharIndex((c) => c - 1);
                } else {
                    setDeleting(false);
                    setWordIndex((w) => (w + 1) % words.length);
                }
            }
        }, deleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayed, charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

    return displayed;
}
