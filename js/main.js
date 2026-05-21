// ═══════════════════════════════════════
//  MAIN.JS — nav, scroll, animations
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR: scroll effect & active link
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateNav() {
    // Scrolled class for background
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Active link via scroll position
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── 2. HAMBURGER MENU
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobLinks    = document.querySelectorAll('.mob-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── 3. INTERSECTION OBSERVER — reveal on scroll
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    // Hero elements are animated via CSS animation, skip them
    if (!el.closest('.hero')) revealObserver.observe(el);
  });

  // ── 4. SKILL BARS — animate on scroll
  function buildSkillBars() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
      const level = bar.dataset.level || 0;
      bar.innerHTML = `
        <span class="skill-percent">${level}%</span>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="--target-width: ${level}%"></div>
        </div>
      `;
      // Re-insert label via pseudo-element data attribute (already set)
    });
  }

  buildSkillBars();

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
          fill.classList.add('animate');
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-category').forEach(cat => skillObserver.observe(cat));

  // ── 5. SMOOTH SCROLL for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.offsetTop - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  // ── 6. PROJECT CARDS — observe after render
  setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
      revealObserver.observe(card);
    });
  }, 100);

});
