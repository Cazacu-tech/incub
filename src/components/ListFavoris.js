import MovieFavori from './MoviesFavori';
import { useEffect, useState } from 'react';
import { findById } from "../data/moviesData";
import { useParams } from "react-router-dom";


const AfficheFilms = () => {

    const {id} = useParams()
    const [movies, setMovies]= useState();

    useEffect(()=>{
        setMovies(findById(id))
        console.log(id)
    },[id])
    if(!movies)return <div>chargement...</div>
    return  <div>
                <MovieFavori key={movies.id} {...movies}/>

            </div>
}

export default AfficheFilms;