import React, { useState } from 'react';
import { CertificationItem } from '../../types/profile';
import { Award, Plus, Trash2, ExternalLink } from 'lucide-react';

interface CertificationsSectionProps {
  data: CertificationItem[];
  onChange: (updated: CertificationItem[]) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  data,
  onChange,
}) => {
  const addCert = () => {
    const newItem: CertificationItem = {
      id: `cert_${Date.now()}`,
      name: '',
      issuingOrg: '',
      completionDate: '',
      skillsLearned: '',
      verificationLink: '',
    };
    onChange([...data, newItem]);
  };

  const removeCert = (id: string) => {
    onChange(data.filter((c) => c.id !== id));
  };

  const updateCert = (id: string, key: keyof CertificationItem, value: string) => {
    onChange(data.map((c) => (c.id === id ? { ...c, [key]: value } : c)));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-serif font-medium text-stone-100 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>9. Certifications and Courses</span>
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Industry accreditations from AWS, Google Cloud, Meta, Coursera, or university specializations.
          </p>
        </div>

        <button
          onClick={addCert}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Certificate</span>
        </button>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-stone-900/40 border border-stone-800 border-dashed">
          <Award className="w-8 h-8 text-stone-600 mx-auto mb-2" />
          <h4 className="text-sm font-medium text-stone-300 mb-1">No certifications listed</h4>
          <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
            Certifications provide third-party validation of specialized cloud or programming mastery.
          </p>
          <button
            onClick={addCert}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Certificate</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((cert) => (
            <div
              key={cert.id}
              className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Certification
                </span>
                <button
                  onClick={() => removeCert(cert.id)}
                  className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-stone-800 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Certificate / Course Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) => updateCert(cert.id, 'name', e.target.value)}
                    placeholder="e.g. AWS Certified Solutions Architect — Associate"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Issuing Organization <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={cert.issuingOrg}
                    onChange={(e) => updateCert(cert.id, 'issuingOrg', e.target.value)}
                    placeholder="e.g. Amazon Web Services / Meta"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Completion Date / Year
                  </label>
                  <input
                    type="text"
                    value={cert.completionDate}
                    onChange={(e) => updateCert(cert.id, 'completionDate', e.target.value)}
                    placeholder="e.g. November 2024"
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Verification Link / Credential URL
                  </label>
                  <div className="relative">
                    <ExternalLink className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={cert.verificationLink}
                      onChange={(e) => updateCert(cert.id, 'verificationLink', e.target.value)}
                      placeholder="https://aws.amazon.com/verification/..."
                      className="w-full pl-8 pr-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Key Skills & Concepts Learned
                </label>
                <input
                  type="text"
                  value={cert.skillsLearned}
                  onChange={(e) => updateCert(cert.id, 'skillsLearned', e.target.value)}
                  placeholder="e.g. VPC design, IAM security policies, Multi-AZ high availability, EKS containerization"
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 text-xs focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
