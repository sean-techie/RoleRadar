import pandas as pd

# Load processed jobs data
df = pd.read_csv("../data/processed/processed_jobs.csv")

# Skills dictionary
skills_list = [
    "Python",
    "SQL",
    "React",
    "AWS",
    "Docker",
    "FastAPI",
    "Machine Learning",
    "NLP",
    "PyTorch",
    "Tailwind",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Airflow",
    "ETL"
]

# Function to extract skills
def extract_skills(description):
    found_skills = []

    for skill in skills_list:
        if skill.lower() in description.lower():
            found_skills.append(skill)

    return ", ".join(found_skills)

# Apply extraction
df["extracted_skills"] = df["description"].apply(extract_skills)

# Save results
df.to_csv("../data/processed/jobs_with_skills.csv", index=False)

print(df[["role", "extracted_skills"]])
print("Skill extraction completed")