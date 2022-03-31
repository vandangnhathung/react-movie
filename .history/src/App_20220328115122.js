import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
