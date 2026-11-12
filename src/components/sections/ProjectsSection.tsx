import React, { useState } from 'react';
import { ProjectItem } from '../../types/profile';
import { FolderGit2, Plus, Trash2, ExternalLink, Github, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { enhanceBulletPoint } from '../../utils/aiBulletEnhancer';

interface ProjectsSectionProps {
  data: ProjectItem[];
  onChange: (updated: ProjectItem[]) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data, onChange }) => {
  const [expandedId, setExpandedId] = useState<string | null>(data[0]?.id || null);
  const [techInput, setTechInput] = useState<Record<string, string>>({});

  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj_${Date.now()}`,
      name: '',
      overview: '',
      problemSolves: '',
      technologies: [],
      keyFeatures: '',
      individualRole: '',
      achievementsResults: '',
      githubUrl: '',
      liveUrl: '',
    };
    onChange([...data, newProj]);
    setExpandedId(newProj.id);
  };

  const removeProject = (id: string) => {
    onChange(data.filter((p) => p.id !== id));
  };

  const updateProject = (id: string, key: keyof ProjectItem, value: any) => {
    onChange(
      data.map((p) => (p.id === id ? { ...p, [key]: value } : p))
    );
  };

  const addTechTag = (id: string, tag: string) => {
    const trimmed = tag.trim();
    if (!trimmed) return;
    const project = data.find((p) => p.id === id);
    if (!project) return;
    if (project.technologies.includes(trimmed)) return;

    updateProject(id, 'technologies', [...project.technologies, trimmed]);
    setTechInput((prev) => ({ ...prev, [id]: '' }));
  };

  const removeTechTag = (id: string, tagToRemove: string) => {
    const project = data.find((p) => p.id === id);
    if (!project) return;
    updateProject(
      id,
      'technologies',
      project.technologies.filter((t) => t !== tagToRemove)
    );
  };

  const handleEnhanceResults = (id: string, currentText: string) => {
    const res = enhanceBulletPoint(currentText);
    updateProject(id, 'achievementsResults', res.enhanced);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-amber-400" />
            <span>6. Projects & Engineering Portfolio</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Showcase hands-on applications, problem-solving depth, architecture choices, and quantified outcomes.
          </p>
        </div>

        <button
          onClick={addProject}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <FolderGit2 className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No projects added yet</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Adding 2–3 projects with problem context and live demos significantly improves interview callbacks.
          </p>
          <button
            onClick={addProject}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add First Project</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((proj, idx) => {
            const isExpanded = expandedId === proj.id;
            const currentTech = techInput[proj.id] || '';

            return (
              <div
                key={proj.id}
                className="rounded-xl bg-stone-900/60 border border-stone-800/80 overflow-hidden transition-all"
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-stone-850/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-stone-100 truncate">
                        {proj.name || 'Untitled Project'}
                      </h4>
                      <p className="text-xs text-stone-400 truncate max-w-md">
                        {proj.technologies.join(', ') || 'No tech stack defined'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProject(proj.id);
                      }}
                      className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                      title="Delete project"
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

                {/* Expanded Form Fields */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-stone-800/80 space-y-4 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Project Name */}
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Project Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                          placeholder="e.g. OmniStream — Real-Time Collaborative Canvas"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Problem It Solves */}
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Problem It Solves
                        </label>
                        <input
                          type="text"
                          value={proj.problemSolves}
                          onChange={(e) => updateProject(proj.id, 'problemSolves', e.target.value)}
                          placeholder="e.g. Eliminates sync stutter and merge conflicts during remote wireframing"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Overview */}
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Project Overview / Description <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        rows={2}
                        value={proj.overview}
                        onChange={(e) => updateProject(proj.id, 'overview', e.target.value)}
                        placeholder="Comprehensive summary of what the system does and how users interact with it..."
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Technologies Used (Tags) */}
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Technologies Used
                      </label>
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={currentTech}
                          onChange={(e) =>
                            setTechInput((prev) => ({ ...prev, [proj.id]: e.target.value }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              addTechTag(proj.id, currentTech);
                            }
                          }}
                          placeholder="Type tech (e.g. WebSockets, Redis) & press Enter..."
                          className="flex-1 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                        />
                        <button
                          onClick={() => addTechTag(proj.id, currentTech)}
                          className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg transition-colors"
                        >
                          Add
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-stone-800 text-stone-200 text-xs"
                          >
                            <span>{t}</span>
                            <button
                              onClick={() => removeTechTag(proj.id, t)}
                              className="text-stone-400 hover:text-rose-400"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features & Individual Role */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Key Features
                        </label>
                        <textarea
                          rows={2}
                          value={proj.keyFeatures}
                          onChange={(e) => updateProject(proj.id, 'keyFeatures', e.target.value)}
                          placeholder="e.g. CRDT conflict resolution, infinite zoom canvas, multi-cursor presence"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Individual Role / Contribution
                        </label>
                        <textarea
                          rows={2}
                          value={proj.individualRole}
                          onChange={(e) => updateProject(proj.id, 'individualRole', e.target.value)}
                          placeholder="e.g. Architected client-side delta sync and implemented spatial quad-tree collision"
                          className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Important Achievements or Results (with AI bullet polish) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-medium text-stone-300">
                          Important Achievements or Results (Quantifiable Impact)
                        </label>
                        <button
                          onClick={() => handleEnhanceResults(proj.id, proj.achievementsResults)}
                          className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 font-mono"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>AI Polish Result</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        value={proj.achievementsResults}
                        onChange={(e) => updateProject(proj.id, 'achievementsResults', e.target.value)}
                        placeholder="e.g. Benchmarked sub-15ms sync latency; adopted by 4 design labs with 2,400+ MAU"
                        className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors font-medium text-amber-100/90"
                      />
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          GitHub Repository Link
                        </label>
                        <div className="relative">
                          <Github className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="url"
                            value={proj.githubUrl}
                            onChange={(e) => updateProject(proj.id, 'githubUrl', e.target.value)}
                            placeholder="https://github.com/username/project"
                            className="w-full pl-8 pr-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Live Project / Demo Link
                        </label>
                        <div className="relative">
                          <ExternalLink className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="url"
                            value={proj.liveUrl}
                            onChange={(e) => updateProject(proj.id, 'liveUrl', e.target.value)}
                            placeholder="https://myproject.live"
                            className="w-full pl-8 pr-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
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
