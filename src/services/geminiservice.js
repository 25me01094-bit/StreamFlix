import Groq from "groq-sdk"
import movies from "../data/movie.json"

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
})
// async function listModels() {
//   const models = await groq.models.list()
//   console.log(models)
// }

// listModels()
export async function vibeSearch(query) {
    const select = movies.map(m=>(
        {
            id:m.id,
            genre:m.genre,
            title:m.title,
            plot:m.plot
        }
    ))
    const prompt = `
You are a movie recommendation AI.
User vibe: "${query}"
Here is the movie database:
${JSON.stringify(select)}
Return ONLY a JSON array like this:
[
 { "id": 1, "reason": "Matches the space and emotional theme" },
 { "id": 4, "reason": "Fits the relaxing adventure vibe" }
]
Choose the best 12 movies.
-Find the correct match using your immense intelligense
-If user wants some inappropriate things then tell to search another thing
-From my plot and genre details, your knowledege give the reason section well written and structured
-It isn't mandatory to always  provide 12 movies if you found close link then only return
-Don't give opposite genre thing like if user need "comedy" don't give "horror" movie 
`
    const response = await groq.chat.completions.create({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [
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