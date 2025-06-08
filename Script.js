// script.js

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const newsList = document.getElementById('newsList');
  const articles = newsList ? Array.from(newsList.getElementsByTagName('article')) : [];

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();

      articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const desc = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || desc.includes(query)) {
          article.style.display = '';
        } else {
          article.style.display = 'none';
        }
      });
    });
  }

  // Contoh navigasi aktif dinamis (opsional)
  const navLinks = document.querySelectorAll('nav ul.nav-menu li a');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
