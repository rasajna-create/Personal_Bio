from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    name: str
    content: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the kitchen"}

@app.post("/messages")
def create_message(message: Message):
    return {"received": message}

projects = [
    {"title": "Personal Website", "description": "This site — my first real project applying frontend/backend/deployment concepts.", "tech": ["React", "FastAPI", "Uvicorn"]},
]

@app.get("/projects")
def get_projects():
    return projects

journey_entries = [
    {
        "date": "01-08-2026",
        "title": "Utilizing my skillset to build my first project - This website.",
        "content": "Learning how frontend, backend, and middleware actually connect by building this site from scratch. This is also an introduction to myself as I enter the world of programming professionaly."
    },
]

@app.get("/journey")
def get_journey():
    return journey_entries