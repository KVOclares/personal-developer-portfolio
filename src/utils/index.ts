/**
 * Utility functions for the portfolio application.
 * Add shared helpers here as the project grows.
 */

/**
 * Copy a string to the user's clipboard.
 * @returns `true` on success, `false` on failure.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
}
