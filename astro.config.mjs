// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// DODAJ SWÓJ ADRES (nawet tymczasowy), to pomaga Starlightowi w routingu
	site: 'https://docs.s3-digital.com',
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
					href: 'https://github.com/S3-Digital/docs',
					icon: 'github',
				},
			],
			sidebar: [
				{
					label: 'Dokumentacja',
					// Autogeneracja szuka plików w src/content/docs/
					autogenerate: { directory: '.' },
				},
			],
		}),
	],
	// USUNĘLIŚMY SEKCJĘ VITE Z PLUGINEM YAML
});