import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Handle section scrolling
    const handleScroll = () => {
      if (location.state?.scrollToSection) {
        const section = document.getElementById(location.state.scrollToSection);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          // Clear the state
          window.history.replaceState({}, document.title);
        }
      }
    };

    // Delay scroll to ensure components are mounted
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}