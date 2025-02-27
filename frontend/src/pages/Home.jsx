// import React , {useContext} from 'react'
// import '../index.css'
// import { MovieContext } from '../contexts/moviesContext'
// import Crousel from '../components/Crousel';
// import MovieRow from '../components/MovieRow';

// function Home() {
//   const { data } = useContext(MovieContext);

//   const i = Math.floor(Math.random() * 20)
//   console.log(i);

//   console.log(data[i])

//   return (
//     <>
//     {(data.length !== 0) && (<Crousel data={data[i]}/>)}
//     <div className='bg-[#121212] h-[80vh] w-screen text-white p-8'> 
//       <h1 className='w-full text-xl'>Today's Top pick for you</h1>
//       <div className="flex items-center mt-6 overflow-x-scroll scrollbar-hide">
//         <button onClick={()=> document.parentElement.scrollX-= 10}>left</button>
//         {data.map((movie) => {
//           return <MovieRow key={movie.id} movie={movie} />
//         })}
//         <button onClick={()=> document.parentElement.scrollX+= 10}>right</button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Home

import React, { useContext, useRef } from 'react';
import '../index.css';
import { MovieContext } from '../contexts/moviesContext';
import Crousel from '../components/Crousel';
import MovieRow from '../components/MovieRow';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const { data } = useContext(MovieContext);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const i = Math.floor(Math.random() * data.length);

  return (
    <>
      {data.length !== 0 && <Crousel data={data[i]} />}
      <div className="bg-[#121212] h-[80vh] w-screen text-white py-8 px-2">
        <h1 className="w-full text-xl">Today's Top Pick for You</h1>
        <div className="relative">
          {/* Left Scroll Button */}
          

          {/* Movie Row Container */}
          <div
            ref={scrollRef}
            className="flex items-center mt-6 overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            <button
            className="absolute left-0 z-10 p-2  h-full bg-[#242424a1] rounded hover:bg-[#242424d2] cursor-pointer"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
            {data.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
            <button
            className="absolute right-0 z-10 p-2 h-full bg-[#242424a1] rounded hover:bg-[#242424d2] cursor-pointer"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
          </div>

          {/* Right Scroll Button */}
          
        </div>
      </div>
    </>
  );
}

export default Home;
