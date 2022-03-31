import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";

function App() {
  return (
    <Fragment>
      <Header></Header>
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
