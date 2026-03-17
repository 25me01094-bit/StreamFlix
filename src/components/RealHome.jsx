import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import { FaMagic, FaRobot, FaBolt, FaLaptop, FaMobileAlt, FaClipboard, FaFilm } from "react-icons/fa";

const RealHome = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <section className="text-center px-6 py-20 bg-gradient-to-b from-black via-slate-900 to-black">
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    StreamFlix
                </h1>
                <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                    Discover movies not by name… but by how you feel.
                </p>
                <Link to="/vibesearch">
                    <button className="mt-8 px-8 py-3 bg-sky-500 rounded-xl font-semibold hover:bg-sky-400 transition shadow-lg shadow-sky-500/20">
                        Try Vibe Search !!
                    </button>
                </Link>
            </section>
            <section className="px-6 py-16 bg-slate-900">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why StreamFlix?
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="bg-slate-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <FaMagic className="text-sky-400 text-2xl" />
                            <h3 className="text-xl font-bold">Vibe-Based Search</h3>
                        </div>
                        <p className="text-slate-400">
                            Describe your mood like “dark thriller with twists”
                            and get AI-curated movie results instantly.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <FaRobot className="text-purple-400 text-2xl" />
                            <h3 className="text-xl font-bold">Smart Recommendations</h3>
                        </div>
                        <p className="text-slate-400">
                            Each movie comes with a reason why it matches your vibe.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <FaBolt className="text-pink-400 text-2xl" />
                            <h3 className="text-xl font-bold">Fast & Interactive</h3>
                        </div>
                        <p className="text-slate-400">
                            Smooth UI, instant filtering, and seamless browsing experience.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-6 py-16 bg-black">
                <h2 className="text-3xl font-bold text-center mb-12">
                    How to Use Vibe Search
                </h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="bg-slate-900 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FaLaptop className="text-sky-400 text-2xl" />
                            <h3 className="text-xl font-bold">On PC</h3>
                        </div>
                        <ul className="text-slate-400 space-y-3 list-disc list-inside">
                            <li>Type your vibe in the search box</li>
                            <li>Press <span className="text-white font-semibold">Enter</span> or click search</li>
                            <li>Hover on cards to explore details</li>
                            <li>Use genre sliders for discovery</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FaMobileAlt className="text-purple-400 text-2xl" />
                            <h3 className="text-xl font-bold">On Mobile</h3>
                        </div>
                        <ul className="text-slate-400 space-y-3 list-disc list-inside">
                            <li>Tap and describe your mood</li>
                            <li>Press search button (Enter may submit early)</li>
                            <li>Tap cards to reveal details</li>
                            <li>Swipe horizontally to explore genres</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="text-center px-6 py-20 bg-black">
                <h2 className="text-3xl font-bold mb-6">
                    Ready to explore?
                </h2>
                <Link to="/movies">
                    <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-xl font-semibold hover:scale-105 transition">
                        Start Searching 
                    </button>
                </Link>
            </section>
            <Footer />
        </div>
    );
};

export default RealHome;