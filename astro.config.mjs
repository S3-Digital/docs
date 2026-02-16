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
});