// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			defaultLocale: 'pl', // Ustawiamy polski jako domyślny
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
				{
					label: 'Poradniki', // Zamiast Guides
					items: [
						// Pamiętaj, żeby potem zmienić też folder/plik na dysku, jeśli chcesz zachować porządek
						// Ale na razie slug 'guides/example' może zostać, to tylko adres URL
						{ label: 'Przykładowy Poradnik', slug: 'guides/example' },
					],
				},
				{
					label: 'Baza Wiedzy', // Zamiast Reference
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
