import { getJson } from "serpapi";

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const apiKey =
      "1c67dd0c2d7a8281617a256810af05e61cb5cc5d271513d5cc69055cee118a67"; // Ensure this is set in .env.local
    const response = await new Promise((resolve, reject) => {
      getJson(
        {
          engine: "google_images",
          q: query,
          ijn: "0",
          api_key: apiKey,
        },
        (json) => {
          if (json.error) {
            reject(json.error);
          } else {
            resolve(json.images_results);
          }
        }
      );
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
