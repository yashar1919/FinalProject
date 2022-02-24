import React from "react";

import Movie from "./Movie";

const Movies = ({movies, DeleteMovie, edit,selectRow}) => {
    return ( <div>
        {movies.map(movie=>(
        <Movie  key={movie.id}
                name={movie.name} 
                poster={movie.poster}
                description={movie.description}
                created={movie.created}
                DeleteMovie={()=> DeleteMovie(movie.id)} 
                editMovie ={event => edit(event,movie.id)}
                selectRow ={() => selectRow(movie.name,movie.poster,movie.description,movie.created)}
                ></Movie>           
         ))}
    </div> );
}
 
export default Movies;