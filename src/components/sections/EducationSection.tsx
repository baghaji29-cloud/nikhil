import React from 'react';
import { Education } from '../../types/profile';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  data: Education;
  onChange: (updated: Education) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ data, onChange }) => {
  const update = (key: keyof Education, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>3. Education & Academic Qualifications</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Detailed university qualifications, branch specialization, CGPA, plus Class 12th and 10th schooling records.
        </p>
      </div>

      {/* College / University Degree */}
      <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Higher Education / Degree</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              College / University Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={data.collegeName}
              onChange={(e) => update('collegeName', e.target.value)}
              placeholder="e.g. University of Texas at Austin / IIT Delhi"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Degree (B.Tech, BCA, BBA, BS, MS, etc.) <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={data.degree}
              onChange={(e) => update('degree', e.target.value)}
              placeholder="e.g. Bachelor of Technology (B.Tech)"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Branch / Specialization <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={data.branch}
              onChange={(e) => update('branch', e.target.value)}
              placeholder="e.g. Computer Science & Engineering"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Current Year / Semester
            </label>
            <input
              type="text"
              value={data.currentYearSem}
              onChange={(e) => update('currentYearSem', e.target.value)}
              placeholder="e.g. 4th Year / 8th Semester or Graduated"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Expected / Graduation Year
            </label>
            <input
              type="text"
              value={data.graduationYear}
              onChange={(e) => update('graduationYear', e.target.value)}
              placeholder="e.g. 2026 or 2024"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              CGPA / Percentage <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={data.cgpa}
              onChange={(e) => update('cgpa', e.target.value)}
              placeholder="e.g. 3.92 / 4.00 or 9.4 CGPA or 88%"
              className="w-full px-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Class 12th Schooling */}
      <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider">
          <School className="w-3.5 h-3.5" />
          <span>Class 12th / Senior Secondary</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              School / College Name
            </label>
            <input
              type="text"
              value={data.class12School}
              onChange={(e) => update('class12School', e.target.value)}
              placeholder="e.g. Delhi Public School / Westlake High"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Board
            </label>
            <input
              type="text"
              value={data.class12Board}
              onChange={(e) => update('class12Board', e.target.value)}
              placeholder="e.g. CBSE / ICSE / State"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Percentage / Score & Year
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={data.class12Percentage}
                onChange={(e) => update('class12Percentage', e.target.value)}
                placeholder="94.5%"
                className="w-full px-2.5 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
              />
              <input
                type="text"
                value={data.class12Year}
                onChange={(e) => update('class12Year', e.target.value)}
                placeholder="2022"
                className="w-full px-2.5 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Class 10th Schooling */}
      <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Class 10th / Secondary</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              School Name
            </label>
            <input
              type="text"
              value={data.class10School}
              onChange={(e) => update('class10School', e.target.value)}
              placeholder="e.g. St. Andrews Academy / National Public School"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Board
            </label>
            <input
              type="text"
              value={data.class10Board}
              onChange={(e) => update('class10Board', e.target.value)}
              placeholder="e.g. CBSE / ICSE / State"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Percentage / Score & Year
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={data.class10Percentage}
                onChange={(e) => update('class10Percentage', e.target.value)}
                placeholder="96.2%"
                className="w-full px-2.5 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
              />
              <input
                type="text"
                value={data.class10Year}
                onChange={(e) => update('class10Year', e.target.value)}
                placeholder="2020"
                className="w-full px-2.5 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
