import React, { useState } from 'react';
import { TechnicalSkills } from '../../types/profile';
import { Code2, Plus, X, Sparkles } from 'lucide-react';

interface TechnicalSkillsSectionProps {
  data: TechnicalSkills;
  onChange: (updated: TechnicalSkills) => void;
}

interface CategoryConfig {
  key: keyof TechnicalSkills;
  title: string;
  description: string;
  suggestions: string[];
}

const CATEGORIES: CategoryConfig[] = [
  {
    key: 'programmingLanguages',
    title: 'Programming Languages',
    description: 'Core syntax and system languages',
    suggestions: ['C', 'C++', 'Python', 'Java', 'TypeScript', 'JavaScript (ES6+)', 'Go (Golang)', 'Rust', 'SQL', 'C#'],
  },
  {
    key: 'webDevelopment',
    title: 'Web Development',
    description: 'Client, server and API web stacks',
    suggestions: ['HTML5', 'CSS3', 'React 19', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    key: 'databaseManagement',
    title: 'Database Management',
    description: 'Relational, document, and in-memory datastores',
    suggestions: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'SQLite', 'Prisma ORM'],
  },
  {
    key: 'devTools',
    title: 'Development Tools',
    description: 'Editors, version control, and containerization',
    suggestions: ['VS Code', 'Git', 'GitHub', 'GitHub Actions', 'Docker', 'Postman', 'Linux / Bash', 'Vite', 'Webpack'],
  },
  {
    key: 'frameworksLibraries',
    title: 'Frameworks and Libraries',
    description: 'Ecosystem packages and utility frameworks',
    suggestions: ['Redux Toolkit', 'Zustand', 'FastAPI', 'Django', 'Spring Boot', 'Lucide React', 'Jest / Vitest', 'PyTorch'],
  },
  {
    key: 'otherTechnicalSkills',
    title: 'Other Relevant Technical Skills',
    description: 'Architecture, security, and methodologies',
    suggestions: ['System Design', 'Microservices', 'OAuth 2.0 / JWT', 'Agile / Scrum', 'CI/CD Pipelines', 'Cloud Architecture'],
  },
];

export const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({
  data,
  onChange,
}) => {
  const [inputStates, setInputStates] = useState<Record<string, string>>({});

  const addSkill = (category: keyof TechnicalSkills, skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed) return;
    if (data[category].includes(trimmed)) return;

    onChange({
      ...data,
      [category]: [...data[category], trimmed],
    });

    setInputStates((prev) => ({ ...prev, [category]: '' }));
  };

  const removeSkill = (category: keyof TechnicalSkills, skillToRemove: string) => {
    onChange({
      ...data,
      [category]: data[category].filter((s) => s !== skillToRemove),
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    category: keyof TechnicalSkills
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(category, inputStates[category] || '');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-amber-400" />
          <span>4. Technical Skills (Categorized)</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Organize your core engineering abilities into clean categories. Click suggested tags or type and press Enter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((cat) => {
          const skills = data[cat.key];
          const currentInput = inputStates[cat.key] || '';

          return (
            <div
              key={cat.key}
              className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm font-semibold text-stone-200">
                    {cat.title}
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 tabular-nums">
                    {skills.length} skills
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 mb-3">{cat.description}</p>

                {/* Input field */}
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) =>
                      setInputStates((prev) => ({ ...prev, [cat.key]: e.target.value }))
                    }
                    onKeyDown={(e) => handleKeyDown(e, cat.key)}
                    placeholder="Type skill & press Enter..."
                    className="flex-1 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
                  />
                  <button
                    onClick={() => addSkill(cat.key, currentInput)}
                    className="p-1.5 bg-stone-800 hover:bg-amber-400 hover:text-stone-950 text-stone-300 rounded-lg transition-colors"
                    title="Add skill"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Active Skills Pills */}
                <div className="flex flex-wrap gap-1.5 min-h-[32px] mb-3">
                  {skills.length === 0 ? (
                    <span className="text-xs text-stone-600 italic">No skills added yet</span>
                  ) : (
                    skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-800/90 text-stone-200 text-xs border border-stone-700/60 hover:border-amber-400/40 transition-colors"
                      >
                        <span>{skill}</span>
                        <button
                          onClick={() => removeSkill(cat.key, skill)}
                          className="text-stone-400 hover:text-rose-400 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Suggestions */}
              <div className="pt-2 border-t border-stone-800/60">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1.5">
                  Popular Suggestions:
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.suggestions
                    .filter((s) => !skills.includes(s))
                    .slice(0, 5)
                    .map((sug) => (
                      <button
                        key={sug}
                        onClick={() => addSkill(cat.key, sug)}
                        className="text-[11px] px-2 py-0.5 rounded bg-stone-950/70 hover:bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-800/60 transition-colors"
                      >
                        + {sug}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
