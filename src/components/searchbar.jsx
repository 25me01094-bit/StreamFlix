import React, { useState } from "react"
import { vibeSearch } from "../services/geminiservice"
import movies from "../data/movie.json"

const SearchBar = ({ setResults }) => {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [inappropriate, setInappropriate]= useState(false)
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    

    const handleSearch = async () => {
        if (!query.trim()) return
        setLoading(true)
        try {
            const aiResponse = await vibeSearch(query, movies);
            if(aiResponse[0].id==0 && aiResponse[0].reason=="inappropriate"){
                setResults("INAPPROPRIATE");
                setLoading(false);
                setInappropriate(true)
                return;
            }
            const matchedMovies = aiResponse.map(match => {
                const movie = movies.find(m => m.id === match.id)
                return {
                    ...movie,
                    reason: match.reason
                }
            })
            setResults(matchedMovies)
        } catch (error) {
            console.error("Search failed:", error)
        }
        setLoading(false)
    }
    return (
        <div className="bg-gradient-to-b from-black via-slate-900 to-slate-900 text-white py-16 px-6 flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
                Find Movies by <span className="text-sky-400">Vibe</span>
            </h1>
            <p className="text-slate-400 text-center max-w-xl">
                Describe the kind of movie you want and discover something amazing.
            </p>
            <textarea
                placeholder="Example: A mind-bending space movie about time and love..."
                rows="3"
                value={query}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key == "Enter") handleSearch();
                }}
                className="w-full max-w-2xl p-4 rounded-xl bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-sky-400 resize-none"
            />
            <button
                onClick={handleSearch}
                className="bg-sky-500 px-8 py-3 rounded-xl font-semibold hover:bg-sky-400 transition shadow-lg shadow-sky-500/20"
            >
                {loading ? "Scanning library..." : "Search Movies"}
            </button>
            {!inappropriate && (<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {[
                    "Mind-bending sci-fi",
                    "Romantic rainy evening",
                    "Dark psychological thriller",
                    "Feel-good comedy",
                    "Space + emotions + time"
                ].map((vibe, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm cursor-pointer"
                        onClick={() => setQuery(vibe)}
                    >
                        {vibe}
                    </span>
                ))}
            </div>)}
        </div>
    )
}

export default SearchBar