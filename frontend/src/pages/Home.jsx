import React , {useContext} from 'react'
import '../index.css'
import { MovieContext } from '../contexts/moviesContext'
import Crousel from '../components/Crousel';
import MovieRow from '../components/MovieRow';

function Home() {
  const { data } = useContext(MovieContext);

  const i = Math.floor(Math.random() * 20)
  console.log(i);

  console.log(data[i])

  return (
    <>
    {(data.length !== 0) && (<Crousel data={data[i]}/>)}
    <div className='bg-[#121212] h-[80vh] w-screen text-white p-8'> 
      <h1 className='w-full text-xl'>Today's Top pick for you</h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        <button onClick={()=> document.parentElement.scrollX-= 10}>left</button>
        {data.map((movie) => {
          return <MovieRow key={movie.id} movie={movie} />
        })}
        <button onClick={()=> document.parentElement.scrollX+= 10}>right</button>
      </div>
    </div>
    </>
  )
}

export default Home
