
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { CERTIFICATIONS_DATA } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Certifications" 
          subtitle="Specialized courses and technical validations."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 text-amber-600 p-3 rounded-2xl group-hover:bg-amber-100 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> {cert.provider}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
