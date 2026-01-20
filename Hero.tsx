
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId('contact');
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId('projects');
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            {PERSONAL_INFO.objective}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={scrollToContact}
              className="flex items-center px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-indigo-200 cursor-pointer"
            >
              Get in touch <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button 
              onClick={scrollToProjects}
              className="flex items-center px-8 py-3 bg-white text-indigo-600 border border-indigo-100 rounded-xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              View My Work
            </button>
          </div>

          {/* Social & Contact Icons Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 text-indigo-600 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300 group"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 text-indigo-600 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300 group"
                title="Call Me"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 text-indigo-600 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300 group"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center text-slate-500 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                {PERSONAL_INFO.address}
              </div>
            </div>
            
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-slate-200"></span>
              Connect with me
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-slate-200">
              <img 
                src="https://picsum.photos/seed/mahadharsini/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-xl border-indigo-50 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">71%</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Current B.Sc<br/>Grade Average
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
