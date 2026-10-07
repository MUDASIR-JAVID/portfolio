import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION, LEADERSHIP } from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 space-y-16">
      {/* Intro Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 text-center md:text-left"
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
          Curriculum & Background
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          About Mudasir Javid
        </h1>
        <p className="text-lg md:text-xl text-[#515154] dark:text-[#a1a1a6] font-normal max-w-3xl leading-relaxed">
          Lead AI Engineer, full-stack software developer, and dedicated athlete bridging computational research with reliable production engineering.
        </p>
      </motion.section>

      {/* Profile & Narrative Card */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8 transition-colors"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar Container */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.08] dark:border-white/[0.1] shadow-sm shrink-0 flex items-center justify-center relative">
            <img
              src={PERSONAL_INFO.avatarPath}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                const fallback = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
              className="w-full h-full object-cover"
            />
            <div
              style={{ display: 'none' }}
              className="w-full h-full items-center justify-center bg-gradient-to-br from-[#f5f5f7] to-[#e5e5ea] dark:from-[#1c1c1e] dark:to-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7]"
            >
              <span className="text-3xl font-semibold tracking-tight text-[#0071e3] dark:text-[#2997ff]">MJ</span>
            </div>
          </div>

          {/* Core Biography */}
          <div className="space-y-4 text-[#515154] dark:text-[#a1a1a6] leading-relaxed text-[15px]">
            <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Engineering Mindset & Professional Vision
            </h2>
            <p>
              I am a motivated and detail-oriented Computer Science student currently in my 7th semester at Kohat University of Science and Technology (KUST), maintaining a 3.51 CGPA and specializing in Artificial Intelligence, Generative AI, and full-stack development. My passion centers on creating robust, self-correcting agent systems, multi-modal workflows, and low-latency microservices that transform complex domain problems into elegant user experiences.
            </p>
            <p>
              During my engineering journey—from tackling high-accuracy algorithmic challenges at Photomath and testing enterprise software at Utest, to developing cutting-edge autonomous agent pipelines at Xsol AI—I have cultivated a strict commitment to software quality, performance metrics, and deterministic outcomes.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#86868b] dark:text-[#86868b]">
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline">{PERSONAL_INFO.email}</a></span>
              <span aria-hidden="true">·</span>
              <span>Phone: <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-[#1d1d1f] dark:text-[#f5f5f7]">{PERSONAL_INFO.phone}</a></span>
              <span aria-hidden="true">·</span>
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="border-t border-black/[0.06] dark:border-white/[0.08] pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAL_INFO.coreValues.map((val) => (
            <div key={val.title} className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">{val.title}</h3>
              <p className="text-xs text-[#515154] dark:text-[#a1a1a6] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
            Academic Foundation
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Education & Degrees
          </h2>
        </div>

        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">{edu.degree}</h3>
                  <div className="text-sm font-medium text-[#0071e3] dark:text-[#2997ff]">{edu.institution}</div>
                </div>
                <div className="text-xs text-[#86868b] flex md:flex-col items-start md:items-end gap-2 md:gap-0 font-mono">
                  <span>{edu.period}</span>
                  {edu.grade && <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{edu.grade}</span>}
                </div>
              </div>

              <ul className="space-y-2 text-xs md:text-sm text-[#515154] dark:text-[#a1a1a6] list-disc list-inside">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Leadership & Athletic Discipline */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
            Responsibility & Team Dynamics
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Leadership & Campus Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-colors"
            >
              <div className="space-y-2">
                <div className="text-xs text-[#86868b] flex items-center justify-between">
                  <span>{item.organization}</span>
                  <span className="font-mono">{item.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">{item.role}</h3>
                <ul className="space-y-2 text-xs text-[#515154] dark:text-[#a1a1a6] list-disc list-inside pt-2">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] text-[11px] text-[#86868b]">
                Core Competencies: Tactical Coordination · Stress Resilience · Team Accountability
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Navigation Footer */}
      <div className="pt-6 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08]">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
        >
          ← Back to Home
        </button>
        <button
          onClick={() => onNavigate('resume')}
          className="px-5 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-colors cursor-pointer"
        >
          View Work History & Skills →
        </button>
      </div>
    </div>
  );
};
