import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("MovieDetailsPage data", data);

  return (
    <Fragment>
      <div className="w-full"></div>
    </Fragment>
  );
};

export default MovieDetailsPage;
