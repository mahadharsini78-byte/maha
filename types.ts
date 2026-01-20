
export interface Education {
  degree: string;
  institution: string;
  percentage: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Certification {
  name: string;
  provider: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
