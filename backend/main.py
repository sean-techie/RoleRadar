from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

jobs = [
    {
        "role": "Frontend Developer",
        "company": "Google",
        "location": "Remote",
        "apply_link": "https://careers.google.com"
    },
    {
        "role": "Data Engineer",
        "company": "Microsoft",
        "location": "Cape Town",
        "apply_link": "https://careers.microsoft.com"
    },
    {
        "role": "AI Engineer",
        "company": "OpenAI",
        "location": "Remote",
        "apply_link": "https://openai.com/careers"
    }
]

@app.get("/")
def home():
    return {"message": "RoleRadar API running"}

@app.get("/jobs")
def get_jobs():
    return jobs