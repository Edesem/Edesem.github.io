import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	// Files starting with "_" (such as _template.md) are ignored.
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
