import React, { useState } from 'react';
import {
  FullProfile,
  TemplateId,
} from '../types/profile';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Printer,
  FileCheck2,
  Sparkles,
  ExternalLink,
  Layers,
  ZoomIn,
  ZoomOut,
  SlidersHorizontal,
} from 'lucide-react';

interface ResumePreviewProps {
  profile: FullProfile;
  template: TemplateId;
  onSelectTemplate: (t: TemplateId) => void;
  onPrint: () => void;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({
  profile,
  template,
  onSelectTemplate,
  onPrint,
}) => {
  const [zoom, setZoom] = useState<number>(100);

  const {
    personalInfo,
    professionalSummary,
    education,
    technicalSkills,
    softSkills,
    projects,
    internships,
    workExperience,
    certifications,
    achievements,
    extracurriculars,
    leadership,
    languages,
    relevantCoursework,
    additionalInfo,
  } = profile;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Toolbar (Hidden when printing) */}
      <div className="no-print w-full max-w-4xl mb-4 p-3 rounded-xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg">
        {/* Template Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800">
          <button
            onClick={() => onSelectTemplate('editorial')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              template === 'editorial'
                ? 'bg-amber-400 text-stone-950 shadow-sm font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            ✦ Astra Editorial
          </button>
          <button
            onClick={() => onSelectTemplate('executive')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              template === 'executive'
                ? 'bg-amber-400 text-stone-950 shadow-sm font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Executive Modern
          </button>
          <button
            onClick={() => onSelectTemplate('minimal-ats')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              template === 'minimal-ats'
                ? 'bg-amber-400 text-stone-950 shadow-sm font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Clean ATS-Friendly
          </button>
        </div>

        {/* Zoom and Print Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 text-xs text-stone-400 bg-stone-950 px-2 py-1 rounded-lg border border-stone-800">
            <button
              onClick={() => setZoom((prev) => Math.max(75, prev - 10))}
              className="p-1 hover:text-stone-200"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center font-mono tabular-nums">{zoom}%</span>
            <button
              onClick={() => setZoom((prev) => Math.min(130, prev + 10))}
              className="p-1 hover:text-stone-200"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg text-xs font-semibold shadow-sm transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Render Document in Paper Canvas */}
      <div
        className="w-full flex justify-center overflow-x-auto p-2 sm:p-4 bg-stone-950/40 rounded-2xl border border-stone-900"
        style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
      >
        <div
          id="resume-document"
          className={`resume-paper w-full max-w-[850px] min-h-[1100px] bg-white text-stone-900 shadow-2xl transition-all ${
            template === 'editorial'
              ? 'p-8 sm:p-12 font-sans border-t-8 border-amber-600'
              : template === 'executive'
              ? 'p-8 sm:p-12 font-sans border-t-8 border-stone-900'
              : 'p-8 sm:p-10 font-sans'
          }`}
        >
          {/* HEADER SECTION: Contact Details */}
          <header className="border-b border-stone-300 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1
                  className={`text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 ${
                    template === 'editorial' ? 'font-serif' : 'font-sans'
                  }`}
                >
                  {personalInfo.fullName || 'Your Full Name'}
                </h1>
                {personalInfo.headline && (
                  <p
                    className={`text-sm sm:text-base font-medium mt-1 ${
                      template === 'editorial'
                        ? 'text-amber-800 font-serif italic'
                        : 'text-stone-700 font-sans'
                    }`}
                  >
                    {personalInfo.headline}
                  </p>
                )}
              </div>

              {personalInfo.cityState && (
                <div className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{personalInfo.cityState}</span>
                </div>
              )}
            </div>

