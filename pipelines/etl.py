import pandas as pd

# Load raw jobs data
df = pd.read_csv("../data/raw/jobs.csv")

# Clean column names
df.columns = df.columns.str.lower()

# Create skills column
df["skills"] = df["description"]

# Save processed data
df.to_csv("../data/processed/processed_jobs.csv", index=False)

print("ETL pipeline completed")