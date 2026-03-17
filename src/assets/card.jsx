import React, { useState } from "react";

const Card = (props) => {
  const [open, setOpen] = useState(false);
  const toggleCard = () => {
    setOpen(!open);
  };
  return (
    <div onClick={toggleCard} className={`group relative w-80 h-[520px] bg-cover bg-center rounded-xl overflow-hidden shadow-lg shadow-sky-800/50 transition-all duration-500 
      md:hover:shadow-xl md:group-hover:scale-[1.03] ${open ? "scale-[1.02]" : ""}`}
      style={{ backgroundImage: `url(${props.poster})` }} >
      <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300
        md:opacity-0 md:group-hover:opacity-90
        ${open ? "opacity-90" : "opacity-0"}`} ></div>
      <div className={`absolute right-0 w-full bg-gradient-to-b from-black/80 to-transparent text-white text-center py-3 transition-transform duration-500
        md:-translate-x-full md:group-hover:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full md:-translate-x-full"}`} >
        <h1 className="text-xl font-bold tracking-wide px-1.5">{props.title}</h1>
      </div>
      <div className={`arc-overlay absolute bottom-0 w-full text-white p-5 flex flex-col justify-end gap-2 transition-opacity duration-700
        md:opacity-0 md:group-hover:opacity-100
        ${open ? "opacity-100" : "opacity-0 md:opacity-0"}`} >
        <p className="font-semibold text-yellow-400 px-2.5">⭐ {props.rating}</p>
        <p className="text-sm  opacity-80 text-sky-200 px-2.5" >{props.year}</p>
        <div className="px-2.5 flex flex-row gap-2.5 w-full">
          {props.genre.map((gen, index) => (
            <span key={index} className="text-sm opacity-90 text-sky-950 px-1.5 bg-sky-100 rounded-xl">{gen}</span>
          )
          )
          }</div>
        <div className="text-sm opacity-90 text-sky-100 px-1.5">{props.plot}</div>
        {props.reason && (
          <div className="mt-2 text-xs bg-sky-500/20 border border-sky-400/40 text-sky-200 px-2 py-1 rounded-md">
            💡 Why this? {props.reason}</div>)}
      </div>
    </div>
  );
};

export default Card;