import React from "react";
import RealHome from "./components/RealHome"
import MovieShow from "./components/MovieShow"
import { Route, Routes } from "react-router-dom";
import VibeSearch from "./components/VibeSearch";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RealHome/>}/>
      <Route path="/vibesearch" element={<VibeSearch/>}/>
      <Route path="/movies" element={<MovieShow/>}/>
    </Routes>
  )
}
export default App;