// Portfolio content lives here so it can be updated without touching markup. Blog posts live in src/content/blog.

export interface Link {
	label: string;
	href: string;
}

export interface Project {
	name: string;
	tagline: string;
	usage?: string;
	stack: string[];
	links: Link[];
}

export const profile = {
	handle: "Edesem",
	headline: "Roughly two-thirds of my parish uses an app I built.",
	intro: "Software engineer working with React, React Native and Node.js.",
	github: "https://github.com/edesem",
};

export const projects: Project[] = [
	{
		name: "Magyar Ortodoxia: Imakönyv",
		tagline: "A cross-platform digital prayer book for the Hungarian Orthodox community.",
		usage: "185+ downloads",
		stack: ["React Native", "Expo", "TypeScript", "GitHub Actions"],
		links: [
			{ label: "App Store", href: "https://apps.apple.com/us/app/magyar-ortodoxia-imak%C3%B6nyv/id6759855687" },
			{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.leventezoltan.magyarortodoxia" },
			{ label: "Source", href: "https://github.com/Edesem/Magyar-Ortodoxia" },
		],
	},
	{
		name: "SPAOC",
		tagline: "Events and liturgical information for an Antiochian Orthodox parish.",
		usage: "385+ downloads, adopted by roughly two-thirds of the parish",
		stack: ["React Native", "Google Calendar API", "REST APIs", "GitHub Actions"],
		links: [
			{ label: "App Store", href: "https://apps.apple.com/us/app/spaoc/id6739750656" },
			{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.edesem.StPaulParishApp" },
		],
	},
	{
		name: "BibleSearch",
		tagline: "A web app for searching and browsing the Bible by chapter and verse.",
		stack: ["Node.js", "SQLite", "EJS"],
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
		body: "Native speaker of Hungarian and English, taking pleasure in learning Italian, Latin, and Greek.",
	},
];
