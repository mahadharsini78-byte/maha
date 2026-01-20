
import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Award, 
  GraduationCap, 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  FileText
} from 'lucide-react';
import { Education, Project, Certification, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Mahadharsini R",
  title: "Computer Science Undergraduate",
  email: "mahadharsini78@gmail.com",
  phone: "+91 6369348350",
  github: "https://github.com/mahadharsini78-byte", // Updated GitHub profile link
  address: "34/A, Maramanai street, VettaikaranPudur.",
  objective: "I seek challenging opportunities where I can fully use my skills for the success of the organization.",
  languages: ["English", "Tamil"],
  birthDate: "12-01-2006"
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "BSC Computer Science",
    institution: "Nallamuthu Gounder Mahalingam College (Bharathiyar University)",
    percentage: "71%",
    year: "2026 (Pursuing)"
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Government Higher Secondary School, Vettaikaranpudur",
    percentage: "73.5%",
    year: "2023"
  },
  {
    degree: "SSLC",
    institution: "Government Higher Secondary School, Vettaikaranpudur",
    percentage: "100%",
    year: "2021"
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "PHP"]
  },
  {
    category: "Web & Design",
    skills: ["HTML", "Web Designing", "Visual Presentation"]
  },
  {
    category: "Database Management",
    skills: ["SQL", "MySQL", "RDBMS"]
  },
  {
    category: "Tools",
    skills: ["MS Excel", "MS Word", "MS PowerPoint", "Power BI"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "ServiceFlare – Unified Customer Service Platform",
    description: "Developed a web platform to streamline multiple customer services into one seamless interface for improved accessibility and user experience.",
    technologies: ["HTML", "Google Sites"],
    link: "https://sites.google.com/view/world-helper/home"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { name: "Python", provider: "IIT SpokenTutorial" },
  { name: "HTML", provider: "IIT SpokenTutorial" },
  { name: "Cloud Based Optimization", provider: "Value Added Course" },
  { name: "Visual Presentation in POWER BI", provider: "Value Added Course" },
  { name: "Python for Data Science", provider: "NPTEL" }
];

export const AFFILIATIONS = [
  "Member of AMSM (Arutchelver Manavar Sindhanai Mandram)",
  "Placement Co-Ordinator",
  "Class Representative"
];

export const SOFT_SKILLS = [
  "Verbal & Written communication",
  "Ability potential to perform a task",
  "Collaborating with others towards shared goals",
  "Managing challenging situations"
];
