# Atharv Mudse — Portfolio

Personal portfolio website showcasing work in **Robotics, Autonomous Systems, Computer Vision, and Software Development**.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, React Icons
- **Backend:** FastAPI, Python, Uvicorn (Contact Form API)
- **Deployment:** Vercel

## 📁 Project Structure

- `Frontend/` — React SPA featuring project highlights, experience timeline, skills toolkit, and contact form
- `backend/` — Minimal FastAPI service handling the contact form endpoint (`/api/contact`)

## 🚀 Getting Started

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Available locally at `http://localhost:3000`.

### Backend (Optional)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Available locally at `http://localhost:8000` (API docs at `/docs`).

## 📦 Production Build

```bash
cd Frontend
npm run build
```

Production output is generated in `Frontend/dist`.

## 📄 License

MIT
