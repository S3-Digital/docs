// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Moje dokumenty',
			defaultLocale: 'pl',
			locales: {
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
<<<<<<< HEAD
    {
        label: 'Dokumentacja',
        autogenerate: { directory: 'docs' } // lub po prostu directory: '.' zależnie gdzie masz pliki
    }
]
=======
				{
					label: 'Przewodniki',
					// Opcja 1: Szukaj wszystkiego w folderze docs
					autogenerate: { directory: '.' },
				},
			],
>>>>>>> c9856ea (zapisuje biezace zmiany przed pull)
		}),
	],
});
