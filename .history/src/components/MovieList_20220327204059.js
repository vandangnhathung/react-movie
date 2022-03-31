import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
const MovieList = ({ typed = "now_playing" }) => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b9073c46f6dfb2debb3162597cede1d5",
    fetcher
  );
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data) setMovies(data.results);
  }, [data]);
  //Nếu không để data bên trong dependency thì api sẽ load không kịp dẫn đến việc các components không được render
  console.log(movies);
  return (
    <div>
      <div className="movie-list">
        <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
