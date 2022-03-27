import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
        <span>TV Series</span>
        <span className="text-primary">Movies</span>
        <span>Anime</span>
      </header>
      <section className="banner h-[400px] page-container mb-5">
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

      <section className="movies-layout page-container">
        <h2 className="capitalize text-white font-medium text-2xl mb-5">
          Now Playing
        </h2>
        <div className="card-list">
          <div className="card-item bg-[rgba(0,0,0,0.2)] h--[200px]"></div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
