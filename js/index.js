import './script.js';

const profileLinks = document.querySelectorAll('.profile_name');

profileLinks.forEach((profileLink) => {
	profileLink.addEventListener('click', () => {
		const image = profileLink.querySelector('img');
		const caption = profileLink.querySelector('figcaption');

		if (!image || !caption) {
			return;
		}

		localStorage.setItem('perfilAtivoNome', caption.textContent.trim());
		localStorage.setItem('perfilAtivoImagem', image.getAttribute('src'));
	});
});
