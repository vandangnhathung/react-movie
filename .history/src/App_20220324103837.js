import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
        <span>TV Series</span>
        <span className="text-primary">Movies</span>
        <span>Anime</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full relative rounded-lg">
          <img
            src="https://vtv1.mediacdn.vn/zoom/700_438/2019/4/9/infinitywar5aabd55fed5fa0-15547820181451161543995.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute text-white left-5 bottom-5 flex flex-col gap-7">
            <h2 className=" font-bold text-3xl capitalize">
              Avengers: Endgame
            </h2>
            <div>
              <span className="px-4 py-3 border border-white rounded-lg">
                Action
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;