// ═══════════════════════════════════════
//  CONTACT FORM — validation & submission
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  // ── Field references
  const fields = {
    name:    { el: document.getElementById('name'),    err: document.getElementById('nameError') },
    email:   { el: document.getElementById('email'),   err: document.getElementById('emailError') },
    message: { el: document.getElementById('message'), err: document.getElementById('messageError') }
  };

  // ── Validators
  const validators = {
    name:    v => v.trim().length >= 2   ? '' : 'Please enter your name (min 2 characters).',
    email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
    message: v => v.trim().length >= 10  ? '' : 'Message too short — please write at least 10 characters.'
  };

  // ── Live validation on blur
  Object.keys(fields).forEach(key => {
    const { el, err } = fields[key];
    el.addEventListener('blur', () => {
      const msg = validators[key](el.value);
      err.textContent = msg;
      el.style.borderColor = msg ? '#ff4444' : el.value ? 'var(--accent)' : 'var(--border)';
    });
    el.addEventListener('input', () => {
      if (err.textContent) {
        const msg = validators[key](el.value);
        err.textContent = msg;
        el.style.borderColor = msg ? '#ff4444' : 'var(--accent)';
      }
    });
  });

  // ── Submit handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let hasError = false;
    Object.keys(fields).forEach(key => {
      const { el, err } = fields[key];
      const msg = validators[key](el.value);
      err.textContent = msg;
      el.style.borderColor = msg ? '#ff4444' : 'var(--accent)';
      if (msg) hasError = true;
    });

    if (hasError) return;

    // ── Simulate send (replace with fetch/EmailJS/Formspree in production)
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    await new Promise(r => setTimeout(r, 1500)); // simulate network

    // Success state
    form.reset();
    Object.values(fields).forEach(({ el }) => el.style.borderColor = '');
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;
    successMsg.classList.add('show');

    setTimeout(() => successMsg.classList.remove('show'), 5000);
  });
});
