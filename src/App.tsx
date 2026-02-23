import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

/**
 * Root application component.
 * Composes all portfolio sections in order.
 */
function App() {
    return (
        <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <footer className="border-t border-white/10 py-8">
                <div className="section-container text-center">
                    <p className="text-slate-500 text-sm font-mono">
                        © {new Date().getFullYear()} Kier Vincent Oclares — Built with React + TypeScript + Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
