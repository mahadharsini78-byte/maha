
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO, AFFILIATIONS, SOFT_SKILLS } from '../constants';
import { CheckCircle2, UserCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="About Me" 
          subtitle="Passionate Computer Science student with a focus on web development and problem-solving."
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <UserCircle2 className="text-indigo-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Full Name</label>
                  <p className="text-slate-700 font-medium">{PERSONAL_INFO.name}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Date of Birth</label>
                  <p className="text-slate-700 font-medium">{PERSONAL_INFO.birthDate}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Languages</label>
                  <p className="text-slate-700 font-medium">{PERSONAL_INFO.languages.join(', ')}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Status</label>
                  <p className="text-slate-700 font-medium">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-200">
              <h3 className="text-xl font-bold mb-6">Roles & Affiliations</h3>
              <ul className="space-y-4">
                {AFFILIATIONS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-indigo-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Professional Strengths</h3>
              <div className="grid grid-cols-1 gap-4">
                {SOFT_SKILLS.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-slate-600 font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-3xl border border-dashed border-slate-300">
              <p className="italic text-slate-500 text-center text-lg">
                "I hereby declare that the information stated above is true to the best of my knowledge and I assure you that, I would work sincerely for the betterment of the company."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
