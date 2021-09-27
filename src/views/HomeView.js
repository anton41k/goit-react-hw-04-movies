import { useState, useEffect } from "react";
import * as movieShelAPI from "../servises/movie-api";
import HomePage from "../components/HomePage/HomePage";

export default function HomeView() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    movieShelAPI.fetchHome().then(({ results }) => setTrending(results));
  }, [setTrending]);

  console.log("trending ", trending);
  return <HomePage data={trending} />;
}
