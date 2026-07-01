# Lady Liberty — Fourth of July

A cinematic, luxury interactive experience built to ask one question.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

```
├── index.html          Main entry
├── css/                Stylesheets (variables, glass, loader, hero, etc.)
├── js/                 Modules (loader, cursor, scroll, particles, fireworks)
├── assets/             Images, audio, textures (add your own)
└── shaders/            Reserved for custom GLSL if needed
```

## Adding Audio

Uncomment the `<audio>` tags in `index.html` and place files in `assets/audio/`:

- `ambient.mp3` — soft background soundtrack
- `fireworks.mp3` — celebration sounds
- `click.mp3` — button press
- `wind.mp3` — ambient wind loop

Then uncomment the playback calls in `js/interactions.js` and `js/celebration.js`.

Audio does not autoplay — it starts after she presses **Yes**.

## Tech Stack

- **Vite** — dev server and build
- **GSAP + ScrollTrigger** — animations and scroll reveals
- **Lenis** — smooth scrolling
- **Three.js** — subtle volumetric background particles and god rays
- Custom canvas systems for cloth flags, fireworks, and particles

## Journey Sections

The experience is a scroll-driven interactive journey built for Keilah:

| Section | Description |
|---------|-------------|
| Hero | Welcome intro — scroll to begin |
| Summer | Warm golden-hour atmosphere |
| Invitation | Stationery unfold with wax seal |
| Moodboard | Horizontal scroll collage |
| Favorite Things | Interactive glass tiles |
| Fun Facts | Split-layout luxury cards |
| Our Perfect Day | Cinematic timeline |
| Things We Should Do | Activity grid |
| Photo Gallery | Glass polaroid frames |
| Photo Strip | Vintage booth strip |
| Memory Wall | Your photos from `/memories/` |
| Playlist | Vinyl player UI (customize tracks in HTML) |
| Weather + Countdown | July 4 forecast widget |
| Bucket List | Interactive checklist |
| VIP Ticket | Foil ticket for Keilah |
| Quote Wall | Meaningful quotes |
| Letter | Personal note (original) |
| Final Proposal | "Will you be my Lady Liberty?" |
| CTA | Yes button + celebration |

**Hidden surprise:** Click the glowing star in the bottom-right corner.

## Memory Photos

Place photos in the `/memories/` folder (already includes `memory1.jpg`–`memory6.jpg`). They appear in the Gallery, Photo Strip, and Memory Wall. Images lazy-load when scrolled into view.

## Customization

- Edit the letter copy in `index.html` (`#letter-text`)
- Change celebration messages in `js/celebration.js`
- Adjust colors in `css/variables.css`

---

Built with care. Happy Fourth of July.
