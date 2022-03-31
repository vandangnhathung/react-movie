import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
