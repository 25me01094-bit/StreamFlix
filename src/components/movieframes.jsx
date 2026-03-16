import React from "react";
import Card from "../assets/card";

const MovieFrame = ({ results }) => {
    return (
        <div className="bg-slate-900 flex flex-wrap justify-center gap-10 p-4.5">
            {results.length === 0 ? (
                <p className="text-slate-400 text-xl">
                    Search for a movie vibe to see results 🎬
                </p>
            ) : (
                results.map((item) => (
                    <Card
                        key={item.id}
                        poster={item.poster}
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                        genre={item.genre}
                        plot={item.plot}
                        reason={item.reason}
                    />
                ))
            )}
        </div>
    );
};

export default MovieFrame;