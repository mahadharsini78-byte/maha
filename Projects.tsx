
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-indigo-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Real-world applications and web platforms I've built."
        />
        
        <div className="grid grid-cols-1 gap-12">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
              <div className="lg:w-1/2 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/serviceflare/800/600" 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-indigo-300">
                  <Layers className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">Web Platform</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-4 py-1.5 bg-white/10 rounded-lg text-sm font-medium border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
