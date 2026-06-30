# Rufat Huseynli — Portfolio

A faithful recreation of [Brittany Chiang's v4 portfolio](https://v4.brittanychiang.com) built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design Accuracy

This matches the actual v4 design from `v4.brittanychiang.com`:

- ✅ Fixed top navbar that hides on scroll-down, reveals on scroll-up
- ✅ Logo hexagon (SVG polygon) with initials
- ✅ Nav links with `01. 02.` monospace numbering
- ✅ Resume button (outlined, green)
- ✅ Fixed left social sidebar with vertical line
- ✅ Fixed right email sidebar (rotated, vertical line)
- ✅ Hero: "Hi, my name is" → big name → tagline → description → CTA
- ✅ Staggered hero entry animations (exactly like v4)
- ✅ Numbered headings with CSS `counter-increment: section` and decorative line
- ✅ About: 2-column with text + skills grid + photo placeholder with green border offset
- ✅ Experience: tab navigation (left border tab indicator, exactly v4 style)
- ✅ Work: Featured projects in alternating left/right 12-column grid layout
- ✅ Work: Other projects grid (folder icon cards)
- ✅ Contact: Centered, large, numbered "04. What's Next?" section
- ✅ Footer with mobile social links
- ✅ `body { counter-reset: section }` for automatic section numbering
- ✅ Full mobile responsiveness: hamburger with slide-in panel
- ✅ CSS variables matching exact v4 color palette

## Color Palette

| Name | Hex |
|---|---|
| Navy | `#0a192f` |
| Light Navy | `#112240` |
| Lightest Navy | `#233554` |
| Slate | `#8892b0` |
| Light Slate | `#a8b2d8` |
| Lightest Slate | `#ccd6f6` |
| White | `#e6f1ff` |
| Green | `#64ffda` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising

All content is in `lib/data.ts`. Update:

- `config` — name, email, GitHub/LinkedIn URLs, resume URL
- `navLinks` — navigation items
- `experience` — work history
- `featuredProjects` — highlighted work
- `otherProjects` — project grid
- `skills` — skills list
- `aboutParagraphs` — about section text

Replace `public/resume.pdf` with your actual CV.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Attribution

Original design by [Brittany Chiang](https://brittanychiang.com). Please give proper credit.
