import { readFile } from "fs/promises";
import { join } from "path";

export async function getPrompt() {
  const resumePath = join(process.cwd(), "resume.txt");
  const resume = await readFile(resumePath, "utf-8");

  const prompt = `Here is my resume: ${resume} [Your instructions here, e.g. "Summarize my experience" or "Suggest improvements."]`;
  return prompt
}
