import { getCollection } from "astro:content";

/** Published posts, newest first. */
export async function getPosts() {
	const posts = await getCollection("blog", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
	return date.toLocaleDateString("en-AU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}

const WORDS_PER_MINUTE = 200;

/** Estimated reading time, e.g. "4 min read", from a post's raw markdown. */
export function readingTime(markdown = "") {
	const text = markdown
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
	const words = text.split(/\s+/).filter((w) => /\w/.test(w)).length;
	return `${Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))} min read`;
}
