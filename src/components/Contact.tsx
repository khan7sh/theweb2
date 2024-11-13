import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactSubmission } from '../types/database';

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up animate-once">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Start Your Project</span>
            </h2>
            <p className="text-lg text-gray-400">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg
                         text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg
                         text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg
                         text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900
                         rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">
                There was an error submitting your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}