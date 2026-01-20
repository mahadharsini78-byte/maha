
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">MAHADHARSINI.R</h2>
            <p className="text-slate-500 max-w-sm">Building the future of web with clean code and innovative solutions.</p>
          </div>
          
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
