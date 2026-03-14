import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] selection:bg-[var(--color-cyber-accent)] selection:text-black">
      {/* Background Textures */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800 text-sm text-gray-500 font-mono">
        <p>Designed & built by Youssef Bourbia © 2026</p>
      </footer>
    </div>
  );
}

export default App;
