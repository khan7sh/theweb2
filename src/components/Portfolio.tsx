import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Medical D4',
    category: 'Healthcare',
    description: 'Comprehensive medical services platform for D4 Medical, streamlining customer care and appointment management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['HIPAA Compliant', '24/7 Support', '98% Customer Satisfaction'],
    link: 'medicald4.com'
  },
  {
    title: 'OptimizeAI',
    category: 'AI Solutions',
    description: 'Advanced AI consulting platform offering cutting-edge solutions for business automation and optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['50+ AI Models', '40% Cost Reduction', '99.9% Accuracy'],
    link: 'optimizeai.agency'
  },
  {
    title: 'Nosh Cambridge',
    category: 'Restaurant',
    description: 'Modern restaurant website featuring online ordering, table reservations, and dynamic menu management.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920&h=1080',
    stats: ['85% Booking Increase', '4.9/5 Rating', '35% Revenue Growth'],
    link: 'noshecambridge.co.uk'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="section-padding bg-gradient-to-b from-gray-950 to-black">
      <div className="site-container container-padding">
        <div className="content-container">
          <div className="max-w-3xl mb-16 opacity-0 animate-fade-in-up animate-once">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="text-xl text-gray-400">
              Discover how we've helped businesses transform their digital presence and achieve 
              remarkable results.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} 
                   className={`flex flex-col lg:flex-row gap-12 items-center 
                            ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
                            opacity-0 animate-fade-in-up animate-once animate-delay-${(index + 2)}00`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="w-full lg:w-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="rounded-2xl subtle-border card-shadow w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                      <a href={`https://${project.link}`} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-purple-400 hover:text-purple-300 transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 lg:text-lg">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg subtle-border glass-effect">
                          <span className="text-sm lg:text-base text-gray-300">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 opacity-0 animate-fade-in-up animate-once animate-delay-800">
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg
                       subtle-border glass-effect text-gray-300 hover:text-white
                       hover:border-purple-500/20 transition-all duration-200
                       font-medium text-lg hover-lift"
            >
              View All Projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 
                                     group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}