import React from "react";
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

  return (
    <>
      <div
        className="w-full h-[60vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailsPage;
