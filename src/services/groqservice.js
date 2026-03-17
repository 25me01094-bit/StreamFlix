import Groq from "groq-sdk"
import movies from "../data/movie.json"

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
})
export async function vibeSearch(query) {
    const select = movies.map(m => (
        {
            id: m.id,
            genre: m.genre,
            title: m.title,
            plot: m.plot
        }
    ))
    const prompt = `
You are a strict movie recommendation AI.
User vibe: "${query}"
Movie database:
${JSON.stringify(select)}
 RULES (VERY IMPORTANT - MUST FOLLOW):
1. If the user's query contains:
   - adult/sexual content
   - pornographic intent
   - terrorism/violence/extremism
   - illegal or harmful intent
 Then you MUST return ONLY this exact JSON:
[
  { "id": 0, "reason": "inappropriate" }
]
2. DO NOT return anything else in that case.
3. Otherwise:
- Return a JSON array of movie matches
- Max 12 movies
- Each item:
  { "id": number, "reason": string }
4. DO NOT include any explanation outside JSON.
5. Be strict. Do NOT mix both cases.
`;
    const response = await groq.chat.completions.create({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [
            {
                role:"system",
                content:"You are a strict JSON-only API. Always follow rules exactly."
            },
            {
                role: "user",
                content: prompt
            }
        ]
    })
    const text = response.choices[0].message.content
    try {
        const jsonMatch = text.match(/\[[\s\S]*\]/)
        if (!jsonMatch) throw new Error("No JSON found")
        const data = JSON.parse(jsonMatch[0])
        console.log(data)
        return data
    } catch {
        console.error("Invalid JSON from AI")
        return []
    }
}