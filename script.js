const themeButton = document.getElementById('theme');
let savedTheme = null;
try { savedTheme = localStorage.getItem('blog-theme'); } catch (_) { /* Storage may be unavailable. */ }
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
}
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark.matches);
themeButton.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  savedTheme = dark ? 'dark' : 'light';
  try { localStorage.setItem('blog-theme', savedTheme); } catch (_) { /* Theme still works without persistence. */ }
});
prefersDark.addEventListener('change', (event) => {
  if (!savedTheme) applyTheme(event.matches);
});
const search = document.getElementById('search');
if (search) {
  let category = '全部';
  const cards = [...document.querySelectorAll('.post-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  function filterPosts() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const visible = (category === '全部' || card.dataset.category === category) && card.textContent.toLocaleLowerCase().includes(query);
      card.hidden = !visible;
      if (visible) count++;
    });
    document.getElementById('empty').hidden = count !== 0;
    document.getElementById('results').textContent = `找到 ${count} 篇文章`;
  }
  filters.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    filterPosts();
  }));
  search.addEventListener('input', filterPosts);
  filterPosts();
}
