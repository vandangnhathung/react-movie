import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path } = data;

  return (
    <>
      <div className="w-full h-[600px] relative mb-">
        <div className="absolute inset-0 bg-[rgba(2,13,24,0.75)]"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        ></div>
      </div>
      <div className="relative z-10 page-container grid grid-cols-3 gap-8">
        <div className="">
          <img src="" alt="" className="" />
          <button></button>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
