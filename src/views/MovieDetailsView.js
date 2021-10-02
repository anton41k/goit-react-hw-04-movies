import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieShelAPI from "../servises/movie-api";

import "react-toastify/dist/ReactToastify.css";
import MovieDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";
import css from "../components/MoviesPage/MoviesPage.module.css";

export default function MovieDetailsView() {
  const history = useHistory();
  const location = useLocation();
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

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };
  console.log(location?.state?.from);
  return (
    <>
      <button type="button" onClick={onGoBack} className={css.button}>
        {location?.state?.from?.label?.btnBack_text ?? "Go Back"}
      </button>
      <MovieDetailsPage isError={isError} movie={movie} />
    </>
  );
}
