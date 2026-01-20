
import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for feedback
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Optional: Log the form data or handle it
      console.log("Form submitted successfully");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Contact Me" 
          subtitle="Have a question or want to work together? Drop me a message!"
        />
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100">
              <h3 className="text-xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">Email</p>
                    <p className="font-medium break-all">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">Phone</p>
                    <p className="font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-slate-100 rounded-3xl">
              <h4 className="font-bold mb-4">Availability</h4>
              <p className="text-slate-600 text-sm">Open to internship opportunities, freelance web development, and collaborative projects.</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden min-h-[500px] flex items-center">
            {isSubmitted ? (
              <div className="w-full text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out, {PERSONAL_INFO.name} will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-indigo-600 font-bold hover:text-indigo-800 transition-colors underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full md:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 transform active:scale-95 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
