import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, WORK_EXPERIENCE } from '../data/portfolioData';
import { Project } from '../types';
import { sectionVariants, defaultViewport, cardVariant } from '../utils/animations';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onSelectProject: (project: Project) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-24 py-8 md:py-16">
      {/* Hero Section - Initial entrance */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 text-center space-y-8"
      >
        {/* Profile Avatar / Emblem */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white dark:border-[#2c2c2e] shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-[#f5f5f7] dark:bg-[#1c1c1e] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={PERSONAL_INFO.avatarPath}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if user hasn't dropped image yet
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
            {/* Subtle verification indicator */}
            <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-[10px] font-bold shadow-md">
              ✓
            </div>
          </div>
        </div>

        {/* Title & Headline */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#86868b] dark:text-[#86868b]">
            Personal Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] max-w-3xl mx-auto leading-[1.08] text-balance">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#1d1d1f]/85 dark:text-[#f5f5f7]/85 max-w-2xl mx-auto tracking-tight">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-[16px] md:text-[18px] text-[#515154] dark:text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed font-normal">
            Computer Science specialist architecting autonomous multi-agent systems, low-latency Groq inference engines, enterprise RAG pipelines, and modern web applications.
          </p>
        </div>

        {/* Unboxed Metadata Highlights (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[13px] text-[#86868b] dark:text-[#86868b]">
          <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">BS Computer Science (7th Semester · CGPA 3.51)</span>
          <span aria-hidden="true">·</span>
          <span>KUST University Football Captain</span>
          <span aria-hidden="true">·</span>
          <span>Xsol AI Intern</span>
          <span aria-hidden="true">·</span>
          <span>Islamabad / Kohat</span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-6 py-3 text-[14px] font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] rounded-full transition-all duration-200 shadow-sm cursor-pointer hover:shadow-md"
          >
            Explore Projects & Systems
          </button>
          <button
            onClick={() => onNavigate('resume')}
            className="px-6 py-3 text-[14px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-[#1c1c1e] hover:bg-[#e8e8ed] dark:hover:bg-[#2c2c2e] active:bg-[#dcdce0] rounded-full transition-colors cursor-pointer border border-black/[0.04] dark:border-white/[0.08]"
          >
            View Work History & Skills
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 text-[14px] font-medium text-[#0071e3] dark:text-[#2997ff] hover:text-[#005bb5] dark:hover:text-[#64b5f6] transition-colors cursor-pointer"
          >
            Get in Touch →
          </button>
        </div>
      </motion.section>

      {/* Proof & Impact Row */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)] text-center transition-colors">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] font-mono tabular-nums">
              3.51
            </div>
            <div className="text-xs text-[#86868b] font-medium">BS CS CGPA (7th Sem)</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] font-mono tabular-nums">
              7+
            </div>
            <div className="text-xs text-[#86868b] font-medium">Key Engineering Projects</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] font-mono tabular-nums">
              2 Yrs
            </div>
            <div className="text-xs text-[#86868b] font-medium">Varsity Football Captain</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] font-mono tabular-nums">
              6 Sem
            </div>
            <div className="text-xs text-[#86868b] font-medium">Event Coordinator</div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6 space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
              Engineered Work
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Featured Projects & AI Systems
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="text-[14px] font-medium text-[#0071e3] dark:text-[#2997ff] hover:text-[#005bb5] dark:hover:text-[#64b5f6] transition-colors flex items-center gap-1 cursor-pointer"
          >
            See all projects ({PROJECTS.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-black/[0.12] dark:hover:border-white/[0.2] flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Clean unboxed category header */}
                <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-[#86868b]">
                  <span className="font-medium text-[#0071e3] dark:text-[#2997ff]">{project.categoryLabel}</span>
                  {project.metrics && (
                    <span className="font-mono tabular-nums">{project.metrics}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                {/* Tech stack as clean unboxed inline text */}
                <div className="text-xs text-[#86868b] dark:text-[#86868b] flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 font-medium">{tech}</span>
                      {i < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    Inspect Architecture & Case Study →
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Brief Work History Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6 space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-1">
              Professional Journey
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Work History Snapshot
            </h2>
          </div>
          <button
            onClick={() => onNavigate('resume')}
            className="text-[14px] font-medium text-[#0071e3] dark:text-[#2997ff] hover:text-[#005bb5] dark:hover:text-[#64b5f6] transition-colors flex items-center gap-1 cursor-pointer"
          >
            View full resume & credentials →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 space-y-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors"
            >
              <div className="text-xs text-[#86868b] dark:text-[#86868b] flex items-center justify-between">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
              <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">{exp.company}</h3>
              <div className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff]">{exp.role}</div>
              <p className="text-xs text-[#515154] dark:text-[#a1a1a6] leading-relaxed line-clamp-3">
                {exp.highlights[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="rounded-3xl bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-8 md:p-12 text-center space-y-6 transition-colors">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Looking for an AI Engineer with Full-Stack Rigor?
          </h2>
          <p className="text-sm md:text-base text-[#515154] dark:text-[#a1a1a6] max-w-xl mx-auto leading-relaxed">
            Available for AI engineering roles, agentic system development, RAG architecture implementations, and full-stack technical initiatives.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-sm font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] rounded-full transition-colors shadow-sm cursor-pointer"
            >
              Contact Mudasir Javid
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3 text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-white dark:bg-[#242426] hover:bg-slate-50 dark:hover:bg-[#2c2c2e] rounded-full transition-colors border border-black/[0.08] dark:border-white/[0.1]"
            >
              Send an Email
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
