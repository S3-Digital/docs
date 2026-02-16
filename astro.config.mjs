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
    {
        label: 'Wszystkie Instrukcje',
        // Użyj kropki '.' - to każe szukać w całym folderze src/content/docs
        autogenerate: { directory: '.' },
    },
],
		}),
	],
});
