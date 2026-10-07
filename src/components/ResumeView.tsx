import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILL_CATEGORIES, EDUCATION, LEADERSHIP } from '../data/portfolioData';

interface ResumeViewProps {
  onNavigate: (tab: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}\nContact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}\n${PERSONAL_INFO.bio}\nGitHub: ${PERSONAL_INFO.githubUrl}\nLinkedIn: ${PERSONAL_INFO.linkedinUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 space-y-16">
      {/* Resume Top Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.06] dark:border-white/[0.08] pb-6"
      >
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
            Curriculum Vitae
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Experience & Skills
          </h1>
          <p className="text-sm md:text-base text-[#515154] dark:text-[#a1a1a6]">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopySummary}
            className="px-4 py-2 text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-white dark:bg-[#1c1c1e] border border-black/[0.1] dark:border-white/[0.12] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-full transition-colors cursor-pointer shadow-sm"
          >
            {copied ? '✓ Copied Summary' : 'Copy Plaintext Summary'}
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-colors cursor-pointer shadow-sm"
          >
            Print / Save PDF
          </button>
        </div>
      </motion.section>

      {/* Categorized Skills Section (Zero-Pill Discipline) */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
            Technical Proficiency
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Categorized Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 space-y-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors"
            >
              <h3 className="text-sm font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight border-b border-black/[0.04] dark:border-white/[0.06] pb-2">
                {cat.category}
              </h3>
              {/* Clean unboxed inline skills separated by dots */}
              <div className="text-xs text-[#515154] dark:text-[#a1a1a6] leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill.name}>
                    <span className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{skill.name}</span>
                    {sIdx < cat.skills.length - 1 && (
                      <span aria-hidden="true" className="text-black/30 dark:text-white/30">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Work History Section */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
            Employment Record
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">{exp.role}</h3>
                  <div className="text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] pt-0.5">{exp.company}</div>
                </div>
                <div className="text-xs text-[#86868b] dark:text-[#86868b] flex md:flex-col items-start md:items-end gap-2 md:gap-0 font-mono">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] uppercase tracking-wider">
                  Key Achievements & Responsibilities
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-[#515154] dark:text-[#a1a1a6] list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies used (unboxed text) */}
              <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-xs text-[#86868b] dark:text-[#86868b] flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Tech & Tools:</span>
                {exp.technologies.map((t, tIdx) => (
                  <React.Fragment key={t}>
                    <span>{t}</span>
                    {tIdx < exp.technologies.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education & Leadership Snapshot */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Education Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 space-y-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors"
        >
          <h3 className="text-sm font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight border-b border-black/[0.04] dark:border-white/[0.06] pb-2">
            Education
          </h3>
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="space-y-1 text-xs text-[#515154] dark:text-[#a1a1a6]">
              <div className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">{edu.degree}</div>
              <div className="text-[#0071e3] dark:text-[#2997ff] font-medium">{edu.institution}</div>
              <div className="text-[#86868b] font-mono">{edu.period} · {edu.grade}</div>
            </div>
          ))}
        </motion.div>

        {/* Leadership Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 space-y-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors"
        >
          <h3 className="text-sm font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight border-b border-black/[0.04] dark:border-white/[0.06] pb-2">
            Honors & Leadership
          </h3>
          {LEADERSHIP.map((item) => (
            <div key={item.role} className="space-y-1 text-xs text-[#515154] dark:text-[#a1a1a6]">
              <div className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">{item.role}</div>
              <div className="text-[#0071e3] dark:text-[#2997ff] font-medium">{item.organization}</div>
              <div className="text-[#86868b] font-mono">{item.duration}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer Navigation */}
      <div className="pt-6 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08]">
        <button
          onClick={() => onNavigate('about')}
          className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
        >
          ← About Mudasir
        </button>
        <button
          onClick={() => onNavigate('portfolio')}
          className="px-5 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-colors cursor-pointer"
        >
          Inspect Technical Projects →
        </button>
      </div>
    </div>
  );
};
