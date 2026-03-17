import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="relative top-0 z-50 backdrop-blur-md bg-black/70 border-b border-slate-800 text-white w-full px-6 py-4 flex items-center justify-between">
                <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"> StreamFlix</span>
                <ul className="hidden md:flex gap-8 items-center text-lg font-medium">
                    <li><Link to="/" className="hover:text-sky-400 transition">Home</Link></li>
                    <li><Link to="/movies" className="hover:text-sky-400 transition"> Movies</Link></li>
                    <li> <Link to="/vibesearch" className="hover:text-sky-400 transition"> Vibe Search</Link></li>
                </ul>
                <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </header>
            <div className={`md:hidden bg-slate-950 text-white relative overflow-hidden transition-all duration-500 ${open ? "max-h-96 py-6 border-b border-slate-800" : "max-h-0"}`}>
                <div className="flex flex-col items-center gap-6 text-lg">
                    <Link to="/" onClick={() => setOpen(false)} className="hover:text-sky-400">Home</Link>
                    <Link to="/movies" onClick={() => setOpen(false)} className="hover:text-sky-400">Movies</Link>
                    <Link to="/vibesearch" onClick={() => setOpen(false)} className="hover:text-sky-400">Vibe Search</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar