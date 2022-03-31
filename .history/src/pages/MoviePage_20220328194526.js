import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/poplar?api_key=b9073c46f6dfb2debb3162597cede1d5`,
    fetcher
  );
  return (
    <div className="py-10">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
