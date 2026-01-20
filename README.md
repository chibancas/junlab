# Junlab

Junlab is a personal portfolio website for Juan Jose Fernandez. The site shares projects, studies, hobbies, and a contact form. It is built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## What the site includes

- Home page with a short intro and profile photo.
- Projects page with a list of real work and experiments.
- Studies page with education history and photos.
- Hobbies page with games, music, and a Spotify embed.
- Contact page with a form and social links.
- Privacy and cookies modal with a short policy.
- Custom SEO metadata, Open Graph tags, robots, and sitemap.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4 (via PostCSS)
- Lucide React icons
- Typewriter effect for the header text

## How it is built

- Pages live in `app/` and use the App Router.
- Each section has its own CSS file in `app/<section>/styles.css`.
- Shared UI lives in `components/`.
- The layout adds the global header, nav, footer, and the policy modal.
- Images are optimized with `next/image`, and allowed remote hosts are set in `next.config.ts`.
- Security headers are set in `next.config.ts` (CSP, HSTS, etc.).

## Contact form flow

The contact form is a server action in `app/contact/actions.ts` and a client form in `components/ContactForm.tsx`.

It includes:

- Basic validation on name, email, and message.
- A checkbox for data consent.
- A hidden honeypot input to reduce spam.
- Simple rate limiting in memory.
- A POST to an n8n webhook, protected with `N8N_FORM_SECRET`.

If the webhook fails, the user sees a friendly error. If it succeeds, a success message is returned.

## Local development

```bash
npm install
npm run dev
```

The dev server runs on port `40000`.

## Production build

```bash
npm run build
npm start
```

The start script also uses port `40000`.

## Docker setup

There is a Docker setup at `portfolio-NextJS/dockerfile` and a compose file at `portfolio-NextJS/compose.yml`.

Docker flow:

- Builds the app from the `junlab` folder.
- Runs `npm install` and `npm run build` during image build.
- Starts the app on port `31213`.
- Compose maps `127.0.0.1:31213` on the host to the container.

## Environment variables

Create a `.env` file inside `junlab/` with:

```bash
N8N_FORM_SECRET=your_secret_value
```

This value is used to authenticate the contact form webhook.

## Deployment notes

- The site is designed to run behind a reverse proxy (for example Apache or Nginx).
- The proxy should point to `127.0.0.1:31213` if you use the Docker compose setup.
- CSP allows images from a small allowlist and Spotify embeds.
