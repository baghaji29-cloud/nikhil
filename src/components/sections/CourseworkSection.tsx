import React, { useState } from 'react';
import { BookOpen, Check, Plus, X } from 'lucide-react';

interface CourseworkSectionProps {
  data: string[];
  onChange: (updated: string[]) => void;
}

const PRESET_COURSEWORK = [
  'Programming Fundamentals',
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Object-Oriented Programming',
  'Software Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'Web Development',
  'Distributed Systems',
  'Computer Architecture',
  'Compiler Design',
  'Theory of Computation',
  'Cloud Computing',
  'Information Security & Cryptography',
  'Natural Language Processing',
  'Data Science & Big Data',
];

export const CourseworkSection: React.FC<CourseworkSectionProps> = ({ data, onChange }) => {
  const [customCourse, setCustomCourse] = useState('');

  const toggleCourse = (course: string) => {
    if (data.includes(course)) {
      onChange(data.filter((c) => c !== course));
    } else {
      onChange([...data, course]);
    }
  };

  const addCustomCourse = () => {
    const trimmed = customCourse.trim();
    if (!trimmed) return;
    if (!data.includes(trimmed)) {
      onChange([...data, trimmed]);
    }
    setCustomCourse('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>14. Relevant Academic Coursework</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Select standard Computer Science / Engineering degree modules or add specialized electives.
        </p>
      </div>

      <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4">
        <div className="flex flex-wrap gap-2.5">
          {PRESET_COURSEWORK.map((course) => {
            const isSelected = data.includes(course);
            return (
              <button
                key={course}
                onClick={() => toggleCourse(course)}
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
                <span>{course}</span>
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-stone-800/60 flex items-center gap-3">
          <input
            type="text"
            value={customCourse}
            onChange={(e) => setCustomCourse(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomCourse()}
            placeholder="Add custom course (e.g. Real-Time Embedded Systems, Microeconomics)..."
            className="flex-1 px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-xs focus:outline-none transition-colors"
          />
          <button
            onClick={addCustomCourse}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Course</span>
          </button>
        </div>
      </div>
    </div>
  );
};
