function includeHTML(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (id === 'header-placeholder') {
        // Attach nav toggle after header loads
        window.toggleNav = function() {
          var nav = document.getElementById('mainNav');
          nav.classList.toggle('show');
        };
        document.addEventListener('click', function(e) {
          var nav = document.getElementById('mainNav');
          var btn = document.querySelector('.nav-toggle');
          if (window.innerWidth <= 600 && nav && nav.classList.contains('show')) {
            if (!nav.contains(e.target) && !btn.contains(e.target)) {
              nav.classList.remove('show');
            }
          }
        });
      }
    });
}

document.addEventListener('DOMContentLoaded', function() {
  includeHTML('header-placeholder', 'header.html');
  includeHTML('nav-placeholder', 'nav.html');
  includeHTML('footer-placeholder', 'footer.html');
});
