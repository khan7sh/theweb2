import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    value: 'contact@thecraftweb.com',
    link: 'mailto:contact@thecraftweb.com'
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    value: '+44 (0) 123 456 7890',
    link: 'tel:+441234567890'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Location',
    value: 'London, United Kingdom',
    link: 'https://maps.google.com'
  }
];

export default function ContactPage() {
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
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-gray-400">
                Ready to start your next project? Get in touch with us and let's create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Details */}
      <section className="bg-gray-800 py-16">
        <div className="site-container container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactDetails.map((contact, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-4">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <a href={contact.link} className="text-sm text-gray-400 hover:text-white">
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="bg-gray-700 py-16">
        <div className="site-container container-padding">
          <h2 className="heading-lg mb-6">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 