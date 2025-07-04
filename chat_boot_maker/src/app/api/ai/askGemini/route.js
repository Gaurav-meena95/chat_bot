import { createPrompt } from "../../helper";

export async function POST(req) {
  try {
    const { text, context } = await req.json();
    const prompt = createPrompt({ text, context });
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    return new Response(JSON.stringify({ response: data }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
