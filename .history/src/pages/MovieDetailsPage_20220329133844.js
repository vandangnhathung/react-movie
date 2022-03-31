import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

const MovieDetailsPage = () => {
  const params = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}`,
    fetcher
  );
  return <div>qweqwewqe</div>;
};

export default MovieDetailsPage;
