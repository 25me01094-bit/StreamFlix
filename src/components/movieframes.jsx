import React from "react";
import Card from "../assets/card";

const MovieFrame = ({ results }) => {
    if (results === "INAPPROPRIATE") {
        return (
            <div className="bg-slate-900 flex justify-center items-center min-h-[300px]">
                <p className="text-red-400 text-xl text-center mb-52 px-4">
                    🚫 Oops! That search seems inappropriate. <br />
                    Try something like <span className="text-sky-400">"feel-good comedy"</span> 
                </p>
            </div>
        );
    }
    if (!Array.isArray(results)) {
        return null; 
    }
    if (results.length === 0) {
        return (
            <div className="bg-slate-900 flex justify-center items-center min-h-[300px]">
                <p className="text-slate-400 text-xl px-4 items-center">
                    Search for a movie vibe to see results 🎬
                </p>
            </div>
        );
    }
    return (
        <div className="bg-slate-900 flex flex-wrap justify-center gap-10 p-4.5">
            {results.map((item) => (
                <Card
                    key={item.id}
                    poster={item.poster}
                    title={item.title}
                    year={item.year}
                    rating={item.rating}
                    genre={item.genre}
                    plot={item.plot}
                    reason={item.reason} />
            ))}
        </div>
    );
};

export default MovieFrame;