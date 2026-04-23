# Portfolio Backend

A small FastAPI backend for the portfolio website.

## What it provides

- `GET /` - basic status message
- `GET /api/health` - health check for deployment monitoring
- `GET /api/profile` - portfolio metadata for the frontend
- `POST /api/contact` - contact form endpoint

## Local setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

If your frontend runs on a different origin, set `CORS_ORIGINS` before starting the server.

Example:

```bash
set CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

## API docs

Once the server is running, open:

- `http://localhost:8000/docs`
- `http://localhost:8000/redoc`
