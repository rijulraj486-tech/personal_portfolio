# Rijul Raj — Developer Portfolio

A personal developer portfolio that presents selected projects, experience, skills, and ways to get in touch.

## Technology stack

- Next.js 16 with the App Router, React 19, and TypeScript
- Redux Toolkit and React-Redux for client-side UI state
- TanStack Query for GitHub repository data
- CSS with Tailwind CSS available for utility use

## Features

- Responsive portfolio pages for home, about, experience, projects, project details, and contact
- Project catalogue with filtering and search, plus individual project pages
- Optional public GitHub repository and profile links
- Theme and navigation controls
- Contact form validation through `POST /api/contact`

## Local development

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment configuration

Use `.env.local` for machine-specific values; it is ignored by Git. Do not commit `.env.local` or any other file that contains credentials.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | No | Enables public GitHub repository data and GitHub profile links. This value is exposed to the browser, so it must not contain a secret. |

Leave `NEXT_PUBLIC_GITHUB_USERNAME` unset to keep the GitHub repository section in its not-configured state. The resume download remains disabled until a real `public/resume.pdf` is added and `resumeUrl` is set to `"/resume.pdf"` in `lib/profile.ts`.

## Validation and production build

```bash
npm run lint
npm run build
```

To run the resulting production build locally:

```bash
npm run start
```

## Deployment

1. Push the repository to the Git provider used by the chosen hosting platform.
2. Create a Next.js project on a host that supports a Node.js server.
3. Configure `NEXT_PUBLIC_GITHUB_USERNAME` in the host's build environment if GitHub repositories and profile links should be shown. Do not add secrets to public variables.
4. Use `npm run build` as the build command and `npm run start` as the start command when the platform requires explicit commands.
5. Deploy, then verify the deployed routes and contact form behavior.

The contact API validates and acknowledges submissions only; no email delivery provider is configured. Set up a delivery service separately if form submissions need to reach an inbox.
