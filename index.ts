import "dotenv/config"
import { runPrompt } from "./generate"
import { getPrompt } from "./internal/prompt"

export async function main() {
    const prompt = await getPrompt()
    const result = await runPrompt(prompt)
    console.log(result.output)
}


