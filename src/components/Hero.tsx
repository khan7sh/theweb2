import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#312e81,_transparent_50%)]"></div>
      
      <div className="site-container container-padding relative pt-24 pb-12">
        <div className="max-w-4xl lg:max-w-5xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full subtle-border glass-effect mb-12 
                         opacity-0 animate-fade-in animate-once">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-3"></div>
            <span className="text-sm text-gray-300">TheCraftWeb - Digital Excellence</span>
          </div>
          
          <h1 className="heading-xl mb-12 text-white leading-[1.1]">
            <span className="block opacity-0 animate-fade-in-up animate-once">
              We Create
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-up animate-once animate-delay-200">
              Digital Experiences
            </span>
            <span className="block opacity-0 animate-fade-in-up animate-once animate-delay-300">
              That Drive Growth
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-16 leading-relaxed max-w-3xl 
                       opacity-0 animate-fade-in-up animate-once animate-delay-400">
            Elevate your digital presence with our expert team. We blend innovative design 
            with cutting-edge technology to create impactful web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up animate-once animate-delay-500">
            <a href="#contact" 
               className="group inline-flex items-center justify-center px-8 py-4 rounded-lg 
                        bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200
                        font-medium text-lg hover-lift">
              Start a Project
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" 
               className="inline-flex items-center justify-center px-8 py-4 rounded-lg
                        subtle-border glass-effect text-gray-300 hover:text-white
                        hover:border-purple-500/20 transition-all duration-200
                        font-medium text-lg hover-lift">
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
  );
}