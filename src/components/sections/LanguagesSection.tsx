import React from 'react';
import { LanguageItem } from '../../types/profile';
import { Languages as LangIcon, Plus, Trash2 } from 'lucide-react';

interface LanguagesSectionProps {
  data: LanguageItem[];
  onChange: (updated: LanguageItem[]) => void;
}

const PROFICIENCY_LEVELS: LanguageItem['proficiency'][] = [
  'Native',
  'Fluent',
  'Professional',
  'Intermediate',
  'Basic',
];

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ data, onChange }) => {
  const addLanguage = () => {
    const newItem: LanguageItem = {
      id: `lang_${Date.now()}`,
      language: '',
      proficiency: 'Fluent',
    };
    onChange([...data, newItem]);
  };

  const removeLanguage = (id: string) => {
    onChange(data.filter((l) => l.id !== id));
  };

  const updateItem = (id: string, key: keyof LanguageItem, value: any) => {
    onChange(data.map((l) => (l.id === id ? { ...l, [key]: value } : l)));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <LangIcon className="w-4 h-4 text-amber-400" />
            <span>13. Languages & Spoken Proficiency</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Indicate spoken and written fluency levels (Native, Fluent, Professional, Intermediate, Basic).
          </p>
        </div>

        <button
          onClick={addLanguage}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Language</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-center gap-3 justify-between"
          >
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={item.language}
                onChange={(e) => updateItem(item.id, 'language', e.target.value)}
                placeholder="Language (e.g. English, French, Hindi)..."
                className="w-full px-2.5 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
              />
              <select
                value={item.proficiency}
                onChange={(e) => updateItem(item.id, 'proficiency', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-300 text-xs focus:outline-none"
              >
                {PROFICIENCY_LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl} Proficiency
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => removeLanguage(item.id)}
              className="p-2 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
