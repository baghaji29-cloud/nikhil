import React from 'react';
import { ExtracurricularItem } from '../../types/profile';
import { Users, Plus, Trash2 } from 'lucide-react';

interface ExtracurricularSectionProps {
  data: ExtracurricularItem[];
  onChange: (updated: ExtracurricularItem[]) => void;
}

const CATEGORIES: ExtracurricularItem['category'][] = [
  'College Club & Society',
  'Sports',
  'Volunteering',
  'Cultural Event',
  'Event Management',
  'Technical Community',
  'Social Activity',
];

export const ExtracurricularSection: React.FC<ExtracurricularSectionProps> = ({
  data,
  onChange,
}) => {
  const addActivity = () => {
    const newItem: ExtracurricularItem = {
      id: `ext_${Date.now()}`,
      activityName: '',
      category: 'College Club & Society',
      role: '',
      description: '',
    };
    onChange([...data, newItem]);
  };

  const removeActivity = (id: string) => {
    onChange(data.filter((e) => e.id !== id));
  };

  const updateItem = (id: string, key: keyof ExtracurricularItem, value: any) => {
    onChange(data.map((e) => (e.id === id ? { ...e, [key]: value } : e)));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>11. Extracurricular Activities</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            College societies, sports tournaments, hackathon volunteer initiatives, community outreach, and cultural events.
          </p>
        </div>

        <button
          onClick={addActivity}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Activity</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Users className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No activities added</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Extracurriculars reflect culture fit, balanced personality, and community initiative.
          </p>
          <button
            onClick={addActivity}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add First Activity</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <button
                  onClick={() => removeActivity(item.id)}
                  className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Activity / Organization / Club Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={item.activityName}
                    onChange={(e) => updateItem(item.id, 'activityName', e.target.value)}
                    placeholder="e.g. ACM Student Chapter / Girls Who Code"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Category
                  </label>
                  <select
                    value={item.category}
                    onChange={(e) => updateItem(item.id, 'category', e.target.value)}
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
                    Role / Position Held
                  </label>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => updateItem(item.id, 'role', e.target.value)}
                    placeholder="e.g. Director of Engineering or Volunteer Mentor"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Description & Contributions
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                    placeholder="e.g. Organized weekend coding sprints, taught Git to 250+ freshmen students"
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
