# 🚀 Atharv Mudse — Portfolio

A modern frontend portfolio website built with **React + Vite**. It features a sleek dark theme with glassmorphism, smooth animations, and locally managed content (no backend required).

## ✨ Features

- **Hero** — Gradient intro with circular profile image
- **About** — Auto-sliding project-style highlights with dot navigation
- **Skills** — Skill categories rendered from local component data
- **Experience** — Interactive timeline rendered from local component data
- **Education** — Academic timeline rendered from local component data
- **Projects** — Project cards with tech tags and links
- **Testimonials** — Feedback cards with star ratings
- **Contact** — Frontend-only contact form UX
- **Responsive** — Fully mobile-friendly with animated navigation

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Vite, CSS3 (custom design system) |
| **Tools** | Git, GitHub, VS Code |

## 📂 Project Structure

```
Portfolio/
├── Frontend/
│   ├── public/               # Static assets (profile image)
│   ├── src/
│   │   ├── components/       # React components + local section data
│   │   ├── App.jsx           # Main app layout
│   │   ├── App.css           # Full design system
│   │   └── index.css         # Global base styles
│   └── vite.config.js        # Vite config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)

### 1. Clone the repo

```bash
git clone https://github.com/attu0/Portfolio.git
cd Portfolio
```

### 2. Run the frontend

```bash
cd Frontend
npm install
npm run dev
```

Visit **http://localhost:3000**.

## 📝 Customizing Your Data

Update local data directly inside these components:

- `Frontend/src/components/Projects.jsx`
- `Frontend/src/components/Skills.jsx`
- `Frontend/src/components/Experience.jsx`
- `Frontend/src/components/Education.jsx`
- `Frontend/src/components/Testimonials.jsx`
- `Frontend/src/components/About.jsx`

For your profile photo, place it at `Frontend/public/profile.jpg`.

## 📄 License

MIT — feel free to use this as a template for your own portfolio!

---

**Built with ❤️ by [Atharv Mudse](https://github.com/attu0)**
