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
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
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
