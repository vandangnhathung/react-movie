import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/poplar?api_key=b9073c46f6dfb2debb3162597cede1d5`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="py-10">
      <div className="grid grid-cols-4 gap-10"></div>
    </section>
  );
};

export default MoviePage;
