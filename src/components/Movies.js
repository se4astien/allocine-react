import React from "react";
import Movie from "./Movie";

const Movies = props => {
  // console.log(props.movies);

  return (
    <ul className="movies">
      {props.movies.map(movie => {
        return <Movie key={movie.id} {...movie} />;
      })}
    </ul>
  );
};

export default Movies;
