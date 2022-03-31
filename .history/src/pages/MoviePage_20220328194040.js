import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  return (
    <div>
      <MovieList type="latest"></MovieList>
    </div>
  );
};

export default MoviePage;
