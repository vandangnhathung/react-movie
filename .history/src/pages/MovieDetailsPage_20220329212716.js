import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";
import { AiOutlineFacebook } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";

import { BsFillPlayFill } from "react-icons/bs";

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
    genres,
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
          <button className="uppercase p-5 bg-primary text-white rounded-lg w-full flex justify-center items-center gap-2">
            <BsFillPlayFill className="inline-block text-4xl"></BsFillPlayFill>
            <span className="text-xl">watch film</span>
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
            <div className="inline-block text-white py-2 px-4 rounded-lg bg-[#3273dc] mb-10 cursor-pointer">
              <div className=" flex items-center gap-3">
                <ImFacebook2 className="text-lg  text-[white]"></ImFacebook2>
                <span>Share</span>
              </div>
            </div>
          </div>

          <div className="genres mb-24 flex items-center gap-4">
            {genres.length > 0 &&
              genres.map((item) => (
                <div
                  key={item.id}
                  className="py-1 px-2 rounded-2xl border border-white text-white"
                >
                  {item.name}
                </div>
              ))}
          </div>

          <div>
            <div className="flex gap-10 mb-5">
              <div className="text-base text-[#70767a] uppercase">
                <span>Opening day</span>
              </div>
              <div className="text-white text-base">
                <span>{release_date}</span>
              </div>
            </div>
          </div>

          <p className="text-[#B5B5B5] mb-10">{overview}</p>
          <MovieCredits></MovieCredits>
        </div>
      </div>
    </>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  console.log(data);
  return (
    <>
      <h4>Cast</h4>
      <div className="grid grid-cols-6 gap-3">
        {cast.length > 0 &&
          cast.map((item) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
                className="rounded-full w-full h-full"
              />
              <div>
                <span>Tên</span>
                <span>Tên trong phim</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieDetailsPage;
