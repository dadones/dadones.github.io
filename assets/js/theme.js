(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let toggle;

  function readPreference() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  let preference = readPreference();

  function applyTheme() {
    const theme = preference ?? (systemTheme.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    if (toggle) toggle.setAttribute('aria-checked', String(theme === 'dark'));
  }

  // Apply the preference before styles load to avoid flashing the wrong theme.
  applyTheme();

  systemTheme.addEventListener('change', () => {
    if (preference === null) applyTheme();
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      preference = readPreference();
      applyTheme();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // The switch still works when the browser blocks local storage.
      }
    });

    applyTheme();
    toggle.hidden = false;
  });
})();
