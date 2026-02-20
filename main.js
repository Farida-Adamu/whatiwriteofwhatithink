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
      if (e.target.tagName === 'A') return;
      var link = card.querySelector('a');
      if (link) link.click();
    });
  });

  // --- Browse By Filter ---
  var pills = document.querySelectorAll('.browse-pill');
  var cards = document.querySelectorAll('.post-card[data-category]');

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');

      var filter = pill.getAttribute('data-filter');

      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

})();
