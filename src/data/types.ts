export interface PersonalInfo {
  name: string;
  role: string;
  summary: string;
  email: string;
  location?: string;
  profileImage?: string;
}

export interface Experience {
  role: string;
  company?: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  category: 'Open Source' | 'Industry';
  description: string;
  tech: string[];
  link?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  social: Social[];
}

// Theme configuration types
export interface ColorScheme {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  background: string;
  backgroundSecondary: string;
  border: string;
  shadow: string;
  hover: string;
}

export interface ThemeConfig {
  light: ColorScheme;
  dark: ColorScheme;
  defaultMode: 'light' | 'dark';
}

// Export configuration types
export interface ExportConfig {
  pdf: {
    format: 'A4' | 'Letter';
    margin: number;
    scaling: number;
  };
  word: {
    format: 'A4' | 'Letter';
    margin: number;
  };
  powerpoint: {
    format: '16:9' | '4:3';
    template?: string;
  };
}
