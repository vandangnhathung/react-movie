import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
