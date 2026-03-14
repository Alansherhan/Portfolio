import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TerminalSkills from './components/TerminalSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-white min-h-screen selection:bg-brand-primary/30 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <TerminalSkills />
        <Experience />
        <Projects />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}

export default App;
