/* ============================================
   whatiwriteofwhatithink — JavaScript
   Hamburger menu + minimal interactions
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Hamburger Menu ---
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay = document.querySelector('.nav__overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      const isActive = hamburger.classList.toggle('active');
      overlay.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close overlay when a link is clicked
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Post Card Click ---
  // Make entire card clickable via the first link inside it
  document.querySelectorAll('.post-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') return; // let actual links work normally
      var link = card.querySelector('a');
      if (link) link.click();
    });
  });

})();
