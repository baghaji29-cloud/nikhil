export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  headline: string;
}

export interface ProfessionalSummary {
  summary: string;
  educationalBackground: string;
  keySkillsOverview: string;
  careerGoals: string;
  coreStrengths: string;
}

export interface Education {
  collegeName: string;
  degree: string;
  branch: string;
  currentYearSem: string;
  graduationYear: string;
  cgpa: string;
  // Class 12
  class12School: string;
  class12Board: string;
  class12Percentage: string;
  class12Year: string;
  // Class 10
  class10School: string;
  class10Board: string;
  class10Percentage: string;
  class10Year: string;
}

export interface TechnicalSkills {
  programmingLanguages: string[];
  webDevelopment: string[];
  databaseManagement: string[];
  devTools: string[];
  frameworksLibraries: string[];
  otherTechnicalSkills: string[];
}

export interface SoftSkillItem {
  name: string;
  selected: boolean;
}

export interface ProjectItem {
  id: string;
  name: string;
  overview: string;
  problemSolves: string;
  technologies: string[];
  keyFeatures: string;
  individualRole: string;
  achievementsResults: string;
  githubUrl: string;
  liveUrl: string;
}

export interface InternshipItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  tasksPerformed: string;
  technologiesUsed: string[];
  achievementsLearnings: string;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  jobTitle: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Freelance';
  duration: string;
  startDate: string;
  endDate: string;
  keyResponsibilities: string;
  majorContributions: string;
  achievementsResults: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingOrg: string;
  completionDate: string;
  skillsLearned: string;
  verificationLink: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Hackathon' | 'Coding Competition' | 'Scholarship' | 'Technical' | 'Sports' | 'Recognition';
  organization: string;
  year: string;
  description: string;
}

export interface ExtracurricularItem {
  id: string;
  activityName: string;
  category: 'College Club & Society' | 'Sports' | 'Volunteering' | 'Cultural Event' | 'Event Management' | 'Technical Community' | 'Social Activity';
  role: string;
  description: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  duration: string;
  keyImpact: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export interface AdditionalInfo {
  technicalInterests: string[];
  openSourceContributions: string;
  researchWork: string;
  relevantHobbies: string[];
  professionalInterests: string[];
}

export interface FullProfile {
  personalInfo: PersonalInfo;
  professionalSummary: ProfessionalSummary;
  education: Education;
  technicalSkills: TechnicalSkills;
  softSkills: string[];
  projects: ProjectItem[];
  internships: InternshipItem[];
  workExperience: WorkExperienceItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  extracurriculars: ExtracurricularItem[];
  leadership: LeadershipItem[];
  languages: LanguageItem[];
  relevantCoursework: string[];
  additionalInfo: AdditionalInfo;
}

export type TemplateId = 'editorial' | 'executive' | 'minimal-ats';

export interface ATSAnalysis {
  score: number;
  grade: string;
  strengths: string[];
  suggestions: {
    section: string;
    advice: string;
    importance: 'high' | 'medium' | 'low';
  }[];
  metricsCount: number;
  skillsCount: number;
  wordCount: number;
}
