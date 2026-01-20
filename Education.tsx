
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Education" 
          subtitle="My academic journey and qualifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative flex flex-col h-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-2">
                <div className="bg-indigo-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">{edu.institution}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-slate-800">{edu.percentage}</span>
                  </div>
                  <span className="text-xs text-slate-400">Completion</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
