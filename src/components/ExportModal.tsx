import React, { useRef, useState } from 'react';
import { FullProfile } from '../types/profile';
import {
  X,
  Printer,
  Download,
  Upload,
  Copy,
  Check,
  AlertTriangle,
  FileCode,
  FileText,
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: FullProfile;
  onImportProfile: (imported: FullProfile) => void;
  onResetProfile: () => void;
  onPrint: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  profile,
  onImportProfile,
  onResetProfile,
  onPrint,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedJSON, setCopiedJSON] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const downloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    const sanitizedName = profile.personalInfo.fullName
      ? profile.personalInfo.fullName.toLowerCase().replace(/[^a-z0-9]/g, '_')
      : 'profile';
    downloadAnchor.setAttribute('download', `${sanitizedName}_astraprofile.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.personalInfo && parsed.education) {
          onImportProfile(parsed);
          onClose();
        } else {
          alert('Invalid profile JSON format: missing personalInfo or education.');
        }
      } catch (err) {
        alert('Could not parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const generatePlainText = () => {
    const { personalInfo, professionalSummary, education, technicalSkills, projects, internships, workExperience } = profile;
    let text = `${personalInfo.fullName}\n`;
    text += `${personalInfo.headline || ''}\n`;
    text += `${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.cityState}\n`;
    if (personalInfo.linkedIn) text += `LinkedIn: ${personalInfo.linkedIn}\n`;
    if (personalInfo.github) text += `GitHub: ${personalInfo.github}\n`;
    text += `\n=========================\nPROFESSIONAL SUMMARY\n=========================\n${professionalSummary.summary}\n`;
    text += `\n=========================\nEDUCATION\n=========================\n${education.collegeName} — ${education.degree} in ${education.branch} (${education.cgpa})\n`;
    text += `\n=========================\nTECHNICAL SKILLS\n=========================\nLanguages: ${technicalSkills.programmingLanguages.join(', ')}\nWeb: ${technicalSkills.webDevelopment.join(', ')}\nDatabases: ${technicalSkills.databaseManagement.join(', ')}\nTools: ${technicalSkills.devTools.join(', ')}\n`;
    if (projects.length > 0) {
      text += `\n=========================\nPROJECTS\n=========================\n`;
      projects.forEach((p) => {
        text += `\n* ${p.name} [${p.technologies.join(', ')}]\n  ${p.overview}\n  Impact: ${p.achievementsResults}\n`;
      });
    }
    return text;
  };

  const copyPlainText = () => {
    navigator.clipboard.writeText(generatePlainText());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
    setCopiedJSON(true);
    setTimeout(() => setCopiedJSON(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-lg">✦</span>
            <h3 className="text-base font-serif font-medium text-stone-100">
              Export, Print & Backup Workspace
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Export Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Option 1: Print / Save as PDF */}
          <button
            onClick={() => {
              onClose();
              onPrint();
            }}
            className="p-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-left transition-all flex flex-col justify-between group shadow-sm shadow-amber-500/10"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Recommended</span>
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Print & Save PDF</h4>
              <p className="text-[11px] text-stone-800 mt-0.5">
                Launches browser print dialog formatted for standard A4/Letter multi-page paper.
              </p>
            </div>
          </button>

          {/* Option 2: Download JSON Backup */}
          <button
            onClick={downloadJSON}
            className="p-4 rounded-xl bg-stone-950 hover:bg-stone-850 text-stone-200 border border-stone-800 hover:border-stone-700 text-left transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3 text-stone-400">
              <span className="text-xs font-mono uppercase tracking-wider">Local Backup</span>
              <Download className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">Download JSON File</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Save complete data profile file to restore your work anytime.
              </p>
            </div>
          </button>

          {/* Option 3: Copy Plain Text */}
          <button
            onClick={copyPlainText}
            className="p-4 rounded-xl bg-stone-950 hover:bg-stone-850 text-stone-200 border border-stone-800 hover:border-stone-700 text-left transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3 text-stone-400">
              <span className="text-xs font-mono uppercase tracking-wider">Quick Apply</span>
              {copiedText ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-stone-400" />
              )}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">
                {copiedText ? 'Copied to Clipboard!' : 'Copy Plain Text'}
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Formatted text ready for copy-pasting into job portal application fields.
              </p>
            </div>
          </button>

          {/* Option 4: Import Profile */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-4 rounded-xl bg-stone-950 hover:bg-stone-850 text-stone-200 border border-stone-800 hover:border-stone-700 text-left transition-all flex flex-col justify-between"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <div className="flex items-center justify-between mb-3 text-stone-400">
              <span className="text-xs font-mono uppercase tracking-wider">Restore Profile</span>
              <Upload className="w-4 h-4 text-stone-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">Import JSON File</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Load a previously saved AstraProfile JSON file into the editor.
              </p>
            </div>
          </button>
        </div>

        {/* Reset Section */}
        <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
          <span className="text-stone-500">Need a fresh start?</span>

          {confirmReset ? (
            <div className="flex items-center gap-2">
              <span className="text-rose-400 font-medium">Are you sure?</span>
              <button
                onClick={() => {
                  onResetProfile();
                  setConfirmReset(false);
                  onClose();
                }}
                className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded font-medium"
              >
                Yes, Clear All
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              Reset to Blank Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
