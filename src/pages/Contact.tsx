import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      <main>
        <article>
          {/* Hero Section */}
          <header className="pt-32 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b0764,_transparent_50%)]"></div>
            <div className="max-w-7xl mx-auto container-padding relative">
              <div className="max-w-3xl">
                <h1 className="heading-xl mb-6">
                  Let's Discuss Your <span className="text-gradient">Next Project</span>
                </h1>
                <p className="text-xl text-gray-400">
                  We're here to help transform your digital vision into reality. Reach out to start a conversation about your project needs.
                </p>
              </div>
            </div>
          </header>

          {/* Contact Section */}
          <section aria-labelledby="contact-heading" className="py-24 bg-black relative">
            <h2 id="contact-heading" className="sr-only">Contact Information</h2>
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      Have a project in mind? We'd love to discuss how we can help bring your vision to life.
                    </p>
                  </div>
                  
                  <div className="p-8 rounded-2xl subtle-border glass-effect hover-lift transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email Us</h3>
                        <a 
                          href="mailto:contact@thecraftweb.com" 
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          contact@thecraftweb.com
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl subtle-border glass-effect">
                    <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-400">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                      <p>Weekend: By appointment only</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:pl-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
} 