export async function fetchJobs() {
  try {
    const response = await fetch(
      "https://roleradar-backend.onrender.com/jobs",
      {
        cache: "no-store",
      }
    );

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
    const response = await fetch(
      "https://roleradar-backend.onrender.com/skills",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch skills");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}