# Atharv Mudse Portfolio

A modern and responsive portfolio website built with **React** and **Vite**, showcasing my work in **Robotics, Artificial Intelligence, Computer Vision, and Software Development**. The portfolio features interactive animations, project highlights, professional experience, achievements, and a contact system powered by FastAPI.

## ✨ Features

* Responsive single-page design with smooth scrolling navigation
* Dynamic hero section with profile image fallback support
* Interactive About section with an auto-rotating slideshow
* Categorized technical skills:

  * Robotics & ROS 2
  * AI & Computer Vision
  * Software Development
  * Development Tools
* Professional experience timeline
* Achievements and event highlights carousel
* Featured projects with GitHub repositories and live demos
* Education and testimonials sections
* Contact form integrated with a FastAPI backend

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite 7
* HTML5, CSS3, JavaScript

### Backend

* FastAPI
* Python

## 📁 Project Structure

```text
Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── requirements.txt
│   └── README.md
│
└── README.md
```

## 🚀 Local Development

### Prerequisites

* Node.js 18+
* npm

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📦 Build for Production

```bash
cd frontend
npm run build
npm run preview
```

Production files are generated inside:

```text
frontend/dist
```

## 🌐 Deployment

The project includes a `vercel.json` configuration for seamless deployment on Vercel.

**Build Command**

```bash
npm run build
```

**Output Directory**

```text
dist
```

SPA rewrites are configured to ensure proper routing for all pages.

## 🎨 Content Customization

Most portfolio content is managed through component-level data arrays:

| Section               | File                                             |
| --------------------- | ------------------------------------------------ |
| About                 | `frontend/src/components/About.jsx`              |
| Skills                | `frontend/src/components/Skills.jsx`             |
| Experience            | `frontend/src/components/Experience.jsx`         |
| Achievements & Events | `frontend/src/components/AchievementsEvents.jsx` |
| Projects              | `frontend/src/components/Projects.jsx`           |
| Education             | `frontend/src/components/Education.jsx`          |
| Testimonials          | `frontend/src/components/Testimonials.jsx`       |
| Contact               | `frontend/src/components/Contact.jsx`            |

Static assets and images are stored in:

```text
frontend/public/
```

## 🔧 Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux/macOS
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### API Endpoint

```http
POST /api/contact
```

The backend handles contact form submissions and includes CORS support for local frontend development.

## 📌 Roadmap

* [ ] Email integration for direct contact form submissions
* [ ] Admin dashboard for message management
* [ ] Blog section for robotics and AI projects
* [ ] Project filtering and search functionality
* [ ] Dark/Light theme toggle

## 📄 License

This project is open-source and available under the MIT License.
