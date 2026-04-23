from datetime import datetime, timezone
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: str = Field(min_length=3, max_length=254)
    subject: str = Field(default="", max_length=150)
    message: str = Field(min_length=1, max_length=4000)


app = FastAPI(
    title="Portfolio Backend",
    description="Minimal FastAPI backend for the portfolio contact form and site metadata.",
    version="1.0.0",
)

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "CORS_ORIGINS",
        "http://localhost:3000,http://localhost:5173",
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "message": "Portfolio backend is running.",
        "docs": "/docs",
        "health": "/api/health",
    }


@app.get("/api/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "portfolio-backend",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


@app.get("/api/profile")
def profile() -> dict[str, str]:
    return {
        "name": "Atharv Mudse",
        "headline": "Robotics, AI, and software developer",
        "location": "India",
        "availability": "Open to opportunities",
        "email": "atharvmudse@gmail.com",
    }


@app.post("/api/contact")
def submit_contact(payload: ContactRequest) -> dict[str, object]:
    return {
        "message": "Thanks for reaching out. Your message was received successfully.",
        "receivedAt": datetime.now(timezone.utc).isoformat(),
        "data": payload.model_dump(),
    }
