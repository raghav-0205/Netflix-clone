import { useContext, useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { MovieContext } from "../contexts/moviesContext";

export default function MovieRow({ movie }) {
  const [hoveredMovie, setHoveredMovie] = useState(false);
//   const {data, setData} = useContext(MovieContext);

  return (
    <div className="text-white px-6 ">
          {hoveredMovie !== movie.id ? (<div
            key={movie.id}
            className="relative group w-[160px] md:w-[200px] transition-transform hover:cursor-pointer"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(true)}
            relative
          >
            {/* Thumbnail */}
            <img
              src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
              alt={movie.title}
              className="w-[400px] h-[150px] rounded-md  transition duration-300 group-hover:brightness-75"
            />
            <p className="absoute bottom-50 left-0 w-full p-2 bg-[#00000071]">{movie.title}</p>
            </div>)
:
            (
              <div className=" w-[250px] bg-black rounded-lg p-4 shadow-lg transition-opacity hover:cursor-pointer">
                <img
                  src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full rounded-md mb-2"
                />
                <div className="flex items-center gap-3 mb-2">
                  <button className="p-2 bg-white text-black rounded-full"><Play size={20} /></button>
                  <button className="p-2 bg-gray-800 rounded-full"><Plus size={20} /></button>
                  <button className="p-2 bg-gray-800 rounded-full"><ThumbsUp size={20} /></button>
                  <button className="p-2 bg-gray-800 rounded-full ml-auto"><ChevronDown size={20} /></button>
                </div>
                <p className="text-sm text-gray-400">{movie.rating} • {movie.duration} • HD</p>
                <p className="text-xs text-gray-500">{movie.genres}</p>
              </div>
            )}
          
      </div>
  );
}
