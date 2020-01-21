import React from "react";

const Movie = props => {
  return (
    <li>
      <div className="movie">
        <div className="picture">
          <img
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${props.poster_path}`}
            alt={props.title}
            width="200"
            height="250"
          />
        </div>
        <div className="infos">
          <h2>{props.title}</h2>
          <span>{props.release_date}</span>
          <p>{props.overview}</p>
        </div>
      </div>
    </li>
  );
};
export default Movie;
