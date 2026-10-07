import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-white dark:bg-[#161618] rounded-3xl shadow-2xl border border-black/[0.08] dark:border-white/[0.12] overflow-hidden max-h-[90vh] flex flex-col transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-black/[0.06] dark:border-white/[0.08] flex items-start justify-between gap-4 bg-[#fbfbfd] dark:bg-[#1c1c1e]">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider">
                  {project.categoryLabel}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {project.title}
                </h2>
                <p className="text-sm text-[#515154] dark:text-[#a1a1a6]">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed">
              {/* Detailed summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Overview & Problem Solved
                </h4>
                <p>{project.description}</p>
              </div>

              {/* Architecture Details */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7]">
                    System Architecture
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-xs">
                    {project.architecture.map((item, idx) => (
                      <li key={idx} className="text-[#333336] dark:text-[#d1d1d6]">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7]">
                    Key Engineering Highlights
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-xs">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="text-[#333336] dark:text-[#d1d1d6]">{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Technologies & Frameworks
                </h4>
                <div className="text-xs text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-medium">{tech}</span>
                      {idx < project.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-black/30 dark:text-white/30">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="p-4 rounded-xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.08] space-y-1">
                  <div className="text-[11px] font-semibold text-[#86868b] dark:text-[#86868b] uppercase tracking-wider">
                    Performance Benchmark
                  </div>
                  <div className="text-sm font-bold text-[#1d1d1f] dark:text-[#f5f5f7] font-mono">
                    {project.metrics}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-black/[0.06] dark:border-white/[0.08] bg-[#fbfbfd] dark:bg-[#1c1c1e] flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline flex items-center gap-1"
              >
                View Repository on GitHub ↗
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-medium text-white dark:text-[#1d1d1f] bg-[#1d1d1f] dark:bg-white hover:bg-black dark:hover:bg-[#e5e5ea] rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

