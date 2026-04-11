const storageKey = 'netflix-theme';
const root = document.documentElement;
const toggleButton = document.querySelector('.theme-toggle');

function getPreferredTheme() {
	const savedTheme = localStorage.getItem(storageKey);

	if (savedTheme === 'light' || savedTheme === 'dark') {
		return savedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
	root.dataset.theme = theme;
	const isLight = theme === 'light';

	toggleButton.setAttribute('aria-label', isLight ? 'Alternar para dark mode' : 'Alternar para light mode');
	toggleButton.setAttribute('aria-pressed', String(isLight));
	localStorage.setItem(storageKey, theme);
}

applyTheme(getPreferredTheme());

toggleButton.addEventListener('click', () => {
	const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
	applyTheme(nextTheme);
});