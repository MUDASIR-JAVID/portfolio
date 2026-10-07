import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface PortfolioViewProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (tab: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectProject, onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'agent' | 'genai' | 'fullstack' | 'web'>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'agent', label: 'Autonomous Agents' },
    { id: 'genai', label: 'Generative AI & RAG' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'web', label: 'Web Portals' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 space-y-12">
      {/* Portfolio Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 text-center md:text-left"
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
          Engineering Portfolio
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Featured Projects & AI Systems
        </h1>
        <p className="text-base md:text-lg text-[#515154] dark:text-[#a1a1a6] max-w-3xl leading-relaxed">
          Production systems, agentic workflows, and web architectures engineered with Python, Groq, LangChain, FastAPI, and React.
        </p>
      </motion.section>

      {/* Filter Tabs (Functional segmented control button elements) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-1.5 p-1 bg-[#f5f5f7] dark:bg-[#161618] rounded-xl w-fit flex-wrap border border-black/[0.04] dark:border-white/[0.08] transition-colors"
      >
        {filterOptions.map((opt) => {
          const isActive = filter === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-white dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white shadow-sm font-semibold'
                  : 'text-[#86868b] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 space-y-5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-black/[0.12] dark:hover:border-white/[0.2] flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Category & Metric (Unboxed Metadata) */}
              <div className="flex items-center justify-between text-xs text-[#86868b] dark:text-[#86868b]">
                <span className="font-semibold text-[#0071e3] dark:text-[#2997ff]">{project.categoryLabel}</span>
                {project.metrics && (
                  <span className="font-mono tabular-nums text-[11px] truncate max-w-[130px]" title={project.metrics}>
                    {project.metrics}
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                {project.title}
              </h2>
              <p className="text-xs text-[#515154] dark:text-[#a1a1a6] leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>

            <div className="space-y-4 pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
              {/* Tech stack */}
              <div className="text-[11px] text-[#86868b] dark:text-[#86868b] flex flex-wrap items-center gap-x-1.5 gap-y-1">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="font-medium text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">{tech}</span>
                    {i < Math.min(project.techStack.length, 4) - 1 && (
                      <span aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[#86868b]">+{project.techStack.length - 4}</span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  View Case Study →
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

      {/* Navigation Footer */}
      <div className="pt-8 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08]">
        <button
          onClick={() => onNavigate('resume')}
          className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
        >
          ← Resume & Credentials
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-colors cursor-pointer"
        >
          Discuss a Project →
        </button>
      </div>
    </div>
  );
};
