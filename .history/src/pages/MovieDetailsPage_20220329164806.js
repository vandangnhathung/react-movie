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
  const {
    backdrop_path,
    poster_path,
    title,
    tagline,
    overview,
    vote_average,
    release_date,
  } = data;
  console.log(data);
  return (
    <>
      <div className="w-full h-[600px] relative mb-">
        <div className="absolute inset-0 bg-[rgba(2,13,24,0.75)]"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="relative z-10 page-container grid grid-cols-3 gap-8 bottom-[325px]">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="h-[600px] w-full object-cover mb-5"
          />
          <button className="uppercase p-5 bg-primary text-white rounded-lg w-full text-xl">
            Xem phim
          </button>
        </div>
        <div className="col-span-2">
          <div>
            <h2>{title}</h2>
            <span>{tagline}</span>
          </div>

          <div className="">
            <span>{vote_average}</span>
            <h5>Share</h5>
          </div>

          <div className="genres"></div>

          <div>
            <div>
              <div>
                <span>Opening day</span>
              </div>
              <div>{release_date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
