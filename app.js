function iconPhone() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.35 1.84.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>';
}
function iconArrow() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
}
function iconMenu() {
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
}
function iconClose() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
}
function iconInstagram() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
}
function iconFacebook() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
}

function flagStrip(size) {
  const height = size === 'lg' ? '16px' : '8px';
  return '<div class="gd-flags" style="height:' + height + '"><div class="gd-flags__usa"></div><div class="gd-flags__guat"></div><div class="gd-flags__italy"></div></div>';
}

function renderHeader() {
  const headerRoot = document.getElementById('shared-header');
  if (!headerRoot) return;

  headerRoot.innerHTML = `
    <header class="gd-header" id="gd-header">
      <div class="gd-header__inner">
        <a href="#" class="gd-header__logo">
          <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6cf34430-3542-46a1-a1aa-4b6f1bd6e2c3/de8c94d8-887e-4625-825f-ec262dbc28df/1779989843_dwtdp4.png" alt="Gus's Deli" class="gd-logo gd-logo--header" width="100" height="52" />
        </a>
        <nav class="gd-header__nav" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="#visit">Visit</a>
          <a href="#about">About</a>
        </nav>
        <div class="gd-header__cta">
          <a href="tel:+12032746442" class="gd-header__phone">${iconPhone()} 203.274.6442</a>
          <button type="button" class="gd-btn gd-btn--primary gd-btn--md"><span class="gd-btn__icon">${iconArrow()}</span><span>Order Pickup</span></button>
        </div>
        <button type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gd-mobile-nav" class="gd-iconbtn gd-header__hamburger">${iconMenu()}</button>
      </div>
      <nav id="gd-mobile-nav" class="gd-header__drawer" aria-label="Mobile" hidden>
        <a href="#menu">Menu</a>
        <a href="#specials">Specials</a>
        <a href="#visit">Visit</a>
        <a href="#about">About</a>
        <a href="tel:+12032746442" class="gd-header__drawer-phone">${iconPhone()} 203.274.6442</a>
        <button type="button" class="gd-btn gd-btn--primary gd-btn--md gd-header__drawer-cta"><span class="gd-btn__icon">${iconArrow()}</span><span>Order Pickup</span></button>
      </nav>
    </header>
  `;

  const header = headerRoot.querySelector('.gd-header');
  const hamburger = headerRoot.querySelector('.gd-header__hamburger');
  const drawer = headerRoot.querySelector('.gd-header__drawer');

  function setMenuOpen(open) {
    if (!header || !hamburger || !drawer) return;
    header.classList.toggle('is-menu-open', open);
    hamburger.innerHTML = open ? iconClose() : iconMenu();
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    drawer.hidden = !open;
    document.body.classList.toggle('gd-menu-open', open);
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      setMenuOpen(!header.classList.contains('is-menu-open'));
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('is-menu-open')) {
        setMenuOpen(false);
      }
    });
  }
}

function renderFooter() {
  const footerRoot = document.getElementById('shared-footer');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="gd-footer" id="about">
      <div class="gd-footer__top">
        <div class="gd-footer__brand">
          <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6cf34430-3542-46a1-a1aa-4b6f1bd6e2c3/de8c94d8-887e-4625-825f-ec262dbc28df/1779989843_dwtdp4.png" alt="Gus's Deli" class="gd-logo gd-logo--footer" width="160" height="84" />
          <div class="gd-footer__tag">American · Guatemalan · Italian</div>
        </div>
        <nav class="gd-footer__cols" aria-label="Footer">
          <div>
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Sandwiches</a></li>
              <li><a href="#">Bagels</a></li>
              <li><a href="#">Salads</a></li>
              <li><a href="#">Drinks</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li><a href="#">Hours</a></li>
              <li><a href="#">Directions</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Delivery</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+12032746442">203.274.6442</a></li>
              <li><a href="mailto:hi@gussdeli.com">hi@gussdeli.com</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </nav>
      </div>

      ${flagStrip('lg')}

      <div class="gd-footer__bottom">
        <span>© 2026 Gus's Deli · Stamford, CT</span>
        <span class="script">— Thanks, see you next time. —</span>
        <span class="gd-footer__social">
          <a href="#" aria-label="Instagram">${iconInstagram()}</a>
          <a href="#" aria-label="Facebook">${iconFacebook()}</a>
        </span>
      </div>
    </footer>
  `;
}

renderHeader();
renderFooter();

function initFullMenu() {
  const menuNav = document.querySelector('.gd-full-menu__nav');
  if (!menuNav) return;

  const navLinks = menuNav.querySelectorAll('.gd-full-menu__nav-link');
  const sections = document.querySelectorAll('.gd-full-menu__category');

  if (navLinks.length === 0 || sections.length === 0) return;

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const isMobile = window.innerWidth <= 960;
        const headerOffset = isMobile ? 80 : 120;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer to highlight active nav link
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = menuNav.querySelector(`a[href="#${id}"]`);
      if (navLink) {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('is-active'));
          navLink.classList.add('is-active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', initFullMenu);
