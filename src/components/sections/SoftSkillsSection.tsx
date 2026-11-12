import React, { useState } from 'react';
import { HeartHandshake, Check, Plus, X } from 'lucide-react';

interface SoftSkillsSectionProps {
  data: string[];
  onChange: (updated: string[]) => void;
}

const DEFAULT_SOFT_SKILLS = [
  'Communication Skills',
  'Leadership',
  'Teamwork',
  'Problem Solving',
  'Time Management',
  'Critical Thinking',
  'Adaptability',
  'Quick Learning',
  'Creativity',
  'Decision Making',
  'Conflict Resolution',
  'Active Listening',
  'Emotional Intelligence',
  'Mentorship',
  'Cross-Functional Collaboration',
];

export const SoftSkillsSection: React.FC<SoftSkillsSectionProps> = ({ data, onChange }) => {
  const [customSkill, setCustomSkill] = useState('');

  const toggleSkill = (skill: string) => {
    if (data.includes(skill)) {
      onChange(data.filter((s) => s !== skill));
    } else {
      onChange([...data, skill]);
    }
  };

  const addCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (!trimmed) return;
    if (!data.includes(trimmed)) {
      onChange([...data, trimmed]);
    }
    setCustomSkill('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span>5. Soft Skills & Professional Attributes</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Select the core interpersonal and cognitive attributes that define your work ethic and collaboration style.
        </p>
      </div>

      <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4">
        <div className="flex flex-wrap gap-2.5">
          {DEFAULT_SOFT_SKILLS.map((skill) => {
            const isSelected = data.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 shadow-sm shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 hover:text-stone-100 border border-stone-800 hover:border-stone-700'
                }`}
              >
                {isSelected ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-stone-500" />
                )}
                <span>{skill}</span>
              </button>
            );
          })}
        </div>

        {/* Add custom soft skill */}
        <div className="pt-3 border-t border-stone-800/60 flex items-center gap-3">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomSkill()}
            placeholder="Add custom soft skill (e.g. Stakeholder Management)..."
            className="flex-1 px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
          />
          <button
            onClick={addCustomSkill}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Custom</span>
          </button>
        </div>
      </div>
    </div>
  );
};
