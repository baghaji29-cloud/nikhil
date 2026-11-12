import React, { useState } from 'react';
import { AdditionalInfo } from '../../types/profile';
import { Sparkles, Plus, X } from 'lucide-react';

interface AdditionalInfoSectionProps {
  data: AdditionalInfo;
  onChange: (updated: AdditionalInfo) => void;
}

export const AdditionalInfoSection: React.FC<AdditionalInfoSectionProps> = ({
  data,
  onChange,
}) => {
  const [techInterestInput, setTechInterestInput] = useState('');
  const [hobbyInput, setHobbyInput] = useState('');
  const [profInterestInput, setProfInterestInput] = useState('');

  const update = (key: keyof AdditionalInfo, value: any) => {
    onChange({ ...data, [key]: value });
  };

  const addTag = (
    field: 'technicalInterests' | 'relevantHobbies' | 'professionalInterests',
    val: string,
    resetFn: (v: string) => void
  ) => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (!data[field].includes(trimmed)) {
      update(field, [...data[field], trimmed]);
    }
    resetFn('');
  };

  const removeTag = (
    field: 'technicalInterests' | 'relevantHobbies' | 'professionalInterests',
    tag: string
  ) => {
    update(
      field,
      data[field].filter((t) => t !== tag)
    );
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>15. Additional Information & Intellectual Pursuits</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Open-source contributions, academic research papers, technical interests, and character-building hobbies.
        </p>
      </div>

      <div className="space-y-5">
        {/* Technical Interests */}
        <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-3">
          <label className="block text-xs font-medium text-stone-300">
            Technical Interests (e.g. Distributed Systems, Vector Search, Cloud Native)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={techInterestInput}
              onChange={(e) => setTechInterestInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' &&
                addTag('technicalInterests', techInterestInput, setTechInterestInput)
              }
              placeholder="Type interest & press Enter..."
              className="flex-1 px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none"
            />
            <button
              onClick={() =>
                addTag('technicalInterests', techInterestInput, setTechInterestInput)
              }
              className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {data.technicalInterests.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-200 text-xs"
              >
                <span>{t}</span>
                <button
                  onClick={() => removeTag('technicalInterests', t)}
                  className="text-stone-400 hover:text-rose-400"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-2">
          <label className="block text-xs font-medium text-stone-300">
            Open Source Contributions
          </label>
          <textarea
            rows={2}
            value={data.openSourceContributions}
            onChange={(e) => update('openSourceContributions', e.target.value)}
            placeholder="e.g. Active contributor to Vite ecosystem; created npm package 'react-glass' with 18,000+ downloads..."
            className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none"
          />
        </div>

        {/* Research Work */}
        <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-2">
          <label className="block text-xs font-medium text-stone-300">
            Research Work & Academic Publications
          </label>
          <textarea
            rows={2}
            value={data.researchWork}
            onChange={(e) => update('researchWork', e.target.value)}
            placeholder="e.g. Co-authored 'Adaptive Cache Eviction in Distributed Edge Nodes' accepted at IEEE Student Conclave 2025..."
            className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none"
          />
        </div>

        {/* Hobbies & Professional Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Relevant Hobbies */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-3">
            <label className="block text-xs font-medium text-stone-300">
              Relevant Hobbies & Pursuits
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={hobbyInput}
                onChange={(e) => setHobbyInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && addTag('relevantHobbies', hobbyInput, setHobbyInput)
                }
                placeholder="e.g. Chess (1700 ELO), Marathon..."
                className="flex-1 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
              />
              <button
                onClick={() => addTag('relevantHobbies', hobbyInput, setHobbyInput)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.relevantHobbies.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-stone-800 text-stone-200 text-xs"
                >
                  <span>{h}</span>
                  <button
                    onClick={() => removeTag('relevantHobbies', h)}
                    className="text-stone-400 hover:text-rose-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Professional Interests */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-3">
            <label className="block text-xs font-medium text-stone-300">
              Professional Interests & Industry Focus
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={profInterestInput}
                onChange={(e) => setProfInterestInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' &&
                  addTag('professionalInterests', profInterestInput, setProfInterestInput)
                }
                placeholder="e.g. Platform Engineering, DevEx..."
                className="flex-1 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
              />
              <button
                onClick={() =>
                  addTag('professionalInterests', profInterestInput, setProfInterestInput)
                }
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.professionalInterests.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-stone-800 text-stone-200 text-xs"
                >
                  <span>{p}</span>
                  <button
                    onClick={() => removeTag('professionalInterests', p)}
                    className="text-stone-400 hover:text-rose-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
