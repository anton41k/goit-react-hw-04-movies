import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieShelAPI from "../servises/movie-api";

import "react-toastify/dist/ReactToastify.css";
import Cast from "../components/Cast/Cast";

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    movieShelAPI
      .fetchCast(movieId)
      .then(setCast)
      .catch((error) => {
        toast.error(error.message);
        setIsError(true);
      });
  }, [isError, movieId]);

  console.log(cast, isError);
  return <Cast cast={cast} isError={isError} />;
}
