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
