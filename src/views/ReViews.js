import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieShelAPI from "../servises/movie-api";

import "react-toastify/dist/ReactToastify.css";
import ReviewsPage from "../components/Reviews/Reviews";

export default function Reiews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    movieShelAPI
      .fetchReviews(movieId)
      .then(setReviews)
      .catch((error) => {
        toast.error(error.message);
        setIsError(true);
      });
  }, [isError, movieId]);

  console.log(reviews, [isError].length);
  return <ReviewsPage isError={isError} reviews={reviews} />;
}
