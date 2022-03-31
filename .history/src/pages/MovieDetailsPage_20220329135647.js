import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("MovieDetailsPage data", data);

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={{
          background: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailsPage;
