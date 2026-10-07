import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenExportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f5f5f7] dark:bg-[#121214] border-t border-black/[0.06] dark:border-white/[0.08] text-[#86868b] dark:text-[#a1a1a6] text-[12px] py-12 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-black/[0.06] dark:border-white/[0.08]">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[14px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              {PERSONAL_INFO.name}
            </h4>
            <p className="text-[#515154] dark:text-[#a1a1a6] leading-relaxed max-w-md text-[13px]">
              {PERSONAL_INFO.title}. Specializing in autonomous multi-agent systems, LangChain architectures, FastAPI microservices, and modern web applications.
            </p>
            <div className="flex items-center gap-3 pt-1 text-[13px]">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors font-medium flex items-center gap-1"
              >
                GitHub ↗
              </a>
              <span aria-hidden="true" className="text-black/20 dark:text-white/20">·</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors font-medium flex items-center gap-1"
              >
                LinkedIn ↗
              </a>
              <span aria-hidden="true" className="text-black/20 dark:text-white/20">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors font-medium"
              >
                Email
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-[12px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] uppercase tracking-wider mb-3">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resume')}
                  className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Experience & Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Projects & Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Details */}
          <div>
            <h5 className="text-[12px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] uppercase tracking-wider mb-3">
              Direct Contact
            </h5>
            <ul className="space-y-2 text-[#515154] dark:text-[#a1a1a6]">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li>{PERSONAL_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: Centered, prominent, bold, professional */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-1.5">
          <div className="text-[13px] md:text-[14px] font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Copyright © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="text-[12px] font-medium text-[#86868b]">
            Lead AI Engineer · Islamabad / Kohat, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
};
