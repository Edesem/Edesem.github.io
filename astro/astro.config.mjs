// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://edesem.github.io',
	markdown: {
		// Dark code theme to match the dark site.
		shikiConfig: { theme: 'github-dark' },
	},
});
