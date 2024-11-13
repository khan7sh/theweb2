import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Rocket, Gauge, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'API Integration', 'Database Design']
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Responsive Design',
    description: 'Mobile-first designs that look and work perfectly on all devices and screen sizes.',
    features: ['Mobile Optimization', 'Cross-browser Support', 'Touch-friendly UI']
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve your search engine rankings and online visibility.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Metrics']
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: 'Performance',
    description: 'Lightning-fast loading speeds and optimal performance for the best user experience.',
    features: ['Core Web Vitals', 'Code Optimization', 'CDN Integration']
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-950">
      <div className="site-container container-padding">
        <div className="content-container">
          <div className="max-w-3xl animate-fade-in-up">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16">
              We deliver comprehensive web solutions that combine cutting-edge technology 
              with exceptional user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                   className="group p-6 sm:p-8 rounded-2xl subtle-border glass-effect hover-lift 
                            card-shadow transition-all duration-300 animate-fade-in-up"
                   style={{ animationDelay: `${200 * (index + 1)}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-purple-400 
                                       transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 lg:text-lg">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm lg:text-base text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center opacity-0 animate-fade-in-up animate-once animate-delay-600">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg
                       subtle-border glass-effect text-gray-300 hover:text-white
                       hover:border-purple-500/20 transition-all duration-200
                       font-medium text-lg hover-lift"
            >
              View All Services
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 
                                     group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}