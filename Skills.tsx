
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { SKILLS_DATA } from '../constants';
import { Code2, Database, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Programming Languages': return <Code2 className="w-5 h-5" />;
      case 'Database Management': return <Database className="w-5 h-5" />;
      case 'Web & Design': return <Layout className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Technical Proficiency" 
          subtitle="My toolkit of programming languages, databases, and professional software."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((group, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 text-white p-2 rounded-xl">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
