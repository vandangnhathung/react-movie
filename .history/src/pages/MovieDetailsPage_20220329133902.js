import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";

const MovieDetailsPage = () => {
  const params = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  return <div>qweqwewqe</div>;
};

export default MovieDetailsPage;
