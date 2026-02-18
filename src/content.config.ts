import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';

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

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema()
	}),
};