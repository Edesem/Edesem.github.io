# Edesem

Personal site built with [Astro](https://astro.build). Static output, deployed to GitHub Pages.

## Commands

Run from the repository root:

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site into `dist/`             |
| `npm run preview` | Preview the built site                  |

Restart `npm run dev` if you add a new top-level file such as `src/content.config.ts`.

## Where things live

- `src/data/site.ts`: headline, intro, apps and the "Outside work" lines.
- `src/content/blog/`: blog posts, one Markdown file each. Set `draft: true` in a post's front matter to hide it.
- `src/styles/global.css`: colours, type and the single column.
- `public/`: favicon and other static files.

## Writing a post

Copy `src/content/blog/template-post.md` to a new file, change the title, description and date, then replace the text. `template-post.md` is a placeholder: edit or delete it before publishing.
