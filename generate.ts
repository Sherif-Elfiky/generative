import { model } from "./internal/setup";
import { generateText } from "ai";

export async function runPrompt(prompt: string) {
  try {
    const result = await generateText({
      model,
      prompt,
    });
    return result;
  } catch (err) {
    console.error("err", err);
    throw err;
  }
}
