# Atharv Mudse Portfolio

A personal portfolio built with React and Vite. The site highlights robotics, AI, and software work through animated sections, project cards, timelines, and a contact form.

## Features

- Responsive single-page layout with smooth section navigation
- Hero section with profile image fallback logic
- About section with auto-rotating slideshow
- Skills grouped by category (Robotics, AI/Vision, CSE stack, Tools)
- Work experience timeline
- Achievements and events slideshow
- Featured projects with GitHub and Live Demo links
- Education and testimonials sections
- Contact form UI with local success state (no backend submission)

## Tech Stack

- React 19
- Vite 7
- Plain CSS (custom component styling)

## Project Structure

```text
Portfolio/
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- App.jsx
|   |   |-- App.css
|   |   |-- index.css
|   |   `-- main.jsx
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
|   `-- vercel.json
`-- README.md
```

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:3000` (configured in `frontend/vite.config.js`).

## Build and Preview

```bash
cd frontend
npm run build
npm run preview
```

- Production build output: `frontend/dist`

## Deployment

This repo includes `frontend/vercel.json` for Vite deployment on Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites enabled to route all paths to `index.html`

## Content Customization

Most site content is currently maintained as local arrays inside component files:

- About slideshow: `frontend/src/components/About.jsx`
- Skills: `frontend/src/components/Skills.jsx`
- Experience: `frontend/src/components/Experience.jsx`
- Achievements and events: `frontend/src/components/AchievementsEvents.jsx`
- Projects: `frontend/src/components/Projects.jsx`
- Education: `frontend/src/components/Education.jsx`
- Testimonials: `frontend/src/components/Testimonials.jsx`
- Contact details and messaging: `frontend/src/components/Contact.jsx`

Static images are served from `frontend/public`.

## Notes

- The contact form currently simulates submission locally and shows a success message.
- No backend/API dependency is required to run the current project.
