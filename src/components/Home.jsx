import React, { useState } from "react";
import Footer from "./footer"
import Navbar from "./navbar";
import SearchBar from "./searchbar";
import MovieFrame from "./movieframes";
const Home=()=>{
    const [results,setResults]=useState([]);
    return(
        <div className="bg-black min-h-screen">
            <Navbar/>
            <SearchBar setResults={setResults}/>
            <MovieFrame results={results}/>
            <Footer/>
        </div>
    )
}
export default Home;