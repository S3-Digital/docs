import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';

// Twoje stałe biznesowe zostają - możesz je importować w komponentach .astro
export const SIKORA_POLICY = {
	security: {
		warningThreshold: 30,
		dangerThreshold: 7
	}
};

export const SIKORA_CONFIG = {
	siteName: "Sikora Digital Portal",
	companyName: "Sikora Digital",
	departments: {
		marketing: { name: "Growth & Marketing", color: "#00d1b2" },
		it: { name: "IT & Infrastructure", color: "#3273dc" }
	}
};

// --- KLUCZOWY ELEMENT DLA ASTRO 5 ---
export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema()
	}),
};