/**
 * Apple-Style Portfolio Interactive JavaScript
 * Author: Mudasir Javid (Mudasir Khan)
 * Lead AI Engineer & Full-Stack Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global theme switcher support
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  const themeToggles = document.querySelectorAll('.theme-toggle-btn, [data-theme-toggle]');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isExpanded = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Active navigation link highlighting based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-links a');
  
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Avatar error fallback handler
  const avatarImgs = document.querySelectorAll('.avatar-img');
  avatarImgs.forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const container = img.parentElement;
      if (container) {
        let fallback = container.querySelector('.avatar-fallback');
        if (!fallback) {
          fallback = document.createElement('div');
          fallback.className = 'avatar-fallback';
          fallback.style.width = '100%';
          fallback.style.height = '100%';
          fallback.style.display = 'flex';
          fallback.style.alignItems = 'center';
          fallback.style.justifyContent = 'center';
          fallback.style.background = 'linear-gradient(135deg, #f5f5f7, #e5e5ea)';
          fallback.style.fontWeight = '700';
          fallback.style.fontSize = '24px';
          fallback.style.color = '#0071e3';
          fallback.textContent = 'MJ';
          container.appendChild(fallback);
        }
      }
    });
  });

  // Project category filtering (for portfolio.html)
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        projectCards.forEach((card) => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form submission handler (for contact.html)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Preparing Message...';
      }

      setTimeout(() => {
        const successBox = document.getElementById('form-success');
        if (successBox) {
          contactForm.style.display = 'none';
          successBox.style.display = 'block';
        } else {
          alert('Thank you! Your message has been prepared.');
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }
      }, 600);
    });
  }

  // Quick clipboard copy utility
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const original = btn.textContent;
          btn.textContent = '✓ Copied!';
          setTimeout(() => {
            btn.textContent = original;
          }, 2000);
        });
      }
    });
  });

  // Scroll reveal animation observer
  const animElements = document.querySelectorAll('.card, .project-card, .timeline-item, .stats-card-grid, .section-hero, .section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animElements.forEach((el) => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });
  }
});
