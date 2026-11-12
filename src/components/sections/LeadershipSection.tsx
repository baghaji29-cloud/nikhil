import React from 'react';
import { LeadershipItem } from '../../types/profile';
import { Crown, Plus, Trash2 } from 'lucide-react';

interface LeadershipSectionProps {
  data: LeadershipItem[];
  onChange: (updated: LeadershipItem[]) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ data, onChange }) => {
  const addLeadership = () => {
    const newItem: LeadershipItem = {
      id: `lead_${Date.now()}`,
      title: '',
      organization: '',
      duration: '',
      keyImpact: '',
    };
    onChange([...data, newItem]);
  };

  const removeLeadership = (id: string) => {
    onChange(data.filter((l) => l.id !== id));
  };

  const updateItem = (id: string, key: keyof LeadershipItem, value: string) => {
    onChange(data.map((l) => (l.id === id ? { ...l, [key]: value } : l)));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>12. Leadership and Positions of Responsibility</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Positions demonstrating team coordination, budget handling, committee direction, or mentorship leadership.
          </p>
        </div>

        <button
          onClick={addLeadership}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Position</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Crown className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No leadership roles recorded</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Highlighting student representative, team lead, or event director roles proves accountability.
          </p>
          <button
            onClick={addLeadership}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Position</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((lead) => (
            <div
              key={lead.id}
              className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Leadership Role
                </span>
                <button
                  onClick={() => removeLeadership(lead.id)}
                  className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Position Title (Team Lead, Coordinator, Representative) <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={lead.title}
                    onChange={(e) => updateItem(lead.id, 'title', e.target.value)}
                    placeholder="e.g. Lead Organizer & Technical Director — Hackathon 2025"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Organization / Committee / Body <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={lead.organization}
                    onChange={(e) => updateItem(lead.id, 'organization', e.target.value)}
                    placeholder="e.g. University Innovation Council"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Tenure / Duration
                  </label>
                  <input
                    type="text"
                    value={lead.duration}
                    onChange={(e) => updateItem(lead.id, 'duration', e.target.value)}
                    placeholder="e.g. 8 Months or 1 Year"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Key Impact & Initiatives Led
                  </label>
                  <input
                    type="text"
                    value={lead.keyImpact}
                    onChange={(e) => updateItem(lead.id, 'keyImpact', e.target.value)}
                    placeholder="e.g. Directed 14-person committee, raised $42,000 in sponsorships, hosted 600 hackers"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none font-medium text-amber-100"
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
