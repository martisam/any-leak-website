/* Any Leak Plumbing Inc - main.js */

// ---- Navbar scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ---- Burger menu ----
const burger  = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// Mobile dropdown tap
document.querySelectorAll('.nav-drop > .nav-link').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      a.parentElement.classList.toggle('open');
    }
  });
});

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---- Logo fallback (shows text logo when image file is missing) ----
function initLogo() {
  ['logoImg', 'ftLogoImg'].forEach((imgId, i) => {
    const img  = document.getElementById(imgId);
    const text = document.getElementById(i === 0 ? 'logoText' : 'ftLogoText');
    if (!img || !text) return;

    // hide text by default (image takes precedence)
    text.style.display = 'none';

    img.addEventListener('error', () => {
      img.style.display = 'none';
      text.style.display = 'flex';
    });

    // also check if already broken (cached error)
    if (!img.complete || img.naturalWidth === 0) {
      img.style.display = 'none';
      text.style.display = 'flex';
    }
  });
}

// ---- Before/After sliders ----
function initSliders() {
  document.querySelectorAll('.slider').forEach(slider => {
    const before = slider.querySelector('.sl-before');
    const handle = slider.querySelector('.sl-handle');
    let drag = false;

    function setPos(clientX) {
      const r = slider.getBoundingClientRect();
      let pct = (clientX - r.left) / r.width;
      pct = Math.max(.04, Math.min(.96, pct));
      before.style.clipPath = `inset(0 ${(1 - pct) * 100}% 0 0)`;
      handle.style.left = `${pct * 100}%`;
      handle.style.transform = 'translateX(-50%)';
    }

    slider.addEventListener('mousedown', e => { drag = true; setPos(e.clientX); });
    window.addEventListener('mousemove', e => { if (drag) setPos(e.clientX); });
    window.addEventListener('mouseup',   ()  => { drag = false; });

    slider.addEventListener('touchstart', e => { drag = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove',  e => { if (drag) setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend',   ()  => { drag = false; });
  });
}

// ---- Scroll animations ----
function initAnimations() {
  const sel = '.svc-card, .rev-card, .stat, .trust-item, .slider';
  const els = document.querySelectorAll(sel);
  els.forEach(el => el.classList.add('fade-up'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 65);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  els.forEach(el => io.observe(el));
}

// ---- Contact form ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.f-submit');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-circle-check"></i> MESSAGE SENT!';
    btn.style.background = '#10b981';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initLogo();
  initSliders();
  initAnimations();
});
