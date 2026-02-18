// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://docs.s3-digital.com',
	integrations: [
		starlight({
			title: 'Sikora Digital Portal',
			defaultLocale: 'pl',
			locales: {
				// 'root' sprawia, że strona główna jest pod adresem / zamiast /pl/
				root: {
					label: 'Polski',
					lang: 'pl',
				},
			},
			social: [
				{
					label: 'GitHub',
					href: 'https://github.com/S3-Digital/docs',
					icon: 'github',
				},
			],
			sidebar: [
				{
					label: 'Dokumentacja',
					autogenerate: { directory: '.' },
				},
			],
			customCss: [
				// Tutaj możesz dodać ścieżkę do własnego CSS w przyszłości
			],
		}),
		mdx(),
	],
});