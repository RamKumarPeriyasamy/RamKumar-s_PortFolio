import { useEffect, useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome page for 3.5 seconds before transitioning to main content
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomePage />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;