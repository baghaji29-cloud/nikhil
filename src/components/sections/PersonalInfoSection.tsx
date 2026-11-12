import React from 'react';
import { PersonalInfo } from '../../types/profile';
import { User, Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase } from 'lucide-react';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
  onChange: (updated: PersonalInfo) => void;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ data, onChange }) => {
  const update = (key: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4">
        <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
          <User className="w-4 h-4 text-amber-400" />
          <span>1. Personal Information & Contact Details</span>
        </h3>
        <p className="text-xs text-stone-400 mt-1">
          Provide your verified contact information so recruiters and admissions officers can reach you effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Full Name <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              placeholder="e.g. Aria Bennett or Aarav Sharma"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Professional Headline */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Professional Headline / Role
          </label>
          <div className="relative">
            <Briefcase className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={data.headline}
              onChange={(e) => update('headline', e.target.value)}
              placeholder="e.g. Software Engineer Graduate | Distributed Systems"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Professional Email Address <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="e.g. aria.bennett@university.edu"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Mobile Number <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="e.g. +1 (555) 234-8901 or +91 98765 43210"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* City and State */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Current City and State <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={data.cityState}
              onChange={(e) => update('cityState', e.target.value)}
              placeholder="e.g. Austin, TX or Bengaluru, Karnataka"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            LinkedIn Profile URL
          </label>
          <div className="relative">
            <Linkedin className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              value={data.linkedIn}
              onChange={(e) => update('linkedIn', e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* GitHub */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            GitHub Profile URL
          </label>
          <div className="relative">
            <Github className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              value={data.github}
              onChange={(e) => update('github', e.target.value)}
              placeholder="https://github.com/username"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Portfolio Website */}
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            Portfolio / Personal Website URL
          </label>
          <div className="relative">
            <Globe className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              value={data.portfolio}
              onChange={(e) => update('portfolio', e.target.value)}
              placeholder="https://yourportfolio.dev"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-stone-900 border border-stone-800 focus:border-amber-400 text-stone-100 placeholder-stone-600 text-sm focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
