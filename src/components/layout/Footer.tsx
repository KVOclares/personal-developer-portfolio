/**
 * Footer component — site-wide copyright notice.
 */
function Footer() {
    return (
        <footer className="border-t border-white/10 py-8">
            <div className="section-container text-center">
                <p className="text-slate-500 text-sm font-mono">
                    © {new Date().getFullYear()} Kier Vincent Oclares — Built with React + TypeScript + Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

export default Footer;
