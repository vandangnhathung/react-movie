import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=b9073c46f6dfb2debb3162597cede1d5`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="py-10">
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            placeholder="Type here to search..."
          />
        </div>
        <button></button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.map((item) => (
          <MovieCard key={item.id} item={item}></MovieCard>
        ))}
      </div>
    </section>
  );
};

export default MoviePage;
