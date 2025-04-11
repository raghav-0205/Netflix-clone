import React, { useContext, useRef } from "react";
import "../index.css";
import { MovieContext } from "../contexts/moviesContext";
import Crousel from "../components/Crousel";
import MovieRow from "../components/MovieRow";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  const { data, Top_rated, Upcoming, Now_playing } = useContext(MovieContext);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const i = Math.floor(Math.random() * data.length);

  return (
    <>
      {data.length !== 0 && <Crousel data={data[i]} />}
      <div className="bg-gradient-to-b from-[#101010] via-[#121212] to-[#121212] h-auto w-screen text-white py-8 px-4">
        <div className="mb-8">
          <h1 className="w-full text-xl mb-1">Today's Top Pick for You</h1>
          <div className="relative">
            <MovieRow data={data} />
          </div>
        </div>
        <div className="mb-8">
          <h1 className="w-full text-xl mb-1">Top Rated movies on Netflix</h1>
          <div className="relative">
            <MovieRow data={Top_rated} />
          </div>
        </div>
        <div className="mb-8">
          <h1 className="w-full text-xl mb-1">Upcoming movies on Netflix</h1>
          <div className="relative">
            <MovieRow data={Upcoming} />
          </div>
        </div>
        <div className="mb-8">
          <h1 className="w-full text-xl mb-1">You may also like this</h1>
          <div className="relative">
            <MovieRow data={Now_playing} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
