import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieShelAPI from "../servises/movie-api";

import "react-toastify/dist/ReactToastify.css";
import MovieDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    movieShelAPI
      .fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((error) => {
        toast.error(error.message);
        setIsError(true);
      });
  }, [isError, movieId]);

  return (
    <>
      <Link to="/">Go Back</Link>
      <MovieDetailsPage isError={isError} movie={movie} />
    </>
  );
}
