import React from "react";

const MovieCard = (item) => {
  const { title, poster_path } = item;
  return (
    <div className="movie-card p-3 bg-[rgba(0,0,0,0.1)] rounded-lg text-white">
      <img
        src={item.poster_path}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl mb-3 font-bold">Spiderman: No way home</h3>
      <div className="flex items-center justify-between mb-8">
        <span className="opacity-50">2017</span>
        <span className="opacity-50">7.4</span>
      </div>
      <button className="w-full rounded-lg bg-primary text-white text-xl capitalize p-4">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
