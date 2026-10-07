import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactViewProps {
  onNavigate: (tab: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleOpenMailClient = () => {
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Inquiry from Portfolio'
    )}&body=${encodeURIComponent(
      `Hello Mudasir,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 text-center md:text-left"
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
          Connect Directly
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Get in Touch
        </h1>
        <p className="text-base md:text-lg text-[#515154] dark:text-[#a1a1a6] max-w-2xl leading-relaxed">
          Open to AI engineering discussions, autonomous agent initiatives, technical collaboration, and full-stack engineering roles.
        </p>
      </motion.section>

      {/* Main Contact Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-5 gap-8"
      >
        {/* Contact Info (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2 space-y-6"
        >
          <div className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors">
            <h2 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
              Direct Channels
            </h2>

            {/* Email */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] dark:text-[#86868b]">
                Email Address
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="text-[11px] text-[#86868b] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer pt-0.5 inline-block"
              >
                {copiedItem === 'email' ? '✓ Copied to clipboard' : 'Click to copy email'}
              </button>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] dark:text-[#86868b]">
                Phone & WhatsApp
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] block font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="text-[11px] text-[#86868b] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer pt-0.5 inline-block"
              >
                {copiedItem === 'phone' ? '✓ Copied to clipboard' : 'Click to copy phone'}
              </button>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] dark:text-[#86868b]">
                Primary Location
              </div>
              <p className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                {PERSONAL_INFO.location}
              </p>
              <div className="text-[11px] text-[#86868b] dark:text-[#86868b]">
                Available for local and remote engagements
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] dark:text-[#86868b]">
                Professional Profiles
              </div>
              <div className="flex flex-col space-y-1.5 text-xs">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] font-medium flex items-center justify-between"
                >
                  <span>GitHub Profile</span>
                  <span>↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] font-medium flex items-center justify-between"
                >
                  <span>LinkedIn Profile</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (3 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-3"
        >
          <div className="rounded-2xl bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors">
            <h2 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
              Send a Message
            </h2>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.06] dark:border-white/[0.08] space-y-4 text-center animate-in fade-in transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center mx-auto text-lg">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Message Prepared</h4>
                  <p className="text-xs text-[#515154] dark:text-[#a1a1a6]">
                    Thank you, {formData.name}! You can also send this inquiry directly via your default email client.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                  <button
                    onClick={handleOpenMailClient}
                    className="px-4 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-colors cursor-pointer"
                  >
                    Open Mail App with Message
                  </button>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] bg-white dark:bg-[#242426] border border-black/[0.08] dark:border-white/[0.1] hover:bg-slate-50 dark:hover:bg-[#2c2c2e] rounded-full transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] block">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] dark:border-white/[0.12] bg-[#fbfbfd] dark:bg-[#1c1c1e] focus:bg-white dark:focus:bg-[#242426] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] block">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ali@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] dark:border-white/[0.12] bg-[#fbfbfd] dark:bg-[#1c1c1e] focus:bg-white dark:focus:bg-[#242426] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] block">
                    Subject / Project Context
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Generative AI Engineering / Lead Role"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] dark:border-white/[0.12] bg-[#fbfbfd] dark:bg-[#1c1c1e] focus:bg-white dark:focus:bg-[#242426] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] block">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline project specifics, timeline, or engineering inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] dark:border-white/[0.12] bg-[#fbfbfd] dark:bg-[#1c1c1e] focus:bg-white dark:focus:bg-[#242426] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 text-xs font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Preparing Submission...' : 'Send Message to Mudasir Javid'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Footer */}
      <div className="pt-6 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08]">
        <button
          onClick={() => onNavigate('portfolio')}
          className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer"
        >
          ← Explore Portfolio Projects
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline transition-colors cursor-pointer"
        >
          Back to Top / Home
        </button>
      </div>
    </div>
  );
};
