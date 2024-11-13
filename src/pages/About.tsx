import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Target, Award, Zap, Clock, Sparkles, Code2, Heart } from 'lucide-react';

const stats = [
  { 
    icon: <Clock className="h-5 w-5" />,
    label: 'Response Time', 
    value: '< 2h',
    subtext: 'Average'
  },
  { 
    icon: <Sparkles className="h-5 w-5" />,
    label: 'Client Satisfaction', 
    value: '100%',
    subtext: 'Success Rate'
  },
  { 
    icon: <Code2 className="h-5 w-5" />,
    label: 'Code Quality', 
    value: 'A+',
    subtext: 'Standards'
  },
  { 
    icon: <Heart className="h-5 w-5" />,
    label: 'Support', 
    value: '24/7',
    subtext: 'Availability'
  }
];

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Client-Focused',
    description: "We prioritize our clients' needs and goals, ensuring every project delivers exceptional value and results."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our work, from code quality to user experience.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaboration',
    description: 'We believe in strong partnerships with our clients, working together to achieve shared success.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, embracing new solutions that drive better results.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              About <span className="text-gradient">TheCraftWeb</span>
            </h1>
            <p className="text-xl text-gray-400">
              We're a young, dynamic team of digital craftsmen dedicated to creating 
              exceptional web experiences that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} 
                   className="relative p-8 rounded-xl subtle-border glass-effect hover-lift 
                            overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 text-purple-400/20 
                              transform translate-x-2 -translate-y-2 group-hover:text-purple-400/40 
                              transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Our Mission</h2>
            <p className="text-xl text-gray-400">
              To empower businesses with innovative digital solutions that drive growth, 
              enhance user experience, and create lasting impact in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="heading-lg mb-12 text-center">
            <span className="text-gradient">Our Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} 
                   className="p-6 rounded-xl subtle-border glass-effect hover-lift
                            group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 
                                transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="heading-lg mb-12 text-center">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl subtle-border glass-effect hover-lift group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient">
                Fresh Perspective
              </h3>
              <p className="text-gray-400">
                As a new agency, we bring fresh ideas and innovative approaches to every project, 
                unbound by conventional limitations.
              </p>
            </div>
            <div className="p-8 rounded-2xl subtle-border glass-effect hover-lift group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient">
                Dedicated Attention
              </h3>
              <p className="text-gray-400">
                With a focused client base, we provide personalized attention and care that larger 
                agencies simply can't match.
              </p>
            </div>
            <div className="p-8 rounded-2xl subtle-border glass-effect hover-lift group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient">
                Modern Stack
              </h3>
              <p className="text-gray-400">
                We exclusively use cutting-edge technologies and best practices to ensure your 
                project is future-proof and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}