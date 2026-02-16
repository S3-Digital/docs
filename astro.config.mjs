// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import yaml from '@rollup/plugin-yaml'; // <--- 1. DODANO IMPORT TUTAJ

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Moje dokumenty',
			defaultLocale: 'pl', // Twoje ustawienia językowe zostają bez zmian
			locales: {
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			social: [
				{
					label: 'GitHub',
					href: 'https://github.com/withastro/starlight',
					icon: 'github',
				},
			],
			sidebar: [
				{
					label: 'Dokumentacja',
					// To wygeneruje listę ze wszystkich plików w folderze docs
					autogenerate: { directory: '.' },
				},
			],
		}),
	],
	// <--- 2. DODANO SEKCJĘ VITE NA SAMYM DOLE (poza nawiasem integrations)
	vite: {
		plugins: [yaml()]
	}
});