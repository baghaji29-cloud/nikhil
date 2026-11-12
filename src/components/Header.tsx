import React from 'react';
import { Sparkles, Printer, Download, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenExport: () => void;
  activeView: 'builder' | 'preview';
  setActiveView: (view: 'builder' | 'preview') => void;
  atsScore: number;
  atsGrade: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenExport,
  activeView,
  setActiveView,
  atsScore,
  atsGrade,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0e0c0a]/85 border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single line, no pill badges) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveView('builder');
          }}
          className="flex items-center gap-2 text-stone-100 hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 font-serif text-xl tracking-tight"
        >
          <span className="text-amber-400 text-lg">✦</span>
          <span>Resume Builder by Nikhil</span>
        </a>



        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {activeView === 'builder' ? (
            <button
              onClick={() => setActiveView('preview')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Full Preview</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveView('builder')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          )}

          <button
            onClick={onOpenExport}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export & Print PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
