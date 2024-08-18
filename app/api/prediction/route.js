import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Ensure the JSON has the correct structure
    if (!body) {
      return new Response(JSON.stringify({ error: "No JSON body provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prompt = `Given a json, predict whether it would be a good idea to bet on the athlete.  \n\nUser: ${body}`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return new Response(
      JSON.stringify({ error: "Error communicating with OpenRouter" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
