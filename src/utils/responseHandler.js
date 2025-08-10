import hardcodedResponses from "../data/hardcodedResponses";
import { fetchGeminiResponse } from "../services/geminiService";

export async function generateResponse(userInput) {
  const lowerInput = userInput.toLowerCase();

for (const { pattern, response } of hardcodedResponses) {
    if (pattern.test(lowerInput)) {
      return response;
    }
  }

   // If no hardcoded pattern matches, call Gemini API
  const geminiReply = await fetchGeminiResponse(userInput);
  return geminiReply || "Sorry, I couldn’t understand that.";
}
