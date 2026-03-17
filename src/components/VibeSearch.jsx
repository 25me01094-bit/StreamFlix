import React, { useState, useRef } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import SearchBar from "./searchbar";
import MovieFrame from "./movieframes";
import movies from "../data/movie.json";

const VibeSearch = () => {
    const [results, setResults] = useState([]);

    const allGenres = [
        ...new Set(movies.flatMap((movie) => movie.genre))
    ];

    return (
        <div className="bg-black min-h-screen">
            <Navbar />

            <SearchBar setResults={setResults} />
            <MovieFrame results={results} />

            <div className="bg-gradient-to-b from-slate-900 to-black px-4 py-8">
                <h1 className="text-white text-2xl font-bold mb-6">
                    Popular Movies
                </h1>

                {allGenres.map((genre) => {
                    const scrollRef = useRef(null);

                    const scroll = (dir) => {
                        if (!scrollRef.current) return;

                        const amount = 400;

                        scrollRef.current.scrollBy({
                            left: dir === "left" ? -amount : amount,
                            behavior: "smooth",
                        });
                    };

                    return (
                        <div key={genre} className="mb-10 relative group">
                            <h2 className="text-white text-xl font-semibold mb-3 px-2">
                                {genre}
                            </h2>
                            <button
                                onClick={() => scroll("left")}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10  bg-black/60 hover:bg-black text-white p-2 rounded-full  opacity-0 group-hover:opacity-100 transition"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10  bg-black/60 hover:bg-black text-white p-2 rounded-full  opacity-0 group-hover:opacity-100 transition"
                            >
                                ▶
                            </button>
                            <div
                                ref={scrollRef}
                                className="flex gap-4 overflow-x-auto px-2 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                            >
                                {movies
                                    .filter((movie) => movie.genre.includes(genre))
                                    .map((movie) => (
                                        <div
                                            key={movie.id}
                                            className="min-w-[200px] md:min-w-[240px] snap-start group"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={movie.poster}
                                                    alt={movie.title}
                                                    className="w-full h-[320px] object-cover rounded-lg"
                                                />
                                                <div className="absolute inset-0 bg-black/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 p-3 flex flex-col justify-end rounded-lg">
                                                    <h3 className="text-white font-bold text-sm md:text-base">
                                                        {movie.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-xs">
                                                        {movie.year}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-1 line-clamp-3">
                                                        {movie.plot}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
};

export default VibeSearch;