import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

/**
 * Root application component.
 * Composes all portfolio sections in order.
 */
function App() {
    return (
        <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
            <Navbar />
            <main>
                <div className="w-full bg-[#0F172A]">
                    <Hero />
                </div>
                <div className="w-full bg-[#111827]">
                    <About />
                </div>
                <div className="w-full bg-[#0F172A]">
                    <Skills />
                </div>
                <div className="w-full bg-[#111827]">
                    <Experience />
                </div>
                <div className="w-full bg-[#0F172A]">
                    <Projects />
                </div>
                <div className="w-full bg-[#111827]">
                    <Education />
                </div>
                <div className="w-full bg-[#0F172A]">
                    <Contact />
                </div>
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </div>
    );
}

export default App;
