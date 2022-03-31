import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=b9073c46f6dfb2debb3162597cede1d5$page=${nextPage}`
  );
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const { page, total_results } = data;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=b9073c46f6dfb2debb3162597cede1d5&query='${filterDebounce}&page=${nextPage}'`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=b9073c46f6dfb2debb3162597cede1d5`
      );
    }
  }, [filterDebounce]);

  useEffect(() => {
    if (!data && total_results) return;
    setPageCount(Math.ceil(total_results / itemsPerPage));
  }, [data, itemOffset, total_results]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % total_results;
    setItemOffset(newOffset);
    setNextPage(nextPage + 1);
  };

  return (
    <section className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-[rgba(0,0,0,0.2)] outline-none text-white"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.map((item) => (
          <MovieCard key={item.id} item={item}></MovieCard>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="text-white flex gap-2 justify-center mt-10 pagination"
      />
    </section>
  );
};

export default MoviePage;
