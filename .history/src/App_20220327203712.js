import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
        <span>TV Series</span>
        <span className="text-primary">Movies</span>
        <span>Anime</span>
      </header>
      <Banner></Banner>

      <section className="movies-layout page-container mb-6">
        <h2 className="capitalize text-white font-medium text-2xl mb-5">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container mb-6">
        <h2 className="capitalize text-white font-medium text-2xl mb-5">
          Top Rated Movie
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card p-3 bg-[rgba(0,0,0,0.1)] rounded-lg text-white">
            <img
              src="https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2021_11_28/maxresdefault_30__bela.jpg"
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
        </div>
      </section>
    </Fragment>
  );
}

export default App;
