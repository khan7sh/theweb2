import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = ['All', 'Healthcare', 'AI Solutions', 'Restaurant', 'E-commerce', 'Web Development'];

const projects = [
  {
    title: 'Medical D4',
    category: 'Healthcare',
    description: 'Comprehensive medical services platform for D4 Medical, streamlining customer care and appointment management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['HIPAA Compliant', '24/7 Support', '98% Customer Satisfaction'],
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'medicald4.com'
  },
  {
    title: 'OptimizeAI',
    category: 'AI Solutions',
    description: 'Advanced AI consulting platform offering cutting-edge solutions for business automation and optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['50+ AI Models', '40% Cost Reduction', '99.9% Accuracy'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: 'optimizeai.agency'
  },
  {
    title: 'Nosh Cambridge',
    category: 'Restaurant',
    description: 'Modern restaurant website featuring online ordering, table reservations, and dynamic menu management.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['85% Booking Increase', '4.9/5 Rating', '35% Revenue Growth'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: 'noshecambridge.co.uk'
  },
  {
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'A modern e-commerce solution with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['50K+ Users', '99.9% Uptime', '2s Load Time'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Modern corporate website with CMS integration and multilingual support.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['10+ Languages', '1.5s Load Time', '45% Bounce Rate'],
    technologies: ['Next.js', 'Strapi', 'AWS'],
    link: '#'
  },
  {
    title: 'Food Delivery App',
    category: 'E-commerce',
    description: 'Restaurant marketplace with real-time order tracking and payment processing.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['100K+ Orders', '2K+ Restaurants', '4.8/5 Rating'],
    technologies: ['Next.js', 'Node.js', 'Redis'],
    link: '#'
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
        <div className="site-container container-padding relative">
          <div className="content-container">
            <div className="max-w-3xl opacity-0 animate-fade-in-up animate-once">
              <h1 className="heading-xl mb-6">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-400">
                Explore our latest projects and discover how we've helped businesses 
                achieve their digital goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="site-container container-padding">
          <div className="content-container">
            <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up animate-once animate-delay-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 hover-lift
                            ${activeCategory === category 
                              ? 'bg-white text-gray-900' 
                              : 'subtle-border glass-effect text-gray-400 hover:text-white'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="site-container container-padding">
          <div className="content-container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <div key={index} 
                     className={`group opacity-0 animate-fade-in-up animate-once 
                                animate-delay-${(index % 4 + 3)}00`}>
                  <div className="relative overflow-hidden rounded-2xl subtle-border card-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full transform transition-transform duration-500 
                                 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
                      <div className="absolute bottom-0 p-6 lg:p-8 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-purple-400">{project.category}</span>
                          {project.link !== '#' && (
                            <a href={`https://${project.link}`} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-purple-400 hover:text-purple-300">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        
                        <div className="pt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} 
                                  className="px-3 py-1 text-sm rounded-full glass-effect 
                                           text-gray-300 subtle-border">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          {project.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <span className="text-sm text-gray-400">{stat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}