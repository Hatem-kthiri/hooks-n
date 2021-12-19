import React from 'react';
import MovieCard from '../movieCard/MovieCard';


const MovieList = ({movieData}) => {
  return (
    <div>
      {movieData.map((elt) =>{ return <MovieCard key={elt.id} Movie={elt}/> })}
    </div>
  )
}

export default MovieList