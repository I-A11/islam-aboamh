export interface ExperienceEntry {
  id: string;
  role: string;
  organisation: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}
