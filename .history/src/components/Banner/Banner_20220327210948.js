import React from "react";

const Banner = () => {
  return <section className="banner h-[400px] page-container mb-20"></section>;
};

function bannerItem() {
  return (
    <div className="w-full h-full relative rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] rounded-lg "></div>
      <img
        src="https://vtv1.mediacdn.vn/zoom/700_438/2019/4/9/infinitywar5aabd55fed5fa0-15547820181451161543995.jpg"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute text-white left-5 bottom-5 flex flex-col gap-7">
        <h2 className=" font-bold text-5xl capitalize">Avengers: Endgame</h2>
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
  );
}

export default Banner;
