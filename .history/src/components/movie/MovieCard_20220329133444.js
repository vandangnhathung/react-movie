import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, poster_path, vote_average, release_date, id } = item;
  return (
    <div className="flex flex-col movie-card p-3 bg-[rgba(0,0,0,0.1)] rounded-lg text-white h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl mb-3 font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-8">
          <span className="opacity-50">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="opacity-50">{vote_average}</span>
        </div>
        <button
          onClick={() => {}}
          className="w-full rounded-lg bg-primary text-white text-xl capitalize p-4 mt-auto"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
