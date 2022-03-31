import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route>
          <HomePage></HomePage>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
