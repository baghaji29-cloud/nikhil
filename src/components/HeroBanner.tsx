import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, CheckCircle2, ChevronRight, BarChart3, Target, Bot } from 'lucide-react';
import { ATSAnalysis } from '../types/profile';

interface HeroBannerProps {
  onLoadStudentSample: () => void;
  onLoadProfessionalSample: () => void;
  onStartEditing: () => void;
  atsAnalysis: ATSAnalysis;
  onApplySampleBullet: (bullet: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onLoadStudentSample,
  onLoadProfessionalSample,
  onStartEditing,
  atsAnalysis,
  onApplySampleBullet,
}) => {
  const [bulletApplied, setBulletApplied] = useState(false);
  const [coachTipIndex, setCoachTipIndex] = useState(0);

  const coachTips = [
    {
      tip: 'Try opening this bullet with a measurable result — recruiters skim the first four words.',
      bullet: 'Led a 6-person squad to ship 3 critical production releases ahead of schedule, lifting user activation 14% quarter over quarter.',
    },
    {
      tip: 'Quantify performance improvements with specific engineering techniques (e.g. latency, bundle size).',
      bullet: 'Optimized bundle size by 38% and eradicated 45+ UI bottlenecks using code-splitting and memoization in React.',
    },
    {
      tip: 'Pair high-throughput numbers with backend architectural reliability.',
      bullet: 'Architected 18 high-throughput RESTful microservices with Redis caching, sustaining 2,500 RPS at sub-40ms P99 latency.',
    },
  ];

  const currentCoach = coachTips[coachTipIndex % coachTips.length];

  const handleApply = () => {
    onApplySampleBullet(currentCoach.bullet);
    setBulletApplied(true);
    setTimeout(() => setBulletApplied(false), 2500);
  };

  const handleNextTip = () => {
    setCoachTipIndex((prev) => prev + 1);
    setBulletApplied(false);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pb-24 border-b border-stone-800/60 bg-[#0e0c0a]">
      {/* Background warm sunburst glow inspired by reference image */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-500/30 via-orange-600/20 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-20 left-1/4 w-[450px] h-[350px] bg-amber-400/15 blur-[90px] rounded-full" />
      </div>

      {/* Atmospheric radial grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-kicker */}
        <div className="text-center mb-4">
          <span className="text-xs tracking-wider uppercase font-semibold text-amber-400/90 font-mono">
            Professional & Academic Career Architecture
          </span>
        </div>

        {/* Hero Title with Playfair Serif styling */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-stone-100 tracking-tight leading-[1.15]">
            Craft your résumé{' '}
            <span className="italic font-normal text-amber-200">effortlessly,</span>{' '}
            <span className="italic font-normal text-amber-100">beautifully.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Resume Builder by Nikhil helps students and working professionals construct comprehensive, 
            ATS-optimized 15-module profiles with intelligent scoring and print-ready editorial templates.
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <button
            onClick={onStartEditing}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-stone-950 bg-stone-100 hover:bg-white rounded-full shadow-lg hover:shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Building Profile</span>
            <ArrowRight className="w-4 h-4 text-stone-900" />
          </button>

          <button
            onClick={onLoadStudentSample}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-850 border border-stone-700/80 hover:border-stone-600 rounded-full backdrop-blur-md transition-all"
          >
            <span>Load Student Sample</span>
            <span className="text-stone-500 text-xs">· B.Tech</span>
          </button>

          <button
            onClick={onLoadProfessionalSample}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-850 border border-stone-700/80 hover:border-stone-600 rounded-full backdrop-blur-md transition-all"
          >
            <span>Load Working Pro Sample</span>
            <span className="text-stone-500 text-xs">· Tech Lead</span>
          </button>
        </div>

        {/* 3 Floating Glass Cards matching AstraFlow reference image */}
        <div id="ats-overview" className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
          {/* Card 1: Résumé Score */}
          <div className="relative p-6 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-stone-700/80 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Résumé Score
                </span>
                <span className="text-xs font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
                  Live Audit
                </span>
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-stone-200">
                  Profile Completeness
                </span>
                <span className="text-2xl font-serif font-bold text-amber-200 tabular-nums">
                  {atsAnalysis.score}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden mb-4">
                <div
                  className="bg-gradient-to-r from-amber-400 to-orange-400 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${atsAnalysis.score}%` }}
                />
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <span className="font-mono">ATS · {atsAnalysis.score}/100</span>
              <span className="text-stone-500">·</span>
              <span className="font-mono">Tone · {atsAnalysis.grade}</span>
              <span className="text-stone-500">·</span>
              <span>{atsAnalysis.metricsCount} Metrics</span>
            </div>
          </div>

          {/* Card 2: AI Coach */}
          <div id="ai-coach-section" className="relative p-6 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-stone-700/80 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs">
                    ✦
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    AI Bullet Coach
                  </span>
                </div>
                <button
                  onClick={handleNextTip}
                  className="text-xs text-stone-400 hover:text-stone-200 flex items-center gap-1"
                >
                  <span>Next tip</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              <p className="text-xs text-stone-300 font-normal leading-relaxed mb-4">
                {currentCoach.tip}
              </p>

              <div className="p-2.5 rounded-lg bg-stone-950/60 border border-stone-800/60 text-xs text-stone-300 font-serif italic mb-3">
                "{currentCoach.bullet}"
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleNextTip}
                className="px-3 py-1.5 text-xs text-stone-400 hover:text-stone-200 transition-colors"
              >
                Skip
              </button>
              <button
                onClick={handleApply}
                disabled={bulletApplied}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  bulletApplied
                    ? 'bg-emerald-950 text-emerald-200 border border-emerald-800'
                    : 'bg-amber-400/90 hover:bg-amber-300 text-stone-950'
                }`}
              >
                {bulletApplied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Applied to Summary!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply suggestion</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Target Role Match */}
          <div className="relative p-6 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-stone-700/80 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Target Role Match
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                  94% Match
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-sm font-semibold text-amber-200">
                  AP
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-100">
                    Senior Full-Stack & Systems
                  </div>
                  <div className="text-xs text-stone-400">
                    High-Growth Tech & Campus Roles
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-400 leading-relaxed mb-4">
                Key qualifications matched: Distributed Architecture, React 19, TypeScript,
                Data Structures, Team Leadership, Measurable Achievements.
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified ATS Parseability</span>
              </span>
              <span className="font-mono text-stone-400">15 / 15 Sections</span>
            </div>
          </div>
        </div>

        {/* Feature Demonstration Chain: Before vs After AI Rewrite (inspired by lower section of reference) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-stone-900/50 border border-stone-800/80 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Measurable Impact Engine
              </span>
              <h2 className="text-2xl font-serif text-stone-100 mt-1 mb-2">
                Turn passive duties into <span className="italic text-amber-200">interview-winning</span> bullets.
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                AstraProfile analyzes each achievement against proven recruiting benchmarks,
                guiding you to highlight team size, latency deltas, and business growth.
              </p>
            </div>

            <div className="flex-1 space-y-3">
              {/* Before */}
              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/70">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase text-stone-500">Original bullet</span>
                  <span className="text-[10px] text-stone-500 bg-stone-900 px-2 py-0.5 rounded">Passive / Vague</span>
                </div>
                <p className="text-xs text-stone-400 font-sans">
                  "Managed projects across the team and helped ship features on time."
                </p>
              </div>

              {/* After */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase text-amber-300/90 font-medium">Recruiter-ready bullet</span>
                  <span className="text-[10px] text-amber-300 font-mono font-medium bg-amber-900/50 px-2 py-0.5 rounded">94% ATS Score</span>
                </div>
                <p className="text-xs text-stone-200 font-medium font-serif leading-relaxed">
                  "Led a 6-person team to ship 3 product launches ahead of schedule, lifting activation 14% quarter over quarter."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
