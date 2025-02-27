// import { useContext, useState } from "react";
// import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
// import { MovieContext } from "../contexts/moviesContext";

// export default function MovieRow({ movie }) {
//   const [hoveredMovie, setHoveredMovie] = useState(null);

//   return (
//     <div className="text-white px-6">
//       {hoveredMovie !== movie.id ? (
//         <div
//           key={movie.id}
//           className="relative group w-[160px] md:w-[200px] transition-transform hover:cursor-pointer"
//           onMouseEnter={() => setHoveredMovie(movie.id)}
//         >
//           {/* Thumbnail */}
//           <img
//             src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
//             alt={movie.title}
//             className="w-[400px] h-[150px] rounded-md transition duration-300 group-hover:brightness-75"
//           />
//           <p className="absolute bottom-0 left-0 w-full p-2 bg-[#00000071]">{movie.title}</p>
//         </div>
//       ) : (
//         <div className="w-[300px] h-[300px] bg-black rounded-lg p-4 shadow-lg transition-opacity hover:cursor-pointer" onMouseLeave={()=> setHoveredMovie(null)}>
//           <img
//             src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
//             alt={movie.title}
//             className="w-full rounded-md mb-2"
//           />
//           <h1 className="text-lg font-bold">{movie.title}</h1>
//           <div className="flex items-center gap-3 mb-2">
//             <button className="p-2 bg-white text-black rounded-full hover:cursor-pointer"><Play size={20} /></button>
//             <button className="p-2 bg-gray-800 rounded-full hover:cursor-pointer"><Plus size={20} /></button>
//             <button className="p-2 bg-gray-800 rounded-full hover:cursor-pointer"><ThumbsUp size={20} /></button>
//             <button className="p-2 bg-gray-800 rounded-full ml-auto hover:cursor-pointer"><ChevronDown size={20} /></button>
//           </div>
//           <p className="text-sm text-gray-400">{movie.release_date}</p>
//           <p className="text-xs text-gray-500">{movie.genre_ids}</p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { MovieContext } from "../contexts/moviesContext";

export default function MovieRow({ movie }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <div className="text-white px-6">
      {hoveredMovie !== movie.id ? (
        <motion.div
          key={movie.id}
          className="relative group w-[160px] md:w-[200px] transition-transform hover:cursor-pointer"
          onMouseEnter={() => {setTimeout(()=>{
            setHoveredMovie(movie.id)},800)}}
          whileHover={{ scale: 1.1 }}
        >
          {/* Thumbnail */}
          <motion.img
            src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
            alt={movie.title}
            className="w-[400px] h-[150px] rounded-md transition duration-300 group-hover:brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-[#00000071]">{movie.title}</p>
        </motion.div>
      ) : (
        <motion.div
          className="w-[300px] h-[300px] bg-black rounded-lg p-4 shadow-lg transition-opacity hover:cursor-pointer"
          onMouseLeave={() => setHoveredMovie(null)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full rounded-md mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <h1 className="text-lg font-bold">{movie.title}</h1>
          <div className="flex items-center gap-3 mb-2">
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-white text-black rounded-full hover:cursor-pointer">
              <Play size={20} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-gray-800 rounded-full hover:cursor-pointer">
              <Plus size={20} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-gray-800 rounded-full hover:cursor-pointer">
              <ThumbsUp size={20} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-gray-800 rounded-full ml-auto hover:cursor-pointer">
              <ChevronDown size={20} />
            </motion.button>
          </div>
          <p className="text-sm text-gray-400">{movie.release_date}</p>
          <p className="text-xs text-gray-500">{movie.genre_ids.join(", ")}</p>
        </motion.div>
      )}
    </div>
  );
}
