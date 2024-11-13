import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="heading-xl mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400">
                By accessing or using our services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
              <p className="text-gray-400">
                We provide web development, design, and related digital services. Our services are subject 
                to change or termination without notice. We reserve the right to refuse service to anyone 
                for any reason at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p className="text-gray-400 mb-4">
                The content, features, and functionality of our services are owned by TheCraftWeb and are 
                protected by international copyright, trademark, patent, trade secret, and other intellectual 
                property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
              <p className="text-gray-400 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Not use our services for any illegal purposes</li>
                <li>Not violate any laws in your jurisdiction</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <p className="text-gray-400">
                Payment terms are established in individual service agreements. All fees are non-refundable 
                unless otherwise specified in writing. Late payments may result in service suspension.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-400">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Terms</h2>
              <p className="text-gray-400">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-400">
                Questions about the Terms of Service should be sent to:
                <br />
                Email: legal@thecraftweb.com
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