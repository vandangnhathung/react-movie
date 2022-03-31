import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";
import { AiOutlineFacebook } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";

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
          <div className="text-white mb-8">
            <h2 className="text-5xl">{title}</h2>
            <span className="text-2xl opacity-60">{tagline}</span>
          </div>

          <div className="">
            <div className="flex gap-2 items-center mb-7">
              <span className="p-1 bg-[#ffc107] text-[#263238] font-bold rounded-lg">
                IMDb
              </span>
              <span className="text-white font-bold">{vote_average}</span>
            </div>
            <div className="inline-block text-white py-2 px-4 rounded-lg bg-[#3273dc] mb-10">
              <div className=" flex items-center gap-3">
                <ImFacebook2 className="text-lg  text-[white]"></ImFacebook2>
                <span>Share</span>
              </div>
            </div>
          </div>

          <div className="genres mb-24"></div>

          <div>
            <div className="flex gap-10">
              <div className="text-base text-[#70767a] uppercase">
                <span>Opening day</span>
              </div>
              <div className="text-white text-base">
                <span>{release_date}</span>
              </div>
            </div>
          </div>

          <p className="text-[#B5B5B5]">{overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
