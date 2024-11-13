import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg">
      <div className="site-container container-padding">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="text-xl font-semibold text-white">
            TheCraftWeb
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col space-y-2">
          <Link to="/" className="mobile-nav-item" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="mobile-nav-item" onClick={toggleMenu}>Services</Link>
          <Link to="/portfolio" className="mobile-nav-item" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/contact" className="mobile-nav-item" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}