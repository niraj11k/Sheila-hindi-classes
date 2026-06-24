(function () {
  function initTestimonialToggles() {
    var quotes = document.querySelectorAll('.testimonial > p');

    quotes.forEach(function (quote, index) {
      var id = quote.id || 'testimonial-copy-' + index;
      quote.id = id;
      quote.classList.add('testimonial-copy', 'is-collapsed');

      window.requestAnimationFrame(function () {
        if (quote.scrollHeight <= quote.clientHeight + 1) {
          quote.classList.remove('is-collapsed');
          return;
        }

        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'testimonial-toggle';
        toggle.setAttribute('aria-controls', id);
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Read more';

        toggle.addEventListener('click', function () {
          var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!isExpanded));
          quote.classList.toggle('is-collapsed', isExpanded);
          toggle.textContent = isExpanded ? 'Read more' : 'Read less';
        });

        quote.insertAdjacentElement('afterend', toggle);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialToggles);
  } else {
    initTestimonialToggles();
  }
}());
