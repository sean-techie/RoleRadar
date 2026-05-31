from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "RoleRadar API Running"
    }

@app.get("/jobs")
def jobs():
    return [
        {
            "role": "Frontend Developer",
            "company": "Google",
            "location": "Remote"
        },
        {
            "role": "Data Engineer",
            "company": "Microsoft",
            "location": "Cape Town"
        },
        {
            "role": "AI Engineer",
            "company": "OpenAI",
            "location": "Remote"
        }
    ]

@app.get("/skills")
def skills():
    df = pd.read_csv("../data/processed/jobs_with_skills.csv")

    skills_count = {}

    for skills in df["extracted_skills"]:
        for skill in skills.split(", "):
            if skill:
                skills_count[skill] = skills_count.get(skill, 0) + 1

    return skills_count