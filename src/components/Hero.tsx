import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#312e81,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full subtle-border glass-effect mb-8 sm:mb-12 
                       animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-3"></div>
            <span className="text-sm text-gray-300">TheCraftWeb - Digital Excellence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
            <span className="block animate-fade-in-up">We Create</span>
            <span className="block text-gradient animate-fade-in-up delay-200">Digital Experiences</span>
            <span className="block animate-fade-in-up delay-300">That Drive Growth</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl animate-fade-in-up delay-400">
            Elevate your digital presence with our expert team. We blend innovative design 
            with cutting-edge technology to create impactful web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
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
    </div>
  );
}