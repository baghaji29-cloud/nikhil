/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FullProfile, TemplateId } from './types/profile';
import { studentSample, professionalSample, emptyProfile } from './data/sampleProfiles';
import { calculateATSScore } from './utils/atsCalculator';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { NavigationTabs, SECTIONS, SectionKey } from './components/NavigationTabs';
import { ResumePreview } from './components/ResumePreview';
import { ExportModal } from './components/ExportModal';

// Section components
import { PersonalInfoSection } from './components/sections/PersonalInfoSection';
import { ProfessionalSummarySection } from './components/sections/ProfessionalSummarySection';
import { EducationSection } from './components/sections/EducationSection';
import { TechnicalSkillsSection } from './components/sections/TechnicalSkillsSection';
import { SoftSkillsSection } from './components/sections/SoftSkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { InternshipSection } from './components/sections/InternshipSection';
import { WorkExperienceSection } from './components/sections/WorkExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ExtracurricularSection } from './components/sections/ExtracurricularSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { LanguagesSection } from './components/sections/LanguagesSection';
import { CourseworkSection } from './components/sections/CourseworkSection';
import { AdditionalInfoSection } from './components/sections/AdditionalInfoSection';

import {
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Printer,
  RotateCcw,
} from 'lucide-react';

const STORAGE_KEY = 'astraprofile_data_v2';
const TEMPLATE_KEY = 'astraprofile_template_v2';

