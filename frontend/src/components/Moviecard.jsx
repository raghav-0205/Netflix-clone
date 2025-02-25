import React, { useContext } from "react";



const MovieCard = ({movie}) => {

  // console.log(movie);
  return (
    <div className="relative w-52 h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105">
      <img
        src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}        
        alt= "img"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 hover:bg-[#00000056] transition-colors flex items-end ">
        <h3 className="text-white text-center text-lg bg-[#000000a2] w-full font-semibold p-2">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
