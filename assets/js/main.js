/* ============================================================
   giuseppenapoletano.dev — comportamenti di pagina
   Nessun tracciamento, nessuna dipendenza esterna.
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Traduzioni
     L'italiano vive nell'HTML (indicizzabile e visibile senza JS);
     qui c'è solo la versione inglese, applicata al volo.
     ---------------------------------------------------------- */
  var EN = {
    'meta.title': 'Giuseppe Napoletano — Software Engineer & Cloud Solutions',
    'meta.description': 'Software engineer with a backend background and a DevOps specialisation. Web applications, cloud infrastructure, integrations and business software. Work, technical skills and contact details.',
    'meta.ogTitle': 'Giuseppe Napoletano — Software Engineer & Cloud Solutions',

    'a11y.skip': 'Skip to content',
    'a11y.menu': 'Open menu',

    'brand.role': 'Software Engineer &amp; Cloud Solutions',

    'nav.solutions': 'Solutions',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.skills': 'Technical skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Software Engineer &amp; Cloud Solutions',
    'hero.title': 'I design and build software',
    'hero.lead': 'Software is what I do: web applications, cloud infrastructure and custom business tools, followed from analysing the process through to the server that keeps them running. Both on new projects and on existing applications that need extending or consolidating.',
    'hero.ctaPrimary': 'See the work',
    'hero.ctaSecondary': 'Get in touch',

    'card.s1': 'Custom web and software applications',
    'card.s2': 'Cloud infrastructure and hosting',
    'card.s3': 'Orders, shifts and inventory management',
    'card.s4': 'Booking systems',

    'sol.kicker': 'Solutions',
    'sol.title': 'What I build',

    'sol.1.t': 'Custom web applications',
    'sol.1.d': 'Portals, member areas and internal tools built around the process of the people who will use them, where off-the-shelf software does not describe it closely enough.',
    'sol.2.t': 'Infrastructure and cloud',
    'sol.2.d': 'Setting up and running servers, domains, certificates, backups and monitoring: the part that keeps a project stable over time.',
    'sol.3.t': 'Integrations and APIs',
    'sol.3.d': 'Communication between systems already in use — management software, payments, e-invoicing, CRM, e-commerce — so the same data need not be entered twice.',
    'sol.4.t': 'Booking systems',
    'sol.4.d': 'Handling of calendars, availability and automatic confirmations, with shared schedules and private access for end users.',
    'sol.5.t': 'Operational management software',
    'sol.5.d': 'Orders, staff shifts and stock movements brought together in a single application, with data that stays consistent across the departments using it.',
    'sol.6.t': 'Maintenance and evolution',
    'sol.6.d': 'Work on existing software: updates, fixes, performance tuning and security hardening, including code written by others.',

    'work.kicker': 'Portfolio',
    'work.title': 'Selected work',
    'work.sub': 'A selection of completed work, with detail on what was designed and built.',

    'work.oad.tag': 'Management platform for a sports centre',
    'work.oad.d1': 'A platform built for a fitness and athletics centre. It brings together, in a single application, the public presentation of the club, the members area and the operational tools the management uses to follow daily activity.',
    'work.oad.f1t': 'Members area',
    'work.oad.f1d': 'Next session, membership and expiry status, weekly progress, absence notices and rescheduling of missed sessions.',
    'work.oad.f2t': 'Tools for the management',
    'work.oad.f2d': 'Handling of members, shifts and rooms, with an up-to-date picture of activity.',
    'work.oad.f3t': 'Public interface',
    'work.oad.f3d': 'Services, coaching staff, location and opening hours calculated dynamically.',
    'work.oad.roleLabel': 'Role',
    'work.oad.role': 'design, development, release and running of the infrastructure',
    'work.oad.c1': 'Web app',
    'work.oad.c2': 'Members area',
    'work.oad.c3': 'User management',
    'work.oad.c4': 'Cloud infrastructure',
    'work.oad.link': 'Open the project',
    'work.oad.g1': 'Public interface',
    'work.oad.g2': 'Services overview',
    'work.oad.g3': 'Coaching staff profiles',

    'about.kicker': 'About',
    'about.title': 'Giuseppe Napoletano',
    'about.p1': 'Software engineer with a backend background and a DevOps specialisation. I follow a project from analysis through to production, and then through the years that follow: keeping the service running, evolving it and maintaining it.',
    'about.p2': 'I keep the passion alive by experimenting with my personal homelab, which I treat as an endless playground for hands-on learning. I am equally comfortable across Windows and Linux environments. I speak Italian, English and Spanish and, when I step away from the screen, I love to return to my roots: playing chess.',
    'about.langs': 'Languages spoken',

    'tech.kicker': 'Technical profile',
    'tech.title': 'Technical skills',
    'tech.p1': 'I come from the backend and over time I have moved towards infrastructure: these days I mostly work on distributed systems, release pipelines and cloud environments. It is the part of the job I enjoy most.',
    'tech.p2': 'A short summary of my skills.',
    'tech.1.t': 'Backend',
    'tech.1.d': '<strong>C# and .NET</strong> are the environment I work in every day; with <strong>Java and Spring Boot</strong> I have taken applications to production on my own. REST and WebSocket APIs, worker services, message queues and microservices.',
    'tech.2.t': 'Cloud and infrastructure',
    'tech.2.d': 'Architectures on <strong>AWS</strong> built and maintained end to end — compute, storage, managed databases, DNS and content delivery — with Cloudflare in front where it helps.',
    'tech.3.t': 'Containers and releases',
    'tech.3.d': '<strong>Docker and Kubernetes</strong>, with Helm for releases. CI/CD pipelines and infrastructure described in <strong>Terraform</strong>, so environments can be recreated without manual steps.',
    'tech.4.t': 'Data and access',
    'tech.4.d': 'Relational databases and schema design, caching, authentication and authorisation following the <strong>OAuth 2.0</strong> standard.',
    'tech.foot': 'Full background on <a href="https://www.linkedin.com/in/giuseppe-napoletano/" target="_blank" rel="noopener">LinkedIn</a>, public code on <a href="https://github.com/giu-napoletano29" target="_blank" rel="noopener">GitHub</a>.',

    'exp.kicker': 'Experience',
    'exp.title': 'Professional background',

    'exp.1.period': 'December 2021 — present',
    'exp.1.place': 'Edilportale.com (Mondadori Digital) — Bari, Italy',
    'exp.1.role': 'Software Engineer &amp; DevOps',
    'exp.1.d': 'I work on Archiproducts.com, a portal in the architecture and design industry with an international audience and very large catalogues. My work covers both application development and the chain that carries code into production.',
    'exp.1.d2': 'On the application side I look after backend services and APIs, with attention to the performance and scalability of a system that handles significant volumes. On the infrastructure side I work on build and release pipelines, containerised environments and orchestration, within a development team.',

    'edu.label': 'Education',
    'edu.title': 'BSc in Computer Science',
    'edu.meta': 'Università degli Studi di Bari Aldo Moro — 2022',
    'edu.note': 'Study period at Universidad de Castilla-La Mancha, Ciudad Real (Spain)',
    'cert.label': 'Certifications',
    'cert.title': 'AWS Certified Cloud Practitioner',
    'cert.meta': 'Amazon Web Services — 2024',
    'cert.note': 'AWS services, the shared responsibility model and cloud architectures',

    'contact.kicker': 'Contact',
    'contact.title': 'How to reach me',
    'contact.phone': 'Phone',
    'contact.phoneNote': 'Mon–Fri, office hours',
    'contact.foot': 'Also on <a href="https://www.linkedin.com/in/giuseppe-napoletano/" target="_blank" rel="noopener">LinkedIn</a>.',

    'footer.privacy': 'No cookies, no tracking.',

    'mobile.call': 'Call',
    'mobile.mail': 'Email'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));

  // Fotografia dei testi italiani presenti nell'HTML, così il ritorno a IT è esatto.
  nodes.forEach(function (el) {
    el.__it = el.tagName === 'META' ? el.getAttribute('content') : read(el);
  });

  function read(el) {
    var attr = el.getAttribute('data-i18n-attr');
    return attr ? el.getAttribute(attr) : el.innerHTML;
  }

  function write(el, value) {
    if (el.tagName === 'META') { el.setAttribute('content', value); return; }
    var attr = el.getAttribute('data-i18n-attr');
    if (attr) { el.setAttribute(attr, value); return; }
    el.innerHTML = value;
  }

  function applyLang(lang) {
    var english = lang === 'en';
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = english ? EN[key] : el.__it;
      if (typeof value === 'string') write(el, value);
    });

    document.documentElement.lang = english ? 'en' : 'it';
    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute('content', english ? 'en_GB' : 'it_IT');

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      var on = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    try { localStorage.setItem('gn-lang', lang); } catch (e) { /* modalità privata */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'en' || fromUrl === 'it') return fromUrl;
    try {
      var saved = localStorage.getItem('gn-lang');
      if (saved === 'en' || saved === 'it') return saved;
    } catch (e) { /* ignora */ }
    return (navigator.language || 'it').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
  }

  document.querySelectorAll('.lang-switch button').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  applyLang(initialLang());

  /* ----------------------------------------------------------
     2. Menu mobile
     ---------------------------------------------------------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('is-open')) return;
    if (!nav.contains(e.target) && !burger.contains(e.target)) closeNav();
  });

  /* ----------------------------------------------------------
     3. Comparsa dei blocchi: il motore (l'elenco degli elementi è al punto 6)
     ---------------------------------------------------------- */
  var pending = [];

  function revealPass() {
    if (!pending.length) return;
    var vh = window.innerHeight;
    var mostrati = 0;
    pending = pending.filter(function (el) {
      var r = el.getBoundingClientRect();
      var entrato = r.top < vh * 0.92 && r.bottom > 0;
      var superato = r.bottom <= 0;   // àncora nell'URL o posizione ripristinata
      if (!entrato && !superato) return true;
      if (entrato) {
        el.style.transitionDelay = Math.min(mostrati * 70, 280) + 'ms';
        mostrati++;
      }
      el.classList.add('is-in');
      return false;
    });
  }

  /* ----------------------------------------------------------
     4. Header al scroll + barra CTA mobile
     ---------------------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var mobileBar = document.getElementById('mobileBar');
  var contactSection = document.getElementById('contatti');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);

    if (mobileBar) {
      var contactVisible = contactSection &&
        contactSection.getBoundingClientRect().top < window.innerHeight * 0.85;
      var show = y > 520 && !contactVisible;
      mobileBar.classList.toggle('is-visible', show);
      mobileBar.setAttribute('aria-hidden', String(!show));
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    revealPass();                                  // sincrono: mai a carico di rAF
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     5. Sezione attiva nel menu
     ---------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ----------------------------------------------------------
     6. Comparsa dei blocchi: quali elementi
     ---------------------------------------------------------- */
  // Il controllo gira dentro il gestore di scroll, senza dipendere da
  // IntersectionObserver: se qualcosa va storto il contenuto resta comunque
  // visibile, che su un sito vetrina conta molto più dell'animazione.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pending = Array.prototype.slice.call(document.querySelectorAll(
      '.section-head, .card, .project, .gallery li, .exp, .techspec > div,' +
      ' .cv-extra > div, .about-photo, .about-copy, .contact-card'
    ));
    pending.forEach(function (el) { el.classList.add('reveal'); });
  }

  revealPass();
  window.addEventListener('load', revealPass);
  window.addEventListener('resize', revealPass, { passive: true });
  setTimeout(revealPass, 1200);   // rete di sicurezza per il primo schermo

  /* ----------------------------------------------------------
     7. Anno nel footer
     ---------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     8. Pulizia del vecchio service worker VuePress
     Chi ha visitato il sito precedente ha ancora una cache attiva
     che servirebbe la vecchia pagina: qui la smontiamo.
     ---------------------------------------------------------- */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) { reg.unregister(); });
    }).catch(function () { /* ignora */ });
  }
  if (window.caches && caches.keys) {
    caches.keys().then(function (keys) {
      keys.forEach(function (k) { caches.delete(k); });
    }).catch(function () { /* ignora */ });
  }
})();
