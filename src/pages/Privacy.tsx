import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="heading-xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-400">
                TheCraftWeb ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
              <p className="text-gray-400 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Fill out forms on our website</li>
                <li>Create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Apply for a job</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-400">
                When you visit our website, we automatically collect certain information about your device, 
                including information about your web browser, IP address, time zone, and some of the cookies 
                that are installed on your device.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your requests and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-400">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-400 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@thecraftweb.com
                <br />
                Address: 123 Web Street, London, UK
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}