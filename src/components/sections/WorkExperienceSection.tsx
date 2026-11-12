import React, { useState } from 'react';
import { WorkExperienceItem } from '../../types/profile';
import { Building2, Plus, Trash2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { enhanceBulletPoint } from '../../utils/aiBulletEnhancer';

interface WorkExperienceSectionProps {
  data: WorkExperienceItem[];
  onChange: (updated: WorkExperienceItem[]) => void;
}

export const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  data,
  onChange,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(data[0]?.id || null);

  const addExperience = () => {
    const newItem: WorkExperienceItem = {
      id: `work_${Date.now()}`,
      company: '',
      jobTitle: '',
      employmentType: 'Full-time',
      duration: '',
      startDate: '',
      endDate: 'Present',
      keyResponsibilities: '',
      majorContributions: '',
      achievementsResults: '',
    };
    onChange([...data, newItem]);
    setExpandedId(newItem.id);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter((w) => w.id !== id));
  };

  const updateItem = (id: string, key: keyof WorkExperienceItem, value: any) => {
    onChange(data.map((w) => (w.id === id ? { ...w, [key]: value } : w)));
  };

  const handleEnhance = (id: string, current: string) => {
    const res = enhanceBulletPoint(current);
    updateItem(id, 'achievementsResults', res.enhanced);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>8. Work Experience</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Full-time, contract, freelance, or on-campus roles showing progressive technical responsibility and commercial impact.
          </p>
        </div>

        <button
          onClick={addExperience}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Work Experience</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Building2 className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No full-time roles added</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Working professionals can list full-time career stops, promotions, and organizational achievements.
          </p>
          <button
            onClick={addExperience}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Work Experience</span>
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
                        {item.jobTitle || 'Job Title'}{' '}
                        {item.company ? `at ${item.company}` : ''}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-stone-400">
                        <span>{item.employmentType}</span>
                        <span>·</span>
                        <span>{item.duration || `${item.startDate} – ${item.endDate}`}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeExperience(item.id);
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Company Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.company}
                          onChange={(e) => updateItem(item.id, 'company', e.target.value)}
                          placeholder="e.g. Northwave Labs or Stripe"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Job Title <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.jobTitle}
                          onChange={(e) => updateItem(item.id, 'jobTitle', e.target.value)}
                          placeholder="e.g. Senior Software Engineer"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Employment Type
                        </label>
                        <select
                          value={item.employmentType}
                          onChange={(e) =>
                            updateItem(item.id, 'employmentType', e.target.value as any)
                          }
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Remote">Remote</option>
                          <option value="Freelance">Freelance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Duration (e.g. 2 Years 4 Mos)
                        </label>
                        <input
                          type="text"
                          value={item.duration}
                          onChange={(e) => updateItem(item.id, 'duration', e.target.value)}
                          placeholder="e.g. 2 Years 4 Months"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Start Date
                        </label>
                        <input
                          type="text"
                          value={item.startDate}
                          onChange={(e) => updateItem(item.id, 'startDate', e.target.value)}
                          placeholder="e.g. March 2023"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          End Date
                        </label>
                        <input
                          type="text"
                          value={item.endDate}
                          onChange={(e) => updateItem(item.id, 'endDate', e.target.value)}
                          placeholder="e.g. Present"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Key Responsibilities
                      </label>
                      <textarea
                        rows={2}
                        value={item.keyResponsibilities}
                        onChange={(e) => updateItem(item.id, 'keyResponsibilities', e.target.value)}
                        placeholder="e.g. Lead a team of 8 engineers architecting ledger settlement pipelines processing $850M+..."
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Major Contributions
                      </label>
                      <textarea
                        rows={2}
                        value={item.majorContributions}
                        onChange={(e) => updateItem(item.id, 'majorContributions', e.target.value)}
                        placeholder="e.g. Spearheaded transition from monolith to event-driven microservices with Kafka..."
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-medium text-stone-300">
                          Achievements and Results (Numbers & Metrics)
                        </label>
                        <button
                          onClick={() => handleEnhance(item.id, item.achievementsResults)}
                          className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 font-mono"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>AI Polish Result</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        value={item.achievementsResults}
                        onChange={(e) => updateItem(item.id, 'achievementsResults', e.target.value)}
                        placeholder="e.g. Achieved 99.995% uptime and lowered annual cloud spend by $320,000"
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
