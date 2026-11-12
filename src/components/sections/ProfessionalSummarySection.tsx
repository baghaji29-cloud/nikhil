import React, { useState } from 'react';
import { ProfessionalSummary } from '../../types/profile';
import { Compass, Sparkles, Check, Wand2 } from 'lucide-react';
import { enhanceBulletPoint } from '../../utils/aiBulletEnhancer';

interface ProfessionalSummarySectionProps {
  data: ProfessionalSummary;
  onChange: (updated: ProfessionalSummary) => void;
}

export const ProfessionalSummarySection: React.FC<ProfessionalSummarySectionProps> = ({
  data,
  onChange,
}) => {
  const [enhancedSuccess, setEnhancedSuccess] = useState(false);

  const update = (key: keyof ProfessionalSummary, value: string) => {
    onChange({ ...data, [key]: value });
  };

  const handleAIEnhance = () => {
    const res = enhanceBulletPoint(data.summary);
    onChange({
      ...data,
      summary: res.enhanced,
    });
    setEnhancedSuccess(true);
    setTimeout(() => setEnhancedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>2. Professional Summary / Career Objective</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Synthesize your background, skills, and forward-looking ambitions in 2–4 high-impact lines.
          </p>
        </div>

        <button
          onClick={handleAIEnhance}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            enhancedSuccess
              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
              : 'bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30'
          }`}
        >
          {enhancedSuccess ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Summary Enhanced!</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Polish Summary</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        {/* Main Summary */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Short Professional Introduction (2–4 lines) <span className="text-amber-400">*</span>
          </label>
          <textarea
            rows={3}
            value={data.summary}
            onChange={(e) => update('summary', e.target.value)}
            placeholder="e.g. Proactive Computer Science senior with strong foundation in distributed systems, full-stack web architectures, and algorithmic problem solving..."
            className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Current Educational Background */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Current Educational Background
            </label>
            <input
              type="text"
              value={data.educationalBackground}
              onChange={(e) => update('educationalBackground', e.target.value)}
              placeholder="e.g. Pursuing B.Tech in CSE (Final Year) with 3.92 CGPA"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          {/* Key Skills Highlight */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Key Technical & Professional Skills
            </label>
            <input
              type="text"
              value={data.keySkillsOverview}
              onChange={(e) => update('keySkillsOverview', e.target.value)}
              placeholder="e.g. TypeScript, React 19, Python, Distributed Systems, AWS"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          {/* Career Interests and Goals */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Career Interests and Goals
            </label>
            <input
              type="text"
              value={data.careerGoals}
              onChange={(e) => update('careerGoals', e.target.value)}
              placeholder="e.g. Aiming to build scalable cloud-native architectures in fintech"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>

          {/* Professional Strengths and Value */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Professional Strengths & Value
            </label>
            <input
              type="text"
              value={data.coreStrengths}
              onChange={(e) => update('coreStrengths', e.target.value)}
              placeholder="e.g. Proven track record shipping features to 2,000+ daily users"
              className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
