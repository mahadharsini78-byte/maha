
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></div>
      </h2>
      {subtitle && <p className="mt-4 text-slate-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
