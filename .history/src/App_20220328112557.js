import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/MovieList";
import Banner from "./components/banner/Banner";

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
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container mb-6">
        <h2 className="capitalize text-white font-medium text-2xl mb-5">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