            {/* Contact links row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-stone-700">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 hover:text-amber-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{personalInfo.email}</span>
                </a>
              )}
              {personalInfo.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </span>
              )}
              {personalInfo.linkedIn && (
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-amber-800 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-amber-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.portfolio && (
                <a
                  href={personalInfo.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-amber-800 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </header>

          {/* SECTION 2: Professional Summary */}
          {professionalSummary.summary && (
            <section className="mb-6 print-page-break-avoid">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed">
                {professionalSummary.summary}
              </p>
              {professionalSummary.coreStrengths && (
                <p className="text-xs text-stone-700 mt-1 font-medium">
                  <span className="text-stone-900 font-semibold">Core Strengths: </span>
                  {professionalSummary.coreStrengths}
                </p>
              )}
            </section>
          )}

          {/* SECTION 3: Education */}
          {(education.collegeName || education.degree) && (
            <section className="mb-6 print-page-break-avoid">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Education & Academic Qualifications
              </h2>

              <div className="space-y-3">
                {/* College */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-xs sm:text-[13px] font-bold text-stone-950">
                      {education.collegeName}
                    </span>
                    <span className="text-xs text-stone-600 font-medium">
                      {education.graduationYear
                        ? `Graduation: ${education.graduationYear}`
                        : education.currentYearSem}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-stone-700">
                    <span>
                      {education.degree} in {education.branch}
                    </span>
                    {education.cgpa && (
                      <span className="font-semibold text-stone-900 font-mono">
                        CGPA / Marks: {education.cgpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Schooling Table / Summary */}
                {(education.class12School || education.class10School) && (
                  <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-700 space-y-1">
                    {education.class12School && (
                      <div className="flex items-center justify-between">
                        <span>
                          <strong className="text-stone-900">Class 12th: </strong>
                          {education.class12School} ({education.class12Board || 'Board'})
                        </span>
                        <span className="font-mono text-stone-900 font-medium">
                          {education.class12Percentage} · {education.class12Year}
                        </span>
                      </div>
                    )}
                    {education.class10School && (
                      <div className="flex items-center justify-between">
                        <span>
                          <strong className="text-stone-900">Class 10th: </strong>
                          {education.class10School} ({education.class10Board || 'Board'})
                        </span>
                        <span className="font-mono text-stone-900 font-medium">
                          {education.class10Percentage} · {education.class10Year}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* SECTION 4 & 5: Skills Grid */}
          <section className="mb-6 print-page-break-avoid">
            <h2
              className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5 ${
                template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
              }`}
            >
              Technical & Core Competencies
            </h2>

            <div className="text-xs text-stone-800 space-y-1.5 leading-relaxed">
              {technicalSkills.programmingLanguages.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Languages: </strong>
                  <span>{technicalSkills.programmingLanguages.join(' · ')}</span>
                </div>
              )}
              {technicalSkills.webDevelopment.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Web Development: </strong>
                  <span>{technicalSkills.webDevelopment.join(' · ')}</span>
                </div>
              )}
              {technicalSkills.databaseManagement.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Databases & Caching: </strong>
                  <span>{technicalSkills.databaseManagement.join(' · ')}</span>
                </div>
              )}
              {technicalSkills.devTools.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Tools & Cloud: </strong>
                  <span>{technicalSkills.devTools.join(' · ')}</span>
                </div>
              )}
              {technicalSkills.frameworksLibraries.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Frameworks & Libraries: </strong>
                  <span>{technicalSkills.frameworksLibraries.join(' · ')}</span>
                </div>
              )}
              {technicalSkills.otherTechnicalSkills.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Architecture & Methodologies: </strong>
                  <span>{technicalSkills.otherTechnicalSkills.join(' · ')}</span>
                </div>
              )}
              {softSkills.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Soft Skills & Attributes: </strong>
                  <span>{softSkills.join(' · ')}</span>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 6: Projects */}
          {projects.length > 0 && (
            <section className="mb-6">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Key Projects & Technical Implementations
              </h2>

              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="print-page-break-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-stone-950">
                          {proj.name}
                        </span>
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-amber-800 hover:underline flex items-center gap-0.5"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-stone-600 hover:underline flex items-center gap-0.5"
                          >
                            <span>Code</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                      {proj.technologies.length > 0 && (
                        <span className="text-[11px] font-mono text-stone-600">
                          [{proj.technologies.slice(0, 5).join(', ')}]
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-800 leading-relaxed mb-1">
                      {proj.overview}
                    </p>

                    <div className="text-[11px] text-stone-700 space-y-0.5 pl-3 border-l-2 border-stone-200">
                      {proj.problemSolves && (
                        <div>
                          <strong className="text-stone-900">Problem Addressed: </strong>
                          <span>{proj.problemSolves}</span>
                        </div>
                      )}
                      {proj.keyFeatures && (
                        <div>
                          <strong className="text-stone-900">Key Features: </strong>
                          <span>{proj.keyFeatures}</span>
                        </div>
                      )}
                      {proj.individualRole && (
                        <div>
                          <strong className="text-stone-900">Role: </strong>
                          <span>{proj.individualRole}</span>
                        </div>
                      )}
                      {proj.achievementsResults && (
                        <div className="font-medium text-stone-950">
                          <strong className="text-amber-900">Impact & Results: </strong>
                          <span>{proj.achievementsResults}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 7: Internship Experience */}
          {internships.length > 0 && (
            <section className="mb-6">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Internship Experience
              </h2>

              <div className="space-y-3.5">
                {internships.map((item) => (
                  <div key={item.id} className="print-page-break-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                      <span className="text-xs sm:text-[13px] font-bold text-stone-950">
                        {item.position}{' '}
                        <span className="font-normal text-stone-700">· {item.company}</span>
                      </span>
                      <span className="text-xs text-stone-600 font-medium">
                        {item.duration || `${item.startDate} – ${item.endDate}`}
                      </span>
                    </div>

                    {item.responsibilities && (
                      <p className="text-xs text-stone-800 leading-relaxed mb-1">
                        {item.responsibilities}
                      </p>
                    )}

                    {item.achievementsLearnings && (
                      <p className="text-[11px] text-stone-900 font-medium pl-3 border-l-2 border-amber-600">
                        <strong>Key Outcome: </strong>
                        {item.achievementsLearnings}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 8: Work Experience */}
          {workExperience.length > 0 && (
            <section className="mb-6">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Work Experience
              </h2>

              <div className="space-y-4">
                {workExperience.map((work) => (
                  <div key={work.id} className="print-page-break-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                      <span className="text-xs sm:text-[13px] font-bold text-stone-950">
                        {work.jobTitle}{' '}
                        <span className="font-normal text-stone-700">· {work.company}</span>
                      </span>
                      <span className="text-xs text-stone-600 font-medium">
                        {work.startDate} – {work.endDate || 'Present'} ({work.duration})
                      </span>
                    </div>

                    {work.keyResponsibilities && (
                      <p className="text-xs text-stone-800 leading-relaxed mb-1">
                        {work.keyResponsibilities}
                      </p>
                    )}

                    {work.majorContributions && (
                      <p className="text-[11px] text-stone-700 mb-1">
                        <strong className="text-stone-900">Major Contributions: </strong>
                        {work.majorContributions}
                      </p>
                    )}

                    {work.achievementsResults && (
                      <p className="text-[11px] text-stone-900 font-medium pl-3 border-l-2 border-stone-900">
                        <strong className="text-amber-900">Quantified Impact: </strong>
                        {work.achievementsResults}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 9: Certifications */}
          {certifications.length > 0 && (
            <section className="mb-6 print-page-break-avoid">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Certifications & Accreditations
              </h2>

              <div className="space-y-2 text-xs">
                {certifications.map((c) => (
                  <div key={c.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-semibold text-stone-950">{c.name}</span>
                      <span className="text-stone-600"> — {c.issuingOrg}</span>
                      {c.skillsLearned && (
                        <span className="text-[11px] text-stone-500 block">
                          Skills: {c.skillsLearned}
                        </span>
                      )}
                    </div>
                    <span className="text-stone-600 text-[11px] shrink-0">{c.completionDate}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 10: Achievements & Awards */}
          {achievements.length > 0 && (
            <section className="mb-6 print-page-break-avoid">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Achievements & Honors
              </h2>

              <div className="space-y-2 text-xs">
                {achievements.map((ach) => (
                  <div key={ach.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-semibold text-stone-950">{ach.title}</span>
                      <span className="text-stone-600"> · {ach.organization}</span>
                      {ach.description && (
                        <p className="text-[11px] text-stone-700 leading-normal">{ach.description}</p>
                      )}
                    </div>
                    <span className="text-stone-600 text-[11px] font-mono shrink-0">{ach.year}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 11, 12, 13: Extracurricular, Leadership & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 print-page-break-avoid">
            {/* Leadership */}
            {leadership.length > 0 && (
              <div>
                <h2
                  className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2 ${
                    template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                  }`}
                >
                  Leadership & Responsibilities
                </h2>
                <div className="space-y-2 text-xs">
                  {leadership.map((l) => (
                    <div key={l.id}>
                      <span className="font-semibold text-stone-950">{l.title}</span>
                      <span className="text-stone-600 text-[11px] block">{l.organization} ({l.duration})</span>
                      {l.keyImpact && (
                        <p className="text-[11px] text-stone-700">{l.keyImpact}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extracurriculars */}
            {extracurriculars.length > 0 && (
              <div>
                <h2
                  className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2 ${
                    template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                  }`}
                >
                  Extracurricular Activities
                </h2>
                <div className="space-y-2 text-xs">
                  {extracurriculars.map((e) => (
                    <div key={e.id}>
                      <span className="font-semibold text-stone-950">{e.activityName}</span>
                      {e.role && <span className="text-stone-600"> — {e.role}</span>}
                      {e.description && (
                        <p className="text-[11px] text-stone-700">{e.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Languages & Relevant Coursework */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 print-page-break-avoid text-xs">
            {languages.length > 0 && (
              <div>
                <h2
                  className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-1.5 ${
                    template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                  }`}
                >
                  Languages
                </h2>
                <div className="text-stone-800">
                  {languages.map((l) => `${l.language} (${l.proficiency})`).join(' · ')}
                </div>
              </div>
            )}

            {relevantCoursework.length > 0 && (
              <div>
                <h2
                  className={`text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-1.5 ${
                    template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                  }`}
                >
                  Relevant Coursework
                </h2>
                <div className="text-stone-800 leading-relaxed text-[11px]">
                  {relevantCoursework.join(' · ')}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 15: Additional Information */}
          {(additionalInfo.openSourceContributions ||
            additionalInfo.researchWork ||
            additionalInfo.technicalInterests.length > 0 ||
            additionalInfo.relevantHobbies.length > 0) && (
            <section className="print-page-break-avoid border-t border-stone-200 pt-3 text-xs text-stone-800 space-y-1">
              <h2
                className={`text-xs font-bold uppercase tracking-wider text-stone-900 pb-1 ${
                  template === 'editorial' ? 'font-serif text-amber-900' : 'font-mono'
                }`}
              >
                Additional Information
              </h2>
              {additionalInfo.technicalInterests.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Technical Interests: </strong>
                  <span>{additionalInfo.technicalInterests.join(', ')}</span>
                </div>
              )}
              {additionalInfo.openSourceContributions && (
                <div>
                  <strong className="text-stone-950 font-semibold">Open Source: </strong>
                  <span>{additionalInfo.openSourceContributions}</span>
                </div>
              )}
              {additionalInfo.researchWork && (
                <div>
                  <strong className="text-stone-950 font-semibold">Research: </strong>
                  <span>{additionalInfo.researchWork}</span>
                </div>
              )}
              {additionalInfo.relevantHobbies.length > 0 && (
                <div>
                  <strong className="text-stone-950 font-semibold">Hobbies & Activities: </strong>
                  <span>{additionalInfo.relevantHobbies.join(' · ')}</span>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
