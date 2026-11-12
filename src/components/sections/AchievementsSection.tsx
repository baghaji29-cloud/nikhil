import React from 'react';
import { AchievementItem } from '../../types/profile';
import { Trophy, Plus, Trash2 } from 'lucide-react';

interface AchievementsSectionProps {
  data: AchievementItem[];
  onChange: (updated: AchievementItem[]) => void;
}

const CATEGORIES: AchievementItem['category'][] = [
  'Academic',
  'Hackathon',
  'Coding Competition',
  'Scholarship',
  'Technical',
  'Sports',
  'Recognition',
];

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  data,
  onChange,
}) => {
  const addAchievement = () => {
    const newItem: AchievementItem = {
      id: `ach_${Date.now()}`,
      title: '',
      category: 'Hackathon',
      organization: '',
      year: new Date().getFullYear().toString(),
      description: '',
    };
    onChange([...data, newItem]);
  };

  const removeAchievement = (id: string) => {
    onChange(data.filter((a) => a.id !== id));
  };

  const updateItem = (id: string, key: keyof AchievementItem, value: any) => {
    onChange(data.map((a) => (a.id === id ? { ...a, [key]: value } : a)));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>10. Achievements and Awards</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Competitive programming rankings (LeetCode, Codeforces), hackathon wins, merit scholarships, and academic honors.
          </p>
        </div>

        <button
          onClick={addAchievement}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Achievement</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Trophy className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No achievements recorded</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Honors and competitive rankings set your profile apart in competitive hiring batches.
          </p>
          <button
            onClick={addAchievement}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add First Achievement</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((ach) => (
            <div
              key={ach.id}
              className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  {ach.category} Achievement
                </span>
                <button
                  onClick={() => removeAchievement(ach.id)}
                  className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Achievement / Award Title <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={ach.title}
                    onChange={(e) => updateItem(ach.id, 'title', e.target.value)}
                    placeholder="e.g. 1st Place Winner — HackMIT National Collegiate Hackathon"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Category
                  </label>
                  <select
                    value={ach.category}
                    onChange={(e) => updateItem(ach.id, 'category', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Year
                  </label>
                  <input
                    type="text"
                    value={ach.year}
                    onChange={(e) => updateItem(ach.id, 'year', e.target.value)}
                    placeholder="2024"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Awarding Organization / Platform
                  </label>
                  <input
                    type="text"
                    value={ach.organization}
                    onChange={(e) => updateItem(ach.id, 'organization', e.target.value)}
                    placeholder="e.g. MIT TechX / LeetCode / AnitaB.org"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Description & Distinction
                  </label>
                  <input
                    type="text"
                    value={ach.description}
                    onChange={(e) => updateItem(ach.id, 'description', e.target.value)}
                    placeholder="e.g. Selected 1st out of 380+ teams for building decentralized disaster relief protocol"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
