const searchInput = document.getElementById('searchInput');
const newsList = document.getElementById('newsList');
const articles = newsList.getElementsByTagName('article');

searchInput.addEventListener('input', function () {
  const filter = this.value.toLowerCase();

  Array.from(articles).forEach(article => {
    const title = article.querySelector('h4')?.textContent.toLowerCase() || '';
    const desc = article.querySelector('p')?.textContent.toLowerCase() || '';

    if (title.includes(filter) || desc.includes(filter)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
});
