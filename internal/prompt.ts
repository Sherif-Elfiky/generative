import { readFile } from "fs/promises";
import { join } from "path";

export async function getPrompt() {
  const resumePath = join(process.cwd(), "resume.txt");
  const resume = await readFile(resumePath, "utf-8");

  const prompt = `Here is my resume: ${resume}, your instructions are to suggest 5 improvements in 5 short bullet points.`;
  return prompt
}
