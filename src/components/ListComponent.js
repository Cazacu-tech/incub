import Movie from './Movies';
import { films } from './../data/moviesData';
import { useEffect, useState } from 'react';

const AfficheFilms = () => {
    const [movies, setMovies]= useState();

    useEffect(()=>{
        setMovies(films)
    },[])
    if(!movies)return <div>chargement...</div>
    return  <>
                <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Films</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {movies.map((film)=>(
                        <Movie key={film.id} {...film}/>
                    ))}
                </div>

            </>

}

export default AfficheFilms;