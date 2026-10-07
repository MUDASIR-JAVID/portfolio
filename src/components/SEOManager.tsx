import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export interface TabSEOConfig {
  title: string;
  description: string;
  keywords: string;
  hashPath: string;
}

export const TAB_SEO_CONFIGS: Record<string, TabSEOConfig> = {
  home: {
    title: 'Mudasir Javid | Lead AI Engineer & Full-Stack Developer',
    description: 'Portfolio of Mudasir Javid (Mudasir Khan), Lead AI Engineer and Full-Stack Developer specializing in Generative AI, LangChain, Python, Next.js, and enterprise machine learning systems.',
    keywords: 'Mudasir Javid, Mudasir Khan, AI Engineer, Full-Stack Developer, Generative AI, LangChain, React, Python, Machine Learning, Kohat, Pakistan',
    hashPath: '',
  },
  about: {
    title: 'About Mudasir Javid | Background, Philosophy & Education',
    description: 'Learn about Mudasir Javid: 7th Semester BS Computer Science student (3.51 CGPA), philosophy on reliable AI development, engineering principles, and core competencies.',
    keywords: 'About Mudasir Javid, Mudasir Khan Bio, Software Engineer Education, 3.51 CGPA, 7th Semester BS CS, AI Developer Background',
    hashPath: '#/about',
  },
  resume: {
    title: 'Resume & Technical Qualifications | Mudasir Javid',
    description: 'Explore Mudasir Javid\'s verified qualifications, academic record (7th Semester BS CS, 3.51 CGPA), enterprise AI engineering experience, certifications, and technical stack.',
    keywords: 'Mudasir Javid Resume, Mudasir CV, Full-Stack Engineer Resume, AI Developer Qualifications, Skills, 3.51 CGPA, Academic Credentials',
    hashPath: '#/resume',
  },
  portfolio: {
    title: 'Featured Projects & Systems Architecture | Mudasir Javid',
    description: 'Production-ready showcase of Mudasir Javid\'s work: Generative AI apps, RAG knowledge assistants, intelligent full-stack platforms, and microservices.',
    keywords: 'Mudasir Javid Portfolio, AI Projects, Full-Stack Projects, Generative AI Showcase, LangChain Apps, GitHub Repositories',
    hashPath: '#/portfolio',
  },
  contact: {
    title: 'Get In Touch & Hire | Mudasir Javid - AI Engineer',
    description: 'Connect directly with Mudasir Javid for technical consulting, AI system development, freelance opportunities, or full-time roles.',
    keywords: 'Contact Mudasir Javid, Hire AI Engineer, Full Stack Developer Pakistan, Mudasir Javid Email, Software Consultation',
    hashPath: '#/contact',
  },
};

interface SEOManagerProps {
  currentTab: string;
  customTitle?: string;
  customDescription?: string;
}

export const SEOManager: React.FC<SEOManagerProps> = ({
  currentTab,
  customTitle,
  customDescription,
}) => {
  const config = TAB_SEO_CONFIGS[currentTab] || TAB_SEO_CONFIGS.home;
  const title = customTitle || config.title;
  const description = customDescription || config.description;
  const keywords = config.keywords;

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}${config.hashPath}`
    : '';

  // Synchronous DOM enhancement to ensure instantaneous title/meta sync
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;

      // Update meta description directly
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update og:title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }

      // Update og:description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <Helmet>
      {/* HTML Title */}
      <title>{title}</title>

      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical Link */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}
    </Helmet>
  );
};
