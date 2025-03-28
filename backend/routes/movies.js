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

const url2= 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

async function fetchTopRated(){
    const response = await axios.get(url2, {headers: headers});
    const data = response.data;
    return data;
}

const url3= 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

async function fetchUpcoming(){
    const response = await axios.get(url3, {headers: headers});
    const data = response.data;
    return data;
}

const url4= 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

async function fetchNow(){
    const response = await axios.get(url4, {headers: headers});
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

movies.get("/top_rated", async (req, res) => {
    try {
        const data = await fetchTopRated()
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" , error: error});
    }
});

movies.get("/Upcoming", async (req, res) => {
    try {
        const data = await fetchUpcoming()
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" , error: error});
    }
});

movies.get("/Now_playing", async (req, res) => {
    try {
        const data = await fetchNow()
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" , error: error});
    }
});



export default movies;