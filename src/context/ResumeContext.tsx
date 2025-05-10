import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { resumeData } from '../data/resumeData';
import { themeConfig, fontConfig, exportConfig } from '../data/themeConfig';
import type { ResumeData, ThemeConfig } from '../data/types';

interface ResumeContextType {
  data: ResumeData;
  theme: ThemeConfig;
  fonts: typeof fontConfig;
  export: typeof exportConfig;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const value = {
    data: resumeData,
    theme: themeConfig,
    fonts: fontConfig,
    export: exportConfig,
  };

  return (
    <ResumeContext.Provider value={value} key={Math.random()}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}

// Helper hooks for specific data
export function usePersonalInfo() {
  return useResume().data.personal;
}

export function useExperience() {
  return useResume().data.experience;
}

export function useProjects() {
  return useResume().data.projects;
}

export function useSkills() {
  return useResume().data.skills;
}

export function useSocial() {
  return useResume().data.social;
}

export function useCertifications() {
  return useResume().data.certifications;
}

export function useThemeConfig() {
  return useResume().theme;
}

export function useFontConfig() {
  return useResume().fonts;
}

export function useExportConfig() {
  return useResume().export;
}
