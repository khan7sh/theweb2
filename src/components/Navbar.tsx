import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionScroll = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-colors duration-200 ${
        isScrolled ? 'glass-effect py-2' : 'py-4'
      }`}>
        <div className="site-container container-padding">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 text-purple-400 transition-transform group-hover:scale-110" />
              <span className="text-xl font-semibold text-white">TheCraftWeb</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#about" 
                 onClick={(e) => handleSectionScroll('about', e)}
                 className="text-gray-300 hover:text-white transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                             transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#services"
                 onClick={(e) => handleSectionScroll('services', e)}
                 className="text-gray-300 hover:text-white transition-colors relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                             transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#portfolio"
                 onClick={(e) => handleSectionScroll('portfolio', e)}
                 className="text-gray-300 hover:text-white transition-colors relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 
                             transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#contact"
                 onClick={(e) => handleSectionScroll('contact', e)}
                 className="px-6 py-3 rounded-lg bg-white text-gray-900 
                          hover:bg-gray-100 transition-all duration-200 font-medium">
                Contact
              </a>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden mobile-nav ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="site-container container-padding">
          <div className="space-y-2">
            <a href="#about"
               className="mobile-nav-item"
               onClick={(e) => handleSectionScroll('about', e)}>
              About
            </a>
            <a href="#services"
               className="mobile-nav-item"
               onClick={(e) => handleSectionScroll('services', e)}>
              Services
            </a>
            <a href="#portfolio"
               className="mobile-nav-item"
               onClick={(e) => handleSectionScroll('portfolio', e)}>
              Portfolio
            </a>
            <a href="#contact"
               className="mobile-nav-item bg-white text-gray-900 hover:bg-gray-100"
               onClick={(e) => handleSectionScroll('contact', e)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}