// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://edesem.github.io',
	markdown: {
		// A light theme keeps code blocks on the paper instead of dark slabs.
		shikiConfig: { theme: 'github-light' },
	},
});
