import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import moviedata from "../data/movie.json";
import Card from "../assets/card";

const MovieShow = () => {
    const [search, setSearch] = useState("");
    const [activeGenres, setActiveGenres] = useState([]);
    const allGenres = [
        "All",
        ...new Set(moviedata.flatMap((movie) => movie.genre))
    ];
    const toggleGenre = (genre) => {
        if (genre === "All") {
            setActiveGenres([]);
            return;
        }
        setActiveGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };
    const filteredMovies = moviedata.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesGenre =
            activeGenres.length === 0 ||
            activeGenres.every((g) => item.genre.includes(g));

        return matchesSearch && matchesGenre;
    });
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="px-6 pt-10 pb-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Explore Movies
                </h1>
                <p className="text-slate-400 mt-3 text-lg">
                    Discover your next favorite film 🎬
                </p>
            </div>
            <div className="px-6 mb-8 flex flex-col items-center gap-6">
                <div className="w-full max-w-2xl relative">
                    <input
                        type="text"
                        placeholder="Search movies by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                    />
                    <span className="absolute right-4 top-3 text-slate-400">🔍</span>
                </div>
                <div className="relative w-full max-w-5xl">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
                    <div className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar px-8 py-2 scroll-smooth">
                        {allGenres.map((g) => {
                            const isActive =
                                g === "All"
                                    ? activeGenres.length === 0
                                    : activeGenres.includes(g);
                            return (
                                <button
                                    key={g}
                                    onClick={() => toggleGenre(g)}
                                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0
                                 ${isActive
                                            ? "bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-md scale-105"
                                            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                        }`}
                                >
                                    {g}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-slate-400 text-sm">
                        {activeGenres.length > 0
                            ? `Filters: ${activeGenres.join(", ")}`
                            : "All Genres"}
                    </p>
                    <p className="text-slate-400 text-lg">
                        Showing {filteredMovies.length} movies
                    </p>
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-b from-black/90 via-slate-900 to-slate-900 text-white px-6 flex flex-row flex-wrap items-center gap-14 justify-center">

                {filteredMovies.length > 0 ? (
                    filteredMovies.map((item) => (
                        <Card
                            key={item.id}
                            poster={item.poster}
                            title={item.title}
                            year={item.year}
                            rating={item.rating}
                            genre={item.genre}
                            plot={item.plot}
                            reason=""
                        />
                    ))
                ) : (
                    <p className="text-slate-400 text-lg mt-0 mb-52">
                        Sorry, No movies found !!
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MovieShow;