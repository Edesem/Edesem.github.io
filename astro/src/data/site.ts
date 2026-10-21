// Portfolio content lives here so it can be updated without touching markup. Blog posts live in src/content/blog.

export interface Link {
	label: string;
	href: string;
}

export interface Project {
	name: string;
	tagline: string;
	date: string;
	platforms: string[];
	/** True for apps built for a community the owner belongs to; printed in red ink. */
	community?: boolean;
	stack: string[];
	stat?: { value: string; label: string };
	highlights: string[];
	links: Link[];
	/** Optional screenshot in /public; the pane renders without one. */
	screenshot?: { src: string; alt: string };
}

export const profile = {
	handle: "Edesem",
	role: "Software Engineer",
	headline: "I build calm, dependable software for the communities I belong to.",
	intro: "Software engineer working with React, React Native and Node.js.",
	github: "https://github.com/edesem",
};

export const projects: Project[] = [
	{
		name: "Magyar Ortodoxia: Imakönyv",
		tagline: "A cross-platform digital prayer book for the Hungarian Orthodox community.",
		date: "Mar 2026",
		platforms: ["iOS", "Android"],
		community: true,
		stack: ["React Native", "Expo", "TypeScript", "GitHub Actions"],
		stat: { value: "185+", label: "downloads" },
		highlights: [
			"Designed around a simple, privacy-focused experience.",
			"CI pipeline running tests, linting and type-checking, with Dependabot keeping dependencies current.",
			"Published on both iOS and Android.",
		],
		links: [
			{ label: "App Store", href: "https://apps.apple.com/us/app/magyar-ortodoxia-imak%C3%B6nyv/id6759855687" },
			{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.leventezoltan.magyarortodoxia" },
			{ label: "Source", href: "https://github.com/Edesem/Magyar-Ortodoxia" },
		],
		screenshot: {
			src: "/shots/imakonyv.webp",
			alt: "Imakönyv home screen: the Mindennapi imák list of daily prayers on a dark background.",
		},
	},
	{
		name: "SPAOC",
		tagline: "Events and liturgical information for an Antiochian Orthodox parish.",
		date: "Jan 2025",
		platforms: ["iOS", "Android"],
		community: true,
		stack: ["React Native", "Google Calendar API", "REST APIs", "GitHub Actions"],
		stat: { value: "385+", label: "downloads" },
		highlights: [
			"Pulls upcoming parish events live from Google Calendar.",
			"Integrates external APIs for daily fasting guidance and Saints of the Day.",
			"CI workflow for test coverage, linting and type-checking; built with AI-assisted development using Claude Code.",
			"Adopted by roughly two-thirds of the parish across iOS and Android.",
		],
		links: [
			{ label: "App Store", href: "https://apps.apple.com/us/app/spaoc/id6739750656" },
			{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.edesem.StPaulParishApp" },
		],
		screenshot: {
			src: "/shots/spaoc.webp",
			alt: "SPAOC home screen: today's feast and fasting guidance above the week's upcoming parish services.",
		},
	},
	{
		name: "BibleSearch",
		tagline: "A web app for searching and browsing chapters and verses.",
		date: "Jul 2023",
		platforms: ["Web"],
		stack: ["Node.js", "SQLite", "EJS"],
		highlights: [
			"SQLite queries tuned to retrieve and display relevant passages quickly.",
			"Supports chapter and verse ranges, abbreviated book names and keyword highlighting.",
		],
		links: [
			{ label: "Live demo", href: "https://biblesearch.onrender.com" },
			{ label: "Source", href: "https://github.com/Edesem/biblesearch" },
		],
	},
];

export const beyond: { title: string; body: string }[] = [
	{
		title: "Byzantine chant",
		body: "Student of Byzantine chant, active in liturgical music and community service.",
	},
	{
		title: "Languages",
		body: "Learning Italian, Latin, Greek and Hungarian.",
	},
];
