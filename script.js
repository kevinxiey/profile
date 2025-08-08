// Theme toggle and small helpers
(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const isLight = saved ? saved === 'light' : !prefersDark;

  setTheme(isLight ? 'light' : 'dark');
  updateIcon();

  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    updateIcon();
  });

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }

  function updateIcon() {
    const isDark = (document.documentElement.dataset.theme || '').includes('dark');
    btn.textContent = isDark ? '🌙' : '☀️';
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

