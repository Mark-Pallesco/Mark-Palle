import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import BackgroundGradient from './components/BackgroundGradient';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-midnight-base min-h-screen text-slate-900 dark:text-text-primary selection:bg-accent-purple selection:text-white font-sans overflow-x-hidden relative cursor-none transition-colors duration-300">
        <Cursor />
        <Preloader />
        <BackgroundGradient />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Services />
          <Portfolio />
          <TechStack />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
