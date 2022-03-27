import { Fragment, useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import MovieList from "./components/MovieList";
import { fetcher } from "./config/config";
function App() {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=<b9073c46f6dfb2debb3162597cede1d5",
    fetcher
  );
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(data.results);
  }, []);
  return (
    <Fragment>
      <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
        <span>TV Series</span>
        <span className="text-primary">Movies</span>
        <span>Anime</span>
      </header>
      <section className="banner h-[400px] page-container mb-20">
        <div className="w-full h-full relative rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] rounded-lg "></div>
          <img
            src="https://vtv1.mediacdn.vn/zoom/700_438/2019/4/9/infinitywar5aabd55fed5fa0-15547820181451161543995.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute text-white left-5 bottom-5 flex flex-col gap-7">
            <h2 className=" font-bold text-5xl capitalize">
              Avengers: Endgame
            </h2>
            <div className="flex items-center gap-x-4">
              <span className="px-4 py-3 border border-white border-opacity-40  rounded-lg">
                Action
              </span>
              <span className="px-4 py-3 border border-white border-opacity-40 rounded-lg">
                Adventure
              </span>
              <span className="px-4 py-3 border border-white border-opacity-40 rounded-lg">
                Drama
              </span>
            </div>
            <div>
              <button className="px-24 py-5 rounded-lg bg-primary text-white font-medium">
                Watch
              </button>
            </div>
          </div>
        </div>
      </section>

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
