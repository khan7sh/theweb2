import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="heading-xl mb-8">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-400">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and allow certain features to function properly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Essential Cookies</h3>
              <p className="text-gray-400 mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Analytics Cookies</h3>
              <p className="text-gray-400 mb-4">
                We use analytics cookies to understand how visitors interact with our website. This 
                helps us improve our website's functionality and content.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">2.3 Marketing Cookies</h3>
              <p className="text-gray-400 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant 
                advertising or to limit how many times you see an ad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
              <p className="text-gray-400 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. 
                However, limiting cookies may impact your experience of our website.
              </p>
              <p className="text-gray-400">
                To learn more about cookies and how to manage them, visit:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mt-2">
                <li>Chrome: chrome://settings/cookies</li>
                <li>Firefox: about:preferences#privacy</li>
                <li>Safari: support.apple.com/guide/safari/manage-cookies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about our Cookie Policy, please contact us at:
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