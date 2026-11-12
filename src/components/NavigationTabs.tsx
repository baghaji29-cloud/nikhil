import React from 'react';
import {
  User,
  Compass,
  GraduationCap,
  Code2,
  HeartHandshake,
  FolderGit2,
  Briefcase,
  Building2,
  Award,
  Trophy,
  Users,
  Crown,
  Languages,
  BookOpen,
  Sparkles,
  Check,
} from 'lucide-react';
import { FullProfile } from '../types/profile';

export type SectionKey =
  | 'personal'
  | 'summary'
  | 'education'
  | 'technicalSkills'
  | 'softSkills'
  | 'projects'
  | 'internships'
  | 'workExperience'
  | 'certifications'
  | 'achievements'
  | 'extracurricular'
  | 'leadership'
  | 'languages'
  | 'coursework'
  | 'additionalInfo';

export interface SectionMeta {
  key: SectionKey;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  number: string;
}

export const SECTIONS: SectionMeta[] = [
  { key: 'personal', label: '1. Personal Information & Contact Details', shortLabel: 'Personal Info', icon: User, number: '01' },
  { key: 'summary', label: '2. Professional Summary & Career Objective', shortLabel: 'Summary', icon: Compass, number: '02' },
  { key: 'education', label: '3. Education & Academic Qualifications', shortLabel: 'Education', icon: GraduationCap, number: '03' },
  { key: 'technicalSkills', label: '4. Technical Skills (Categorized)', shortLabel: 'Tech Skills', icon: Code2, number: '04' },
  { key: 'softSkills', label: '5. Soft Skills & Work Ethic', shortLabel: 'Soft Skills', icon: HeartHandshake, number: '05' },
  { key: 'projects', label: '6. Projects & Practical Evidence', shortLabel: 'Projects', icon: FolderGit2, number: '06' },
  { key: 'internships', label: '7. Internship Experience', shortLabel: 'Internships', icon: Briefcase, number: '07' },
  { key: 'workExperience', label: '8. Work Experience', shortLabel: 'Work Experience', icon: Building2, number: '08' },
  { key: 'certifications', label: '9. Certifications & Courses', shortLabel: 'Certificates', icon: Award, number: '09' },
  { key: 'achievements', label: '10. Achievements & Awards', shortLabel: 'Achievements', icon: Trophy, number: '10' },
  { key: 'extracurricular', label: '11. Extracurricular Activities', shortLabel: 'Extracurricular', icon: Users, number: '11' },
  { key: 'leadership', label: '12. Leadership & Responsibilities', shortLabel: 'Leadership', icon: Crown, number: '12' },
  { key: 'languages', label: '13. Languages & Proficiency', shortLabel: 'Languages', icon: Languages, number: '13' },
  { key: 'coursework', label: '14. Relevant Academic Coursework', shortLabel: 'Coursework', icon: BookOpen, number: '14' },
  { key: 'additionalInfo', label: '15. Additional Information & Hobbies', shortLabel: 'Additional Info', icon: Sparkles, number: '15' },
];

interface NavigationTabsProps {
  activeSection: SectionKey;
  onSelectSection: (key: SectionKey) => void;
  profile: FullProfile;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeSection,
  onSelectSection,
  profile,
}) => {
  const isSectionFilled = (key: SectionKey): boolean => {
    switch (key) {
      case 'personal':
        return Boolean(profile.personalInfo.fullName && profile.personalInfo.email);
      case 'summary':
        return Boolean(profile.professionalSummary.summary);
      case 'education':
        return Boolean(profile.education.collegeName && profile.education.degree);
      case 'technicalSkills':
        return (
          profile.technicalSkills.programmingLanguages.length > 0 ||
          profile.technicalSkills.webDevelopment.length > 0
        );
      case 'softSkills':
        return profile.softSkills.length > 0;
      case 'projects':
        return profile.projects.length > 0;
      case 'internships':
        return profile.internships.length > 0;
      case 'workExperience':
        return profile.workExperience.length > 0;
      case 'certifications':
        return profile.certifications.length > 0;
      case 'achievements':
        return profile.achievements.length > 0;
      case 'extracurricular':
        return profile.extracurriculars.length > 0;
      case 'leadership':
        return profile.leadership.length > 0;
      case 'languages':
        return profile.languages.length > 0;
      case 'coursework':
        return profile.relevantCoursework.length > 0;
      case 'additionalInfo':
        return (
          profile.additionalInfo.technicalInterests.length > 0 ||
          Boolean(profile.additionalInfo.openSourceContributions) ||
          Boolean(profile.additionalInfo.researchWork)
        );
      default:
        return false;
    }
  };

  const filledCount = SECTIONS.filter((s) => isSectionFilled(s.key)).length;

  return (
    <div id="section-navigation" className="w-full">
      {/* Header bar for modules with progress indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-800">
        <div>
          <h2 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <span>Profile Modules</span>
            <span className="text-xs font-mono text-amber-300 font-normal">
              ({filledCount} of 15 completed)
            </span>
          </h2>
          <p className="text-xs text-stone-400">
            Select any section to edit details. All 15 modules are synchronized into your live résumé.
          </p>
        </div>

        {/* Small progress meter */}
        <div className="flex items-center gap-3">
          <div className="w-32 bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${(filledCount / 15) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono text-stone-400 tabular-nums">
            {Math.round((filledCount / 15) * 100)}%
          </span>
        </div>
      </div>

      {/* Horizontal pill navigation on mobile / responsive wrap grid on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {SECTIONS.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.key;
          const filled = isSectionFilled(sec.key);

          return (
            <button
              key={sec.key}
              onClick={() => onSelectSection(sec.key)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-amber-400 text-stone-950 font-medium shadow-md shadow-amber-500/10'
                  : 'bg-stone-900/60 hover:bg-stone-850 text-stone-300 border border-stone-800/80 hover:border-stone-700'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs ${
                  isActive
                    ? 'bg-stone-950/15 text-stone-950'
                    : filled
                    ? 'bg-emerald-950/60 text-emerald-400'
                    : 'bg-stone-800 text-stone-400'
                }`}
              >
                {filled && !isActive ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Icon className="w-3.5 h-3.5" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono leading-none opacity-60">
                  {sec.number}
                </div>
                <div className="text-xs truncate font-medium mt-0.5">
                  {sec.shortLabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
