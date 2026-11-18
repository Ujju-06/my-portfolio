# Ujjwal Kumar Pandey — Portfolio

Production-ready personal site for **Ujjwal Kumar Pandey**, AI/ML Engineer. Built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and EmailJS.

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## EmailJS

1. Copy `.env.example` to `.env`.
2. Create a service, email template, and public key at [EmailJS](https://www.emailjs.com/).
3. Fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Suggested template fields: `from_name`, `from_email`, `subject`, `message`, `reply_to`.

Restart the dev server after changing env files.

## Customization

| What | Where |
| --- | --- |
| Name, bio, contact, stats | `src/data/profile.js` |
| Skills | `src/data/skills.js` |
| Experience & education | `src/data/experience.js` |
| Projects, tags, links | `src/data/projects.js` |
| Resume download | `public/resume.pdf` |
| Profile / other images | `src/assets/` |
| Colors, fonts, spacing | `tailwind.config.js` and `src/index.css` |

Project GitHub and live demo buttons stay hidden until you replace `[GitHub Repo URL]` / `[Live Demo URL]` with real `https://` links.

Location is stored as `[City, State, India]` until you add a real city.

## Resume

The Download Resume button serves `public/resume.pdf` (copied from `UJJWAL_KUMAR_PANDEY_resume1.pdf`). Replace that file whenever the resume is updated.

## Deploy

### Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
4. Add the EmailJS env vars in Project Settings → Environment Variables.

### Netlify

1. Import the GitHub repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add the same EmailJS env vars.

SPA note: this site is a single page with hash/section scrolling, so no extra redirects are required.
