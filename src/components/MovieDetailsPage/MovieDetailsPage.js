import { NavLink, Route, useRouteMatch } from "react-router-dom";
import uuid from "react-uuid";
import NotFoundView from "../../views/NotFoundView";
import CastView from "../../views/CastView";
import Reviews from "../../views/ReViews";

import css from "./MovieDetailsPage.module.css";

const urlImg = "https://image.tmdb.org/t/p/w500";

export default function MovieDetailsPage({ isError, movie }) {
  const { url, path } = useRouteMatch();
  const infoId = () => uuid();
  return (
    <>
      {isError && <NotFoundView />}
      {movie && (
        <div>
          <img
            className={css.container_movie}
            src={`${urlImg}${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div>
            <h2>{movie.title}</h2>
            <ul>
              <li key={infoId()}>
                <span>Vote / Votes</span>
                <span>{`${movie.vote_average} / ${movie.vote_count}`}</span>
              </li>
              <li key={infoId()}>
                <span>Popularity</span>
                <span>{movie.popularity}</span>
              </li>
              <li key={infoId()}>
                <span>Original Title</span>
                <span>{movie.original_title}</span>
              </li>
              <li key={infoId()}>
                <span>Genre</span>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <li key={infoId()}>{genre.name}</li>
                    ))}
                </ul>
              </li>
              <li key={infoId()}>
                <NavLink to={`${url}/credits`}>Cast:</NavLink>
              </li>
              <li key={infoId()}>
                <NavLink to={`${url}/reviews`}>Reviews:</NavLink>
              </li>
              <li key={infoId()}>
                <span>ABOUT</span>
                <span>{movie.overview}</span>
              </li>
            </ul>
            <Route path={`${path}/credits`}>
              <CastView />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </div>
        </div>
      )}
    </>
  );
}
