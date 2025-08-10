const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function fetchGeminiResponse(prompt) {
  if (!API_KEY) {
    console.error("❌ Gemini API key is missing.");
    return "Sorry, the bot is currently not configured properly.";
  }


  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const result = await response.json();
    console.log("🌐 Gemini API raw response:", result);

    const finalResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    return finalResponse || "Sorry, I couldn’t understand that.";
  } catch (error) {
    console.error("🚨 Gemini API fetch error:", error);
    return "Sorry, I couldn’t fetch a response due to a network or system issue.";
  }
}
