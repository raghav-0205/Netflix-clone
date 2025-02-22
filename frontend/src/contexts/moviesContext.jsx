import React, { createContext, useState , useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await axios.get('http://localhost:3000/movies')
        console.log(response.data.results)
        setData(response.data.results);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, [])


  return (
    <MovieContext.Provider value={{ data, setData }}>
      {children}
    </MovieContext.Provider>
  );
};