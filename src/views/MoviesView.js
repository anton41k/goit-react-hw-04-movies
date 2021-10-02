import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";
import * as movieShelAPI from "../servises/movie-api";

import "react-toastify/dist/ReactToastify.css";

import MoviesPage from "../components/MoviesPage/MoviesPage";
import HomePage from "../components/HomePage/HomePage";
//import css from "./Movies.module.css";

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("query") ?? "";
  const [dataQuery, setDataQuery] = useState([]);

  const onChangeQuery = (query) => {
    if (query === "") {
      toast.error("Enter a search query!");
      setDataQuery([]);
    }
    history.push({
      ...location,
      search: `query=${query.trim()}`,
    });
  };

  useEffect(() => {
    console.log(1);
    setDataQuery([]);
  }, [search]);

  useEffect(() => {
    if (search && search !== "") {
      movieShelAPI
        .fetchMovie(search)
        .then(({ results, total_pages }) => {
          setDataQuery(results);
          if (dataQuery.length === 0 && total_pages === 0) {
            toast.error("Not Found!");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [dataQuery.length, search]);

  return (
    <>
      <MoviesPage onSubmit={onChangeQuery} />
      {search !== dataQuery && (
        <HomePage
          key={"2hgf51616"}
          data={dataQuery}
          btnBack_text={"Back to search"}
        />
      )}
    </>
  );
}
