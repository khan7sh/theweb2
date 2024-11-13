import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-20 pb-8">
      <div className="site-container container-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-semibold text-white">TheCraftWeb</span>
              </div>
              <p className="text-gray-400">
                Creating exceptional digital experiences that drive business growth and user engagement.
              </p>
              <div className="space-y-3">
                <a href="mailto:contact@thecraftweb.com" 
                   className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@thecraftweb.com
                </a>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +44 (0) 123 456 7890
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  London, United Kingdom
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    E-commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    API Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <a href="#contact" 
                     onClick={handleContactClick}
                     className="text-gray-400 hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} TheCraftWeb. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <a href="https://twitter.com/thecraftweb" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/thecraftweb" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/thecraftweb" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}