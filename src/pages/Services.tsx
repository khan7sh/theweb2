import React from 'react';
import { Laptop, Smartphone, Rocket, Gauge, Code2, Database, Lock, Palette, Zap, Globe2, BarChart, Cloud } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mainServices = [
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

const additionalServices = [
  {
    icon: <Code2 />,
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces built with React, Vue, or Angular'
  },
  {
    icon: <Database />,
    title: 'Backend Development',
    description: 'Scalable server solutions with Node.js, Python, or Java'
  },
  {
    icon: <Lock />,
    title: 'Security',
    description: 'Implementation of best security practices and regular audits'
  },
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    description: 'User-centered design approach with intuitive interfaces'
  },
  {
    icon: <Zap />,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with comprehensive documentation'
  },
  {
    icon: <Globe2 />,
    title: 'CMS Integration',
    description: 'WordPress, Shopify, and headless CMS solutions'
  },
  {
    icon: <BarChart />,
    title: 'Analytics',
    description: 'Data-driven insights and performance monitoring'
  },
  {
    icon: <Cloud />,
    title: 'Cloud Services',
    description: 'AWS, Google Cloud, and Azure deployment expertise'
  }
];

const technologies = [
  'React', 'Next.js', 'Vue', 'Node.js', 'TypeScript', 'Python',
  'AWS', 'Docker', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Expert <span className="text-gradient">Web Services</span>
              <br />for Modern Businesses
            </h1>
            <p className="text-xl text-gray-400">
              From concept to deployment, we provide end-to-end web development solutions 
              that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} 
                   className="group p-8 rounded-2xl subtle-border glass-effect hover-lift 
                            card-shadow transition-all duration-300">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="heading-lg mb-12 text-center">
            <span className="text-gradient">Additional Services</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} 
                   className="p-6 rounded-xl subtle-border glass-effect hover-lift">
                <div className="text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Technologies We Use</span>
            </h2>
            <p className="text-lg text-gray-400">
              We work with the latest technologies to deliver modern solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} 
                   className="px-6 py-3 rounded-full subtle-border glass-effect
                            hover:border-purple-500/20 transition-all duration-200">
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}