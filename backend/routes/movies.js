import { Router } from "express";
import db from "../db.js";
import axios from "axios";

const movies = Router();


const url= 'https://api.themoviedb.org/3/movie/popular?language=en-US'
const headers= {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzYwZDVlNGVlMmMzMjZmNzJmM2NkOTEzMDFlYjc4MiIsIm5iZiI6MTc0MDExNjgwMy4zMTYsInN1YiI6IjY3YjgxMzQzNzQzNDIwMGMyODIyNWU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIkAZTBJEgdIRScdVsncRWzTkxSAeR87VYkMDH1Q58Y'
}


async function fetchAPI(){
    const response = await axios.get(url, {headers: headers});
    const data = response.data;
    return data;
}


movies.get("/", async (req, res) => {
    try {
        const data = await fetchAPI()
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" , error: error});
    }
});


export default movies;