import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ResumeView } from './components/ResumeView';
import { PortfolioView } from './components/PortfolioView';
import { ContactView } from './components/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { SEOManager } from './components/SEOManager';
import { Project } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'resume', 'portfolio', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      } else if (!hash) {
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '#/' : `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfd] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans antialiased selection:bg-[#0071e3] selection:text-white transition-colors duration-200">
      {/* Dynamic SEO Header Manager via React Helmet */}
      <SEOManager
        currentTab={currentTab}
        customTitle={selectedProject ? `${selectedProject.title} — Architecture & Case Study | Mudasir Javid` : undefined}
        customDescription={selectedProject ? selectedProject.summary : undefined}
      />

      {/* Sticky header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content with smooth Framer Motion Transitions */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentTab === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}
            {currentTab === 'about' && (
              <AboutView onNavigate={handleNavigate} />
            )}
            {currentTab === 'resume' && (
              <ResumeView onNavigate={handleNavigate} />
            )}
            {currentTab === 'portfolio' && (
              <PortfolioView
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}
            {currentTab === 'contact' && (
              <ContactView onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* In-Depth Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
