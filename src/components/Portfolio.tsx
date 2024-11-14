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

          <div className="space-y-16 sm:space-y-24">
            {projects.map((project, index) => (
              <div key={index} 
                   className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center 
                            ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
                            opacity-0 animate-fade-in-up animate-once`}
                   style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group aspect-video">
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300 rounded-2xl"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="rounded-2xl subtle-border card-shadow w-full h-full object-cover"
                    />
                    <a href={`https://${project.link}`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium 
                                   hover:bg-gray-100 transition-colors">
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-purple-400 px-3 py-1 rounded-full subtle-border inline-block w-fit">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-base sm:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.stats.map((stat, idx) => (
                      <span key={idx} 
                            className="px-3 py-1 rounded-full text-sm text-gray-400 subtle-border">
                        {stat}
                      </span>
                    ))}
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