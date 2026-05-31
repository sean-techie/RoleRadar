export async function fetchJobs() {
  try {
    const response = await fetch("http://127.0.0.1:8000/jobs", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
}

export async function fetchSkills() {
  try {
    const response = await fetch("http://127.0.0.1:8000/skills", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch skills");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}