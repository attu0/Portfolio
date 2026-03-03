# 🚀 Atharv Mudse — Portfolio

A modern, full-stack portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js). Features a sleek dark theme with glassmorphism, smooth animations, and a fully database-driven backend.

## ✨ Features

- **Hero** — Gradient intro with circular profile image
- **About** — Auto-sliding project carousel with dot navigation
- **Skills** — Dynamic skill categories fetched from the database
- **Experience** — Interactive timeline of work history
- **Education** — Academic background with timeline layout
- **Projects** — Project cards with tech tags, GitHub & live demo links
- **Testimonials** — Client feedback cards with star ratings
- **Contact** — Working contact form that saves messages to MongoDB
- **Responsive** — Fully mobile-friendly with animated navigation

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Vite, CSS3 (custom design system) |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Tools** | Git, GitHub, Postman, VS Code |

## 📂 Project Structure

```
Portfolio/
├── Backend/
│   ├── config/db.js          # MongoDB connection
│   ├── models/               # Mongoose schemas
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   ├── Message.js
│   │   └── Testimonial.js
│   ├── routes/               # Express API routes
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── educationRoutes.js
│   │   ├── messageRoutes.js
│   │   └── testimonialRoutes.js
│   ├── seed.js               # Database seeder script
│   ├── server.js             # Express app entry point
│   └── .env                  # Environment variables
├── Frontend/
│   ├── public/               # Static assets (profile image)
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx           # Main app layout
│   │   ├── App.css           # Full design system
│   │   └── index.css         # Global base styles
│   └── vite.config.js        # Vite + proxy config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo

```bash
git clone https://github.com/attu0/Portfolio.git
cd Portfolio
```

### 2. Set up the backend

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Seed the database with sample data:

```bash
node seed.js
```

Start the server:

```bash
npm start
```

### 3. Set up the frontend

```bash
cd Frontend
npm install
npm run dev
```

Visit **http://localhost:3000** — the frontend proxies API calls to the backend on port 5000.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `GET/POST/PUT/DELETE` | `/api/projects` | Manage projects |
| `GET/POST/PUT/DELETE` | `/api/skills` | Manage skill categories |
| `GET/POST/PUT/DELETE` | `/api/experience` | Manage work experience |
| `GET/POST/PUT/DELETE` | `/api/education` | Manage education |
| `GET/POST` | `/api/messages` | Contact form messages |
| `GET/POST/PUT/DELETE` | `/api/testimonials` | Manage testimonials |

## 📝 Customizing Your Data

Edit `Backend/seed.js` with your actual projects, skills, experience, and education, then run:

```bash
cd Backend
node seed.js
```

For your profile photo, place it at `Frontend/public/profile.jpg`.

## 📄 License

MIT — feel free to use this as a template for your own portfolio!

---

**Built with ❤️ by [Atharv Mudse](https://github.com/attu0)**
