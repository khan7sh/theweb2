import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Heart, Clock, Sparkles } from 'lucide-react';

const highlights = [
  { 
    icon: <Clock className="h-5 w-5" />,
    label: 'Response Time', 
    value: '< 2h'
  },
  { 
    icon: <Sparkles className="h-5 w-5" />,
    label: 'Client Satisfaction', 
    value: '100%'
  },
  { 
    icon: <Code2 className="h-5 w-5" />,
    label: 'Code Quality', 
    value: 'A+'
  },
  { 
    icon: <Heart className="h-5 w-5" />,
    label: 'Support', 
    value: '24/7'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="site-container container-padding">
        <div className="content-container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up animate-once">
            <h2 className="heading-lg mb-4">
              About <span className="text-gradient">TheCraftWeb</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16">
              We're not your typical web agency. As digital natives, we bring fresh perspectives 
              and innovative approaches to every project, unbound by conventional limitations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-up animate-once animate-delay-200">
              {highlights.map((item, index) => (
                <div key={index} 
                     className="p-6 rounded-xl subtle-border glass-effect hover-lift 
                              card-shadow transition-all duration-300">
                  <div className="text-purple-400 mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-2">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 opacity-0 animate-fade-in-up animate-once animate-delay-300">
              <div className="p-10 rounded-2xl subtle-border glass-effect group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl 
                              group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gradient 
                               transition-colors duration-300">Our Mission</h3>
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 
                               leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, 
                    enhance user experience, and create lasting impact in the digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-lg
                           subtle-border glass-effect text-gray-300 hover:text-white
                           hover:border-purple-500/20 transition-all duration-200
                           font-medium text-lg hover-lift"
                >
                  Learn More About Us
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 
                                       group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 