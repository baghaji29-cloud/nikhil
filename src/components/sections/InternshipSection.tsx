import React, { useState } from 'react';
import { InternshipItem } from '../../types/profile';
import { Briefcase, Plus, Trash2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { enhanceBulletPoint } from '../../utils/aiBulletEnhancer';

interface InternshipSectionProps {
  data: InternshipItem[];
  onChange: (updated: InternshipItem[]) => void;
}

export const InternshipSection: React.FC<InternshipSectionProps> = ({ data, onChange }) => {
  const [expandedId, setExpandedId] = useState<string | null>(data[0]?.id || null);

  const addInternship = () => {
    const newItem: InternshipItem = {
      id: `int_${Date.now()}`,
      company: '',
      position: '',
      duration: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
      tasksPerformed: '',
      technologiesUsed: [],
      achievementsLearnings: '',
    };
    onChange([...data, newItem]);
    setExpandedId(newItem.id);
  };

  const removeInternship = (id: string) => {
    onChange(data.filter((i) => i.id !== id));
  };

  const updateItem = (id: string, key: keyof InternshipItem, value: any) => {
    onChange(data.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const handleEnhanceAchievements = (id: string, current: string) => {
    const res = enhanceBulletPoint(current);
    updateItem(id, 'achievementsLearnings', res.enhanced);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>7. Internship Experience</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Highlight summer training, industrial internships, corporate apprenticeships, and key achievements.
          </p>
        </div>

        <button
          onClick={addInternship}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Internship</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Briefcase className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No internships logged</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Internships demonstrate real team dynamics and domain learning to prospective employers.
          </p>
          <button
            onClick={addInternship}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add First Internship</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-stone-900/60 border border-stone-800/80 overflow-hidden transition-all"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-stone-850/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-stone-100 truncate">
                        {item.position || 'Internship Role'}{' '}
                        {item.company ? `at ${item.company}` : ''}
                      </h4>
                      <p className="text-xs text-stone-400 truncate">
                        {item.duration || `${item.startDate} – ${item.endDate}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeInternship(item.id);
                      }}
                      className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-stone-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-stone-800/80 space-y-4 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Company / Organization Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.company}
                          onChange={(e) => updateItem(item.id, 'company', e.target.value)}
                          placeholder="e.g. Cloudflare or Microsoft"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Internship Position / Role <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.position}
                          onChange={(e) => updateItem(item.id, 'position', e.target.value)}
                          placeholder="e.g. Software Engineering Intern"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Duration (e.g. 3 Months)
                        </label>
                        <input
                          type="text"
                          value={item.duration}
                          onChange={(e) => updateItem(item.id, 'duration', e.target.value)}
                          placeholder="e.g. 3 Months (Summer 2025)"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Starting Date
                        </label>
                        <input
                          type="text"
                          value={item.startDate}
                          onChange={(e) => updateItem(item.id, 'startDate', e.target.value)}
                          placeholder="e.g. June 2025"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Ending Date
                        </label>
                        <input
                          type="text"
                          value={item.endDate}
                          onChange={(e) => updateItem(item.id, 'endDate', e.target.value)}
                          placeholder="e.g. August 2025"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Technologies Used
                        </label>
                        <input
                          type="text"
                          value={item.technologiesUsed.join(', ')}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              'technologiesUsed',
                              e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                            )
                          }
                          placeholder="e.g. TypeScript, Kafka, Docker"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Key Responsibilities & Scope
                      </label>
                      <textarea
                        rows={2}
                        value={item.responsibilities}
                        onChange={(e) => updateItem(item.id, 'responsibilities', e.target.value)}
                        placeholder="Core mandate and domain ownership during the internship..."
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-medium text-stone-300">
                          Key Achievements & Learning Outcomes
                        </label>
                        <button
                          onClick={() => handleEnhanceAchievements(item.id, item.achievementsLearnings)}
                          className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 font-mono"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>AI Polish Result</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        value={item.achievementsLearnings}
                        onChange={(e) => updateItem(item.id, 'achievementsLearnings', e.target.value)}
                        placeholder="e.g. Reduced P99 telemetry latency by 28% and received return offer commendation"
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none font-medium text-amber-100"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