export default function App() {
  // Load initial profile from localStorage or default to student sample
  const [profile, setProfile] = useState<FullProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from local storage', e);
    }
    return studentSample;
  });

  const [activeSection, setActiveSection] = useState<SectionKey>('personal');
  const [activeView, setActiveView] = useState<'builder' | 'preview'>('builder');
  const [template, setTemplate] = useState<TemplateId>(() => {
    try {
      const savedT = localStorage.getItem(TEMPLATE_KEY);
      if (savedT === 'editorial' || savedT === 'executive' || savedT === 'minimal-ats') {
        return savedT;
      }
    } catch (e) {}
    return 'editorial';
  });

  const [isExportOpen, setIsExportOpen] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  // Save profile to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Could not save to local storage', e);
    }
  }, [profile]);

  // Save template choice
  useEffect(() => {
    try {
      localStorage.setItem(TEMPLATE_KEY, template);
    } catch (e) {}
  }, [template]);

  // Real-time ATS Calculation
  const atsAnalysis = useMemo(() => calculateATSScore(profile), [profile]);

  // Section Index navigation helpers
  const currentSectionIndex = SECTIONS.findIndex((s) => s.key === activeSection);
  const prevSection = currentSectionIndex > 0 ? SECTIONS[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < SECTIONS.length - 1 ? SECTIONS[currentSectionIndex + 1] : null;

  const scrollToEditor = () => {
    editorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleApplySampleBullet = (bullet: string) => {
    setProfile((prev) => ({
      ...prev,
      professionalSummary: {
        ...prev.professionalSummary,
        summary: bullet,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-stone-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* AstraFlow Header adhering to Top Bar Contract */}
      <Header
        onOpenExport={() => setIsExportOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
        atsScore={atsAnalysis.score}
        atsGrade={atsAnalysis.grade}
      />

      {/* Hero Banner Section (inspired directly by the AstraFlow reference image) */}
      <div className="no-print">
        <HeroBanner
          onLoadStudentSample={() => {
            setProfile(studentSample);
            scrollToEditor();
          }}
          onLoadProfessionalSample={() => {
            setProfile(professionalSample);
            scrollToEditor();
          }}
          onStartEditing={scrollToEditor}
          atsAnalysis={atsAnalysis}
          onApplySampleBullet={handleApplySampleBullet}
        />
      </div>

      {/* Main Content Workspace */}
      <main ref={editorRef} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toggle View bar on Mobile & Tablet */}
        <div className="no-print flex lg:hidden items-center justify-between mb-6 p-2 rounded-xl bg-stone-900 border border-stone-800">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveView('builder')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeView === 'builder'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Edit Form</span>
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeView === 'preview'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Résumé</span>
            </button>
          </div>

          <button
            onClick={() => setIsExportOpen(true)}
            className="p-1.5 text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
        </div>

        {/* Desktop Split View or Full Preview View */}
        {activeView === 'preview' ? (
          <div className="w-full">
            <div className="no-print flex items-center justify-between mb-4">
              <button
                onClick={() => setActiveView('builder')}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Profile Editor</span>
              </button>
              <span className="text-xs text-stone-400 font-mono">
                Full Document Preview Mode
              </span>
            </div>
            <ResumePreview
              profile={profile}
              template={template}
              onSelectTemplate={setTemplate}
              onPrint={handlePrint}
            />
          </div>
        ) : (
          <div className="w-full space-y-8">
            {/* 15 Modules Tabs */}
            <div className="no-print">
              <NavigationTabs
                activeSection={activeSection}
                onSelectSection={setActiveSection}
                profile={profile}
              />
            </div>

            {/* Split Screen Container: Left Editor (Form), Right Live Document Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form Editor (7 cols) */}
              <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800/90 rounded-2xl p-5 sm:p-7 backdrop-blur-md shadow-xl">
                {/* Active Section Renderer */}
                {activeSection === 'personal' && (
                  <PersonalInfoSection
                    data={profile.personalInfo}
                    onChange={(updated) =>
                      setProfile({ ...profile, personalInfo: updated })
                    }
                  />
                )}

                {activeSection === 'summary' && (
                  <ProfessionalSummarySection
                    data={profile.professionalSummary}
                    onChange={(updated) =>
                      setProfile({ ...profile, professionalSummary: updated })
                    }
                  />
                )}

                {activeSection === 'education' && (
                  <EducationSection
                    data={profile.education}
                    onChange={(updated) =>
                      setProfile({ ...profile, education: updated })
                    }
                  />
                )}

                {activeSection === 'technicalSkills' && (
                  <TechnicalSkillsSection
                    data={profile.technicalSkills}
                    onChange={(updated) =>
                      setProfile({ ...profile, technicalSkills: updated })
                    }
                  />
                )}

                {activeSection === 'softSkills' && (
                  <SoftSkillsSection
                    data={profile.softSkills}
                    onChange={(updated) =>
                      setProfile({ ...profile, softSkills: updated })
                    }
                  />
                )}

                {activeSection === 'projects' && (
                  <ProjectsSection
                    data={profile.projects}
                    onChange={(updated) =>
                      setProfile({ ...profile, projects: updated })
                    }
                  />
                )}

                {activeSection === 'internships' && (
                  <InternshipSection
                    data={profile.internships}
                    onChange={(updated) =>
                      setProfile({ ...profile, internships: updated })
                    }
                  />
                )}

                {activeSection === 'workExperience' && (
                  <WorkExperienceSection
                    data={profile.workExperience}
                    onChange={(updated) =>
                      setProfile({ ...profile, workExperience: updated })
                    }
                  />
                )}

                {activeSection === 'certifications' && (
                  <CertificationsSection
                    data={profile.certifications}
                    onChange={(updated) =>
                      setProfile({ ...profile, certifications: updated })
                    }
                  />
                )}

                {activeSection === 'achievements' && (
                  <AchievementsSection
                    data={profile.achievements}
                    onChange={(updated) =>
                      setProfile({ ...profile, achievements: updated })
                    }
                  />
                )}

                {activeSection === 'extracurricular' && (
                  <ExtracurricularSection
                    data={profile.extracurriculars}
                    onChange={(updated) =>
                      setProfile({ ...profile, extracurriculars: updated })
                    }
                  />
                )}

                {activeSection === 'leadership' && (
                  <LeadershipSection
                    data={profile.leadership}
                    onChange={(updated) =>
                      setProfile({ ...profile, leadership: updated })
                    }
                  />
                )}

                {activeSection === 'languages' && (
                  <LanguagesSection
                    data={profile.languages}
                    onChange={(updated) =>
                      setProfile({ ...profile, languages: updated })
                    }
                  />
                )}

                {activeSection === 'coursework' && (
                  <CourseworkSection
                    data={profile.relevantCoursework}
                    onChange={(updated) =>
                      setProfile({ ...profile, relevantCoursework: updated })
                    }
                  />
                )}

                {activeSection === 'additionalInfo' && (
                  <AdditionalInfoSection
                    data={profile.additionalInfo}
                    onChange={(updated) =>
                      setProfile({ ...profile, additionalInfo: updated })
                    }
                  />
                )}

                {/* Step Navigation Footer */}
                <div className="mt-8 pt-5 border-t border-stone-800 flex items-center justify-between gap-4">
                  {prevSection ? (
                    <button
                      onClick={() => setActiveSection(prevSection.key)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous: {prevSection.shortLabel}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {nextSection ? (
                    <button
                      onClick={() => setActiveSection(nextSection.key)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                    >
                      <span>Next: {nextSection.shortLabel}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveView('preview')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                    >
                      <span>Review Full Résumé</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Live Sticky Document Preview (5 cols) */}
              <div className="hidden lg:block lg:col-span-5 sticky top-20">
                <div className="mb-2 flex items-center justify-between text-xs text-stone-400 px-1">
                  <span className="font-mono uppercase tracking-wider text-[11px] text-amber-400/90 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Real-Time Sync Preview</span>
                  </span>
                  <button
                    onClick={() => setActiveView('preview')}
                    className="text-stone-300 hover:text-amber-200 transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Full View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="max-h-[82vh] overflow-y-auto rounded-2xl border border-stone-800 bg-stone-950/60 p-2 shadow-2xl">
                  <ResumePreview
                    profile={profile}
                    template={template}
                    onSelectTemplate={setTemplate}
                    onPrint={handlePrint}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Quiet AstraFlow Footer adhering to design constitution */}
      <footer className="no-print mt-20 border-t border-stone-800/80 bg-[#0e0c0a] py-10 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-serif text-stone-300 text-sm">
            <span className="text-amber-400">✦</span>
            <span>Resume Builder by Nikhil</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-400">
            <span>Desktop, Tablet & Mobile Ready</span>
            <span>·</span>
            <span>Google Chrome & Safari Compatible</span>
            <span>·</span>
            <span>100% Client-Side Privacy</span>
          </div>

          <div className="text-stone-500 font-mono text-[11px]">
            © {new Date().getFullYear()} Resume Builder by Nikhil. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Export / Print & JSON Backup Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        profile={profile}
        onImportProfile={(imported) => setProfile(imported)}
        onResetProfile={() => setProfile(emptyProfile)}
        onPrint={handlePrint}
      />
    </div>
  );
}
