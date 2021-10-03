import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
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
        <div className={css.container_info}>
          <img
            className={css.img_movie}
            src={`${urlImg}${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div>
            <h2 className={css.info_title}>{movie.title}</h2>
            <hr />
            <ul className={css.info_list}>
              <li key={infoId()} className={css.info_item}>
                <span className={css.info_name}>Vote / Votes</span>
                <span
                  className={css.info_gescr}
                >{`${movie.vote_average} / ${movie.vote_count}`}</span>
              </li>
              <li key={infoId()} className={css.info_item}>
                <span className={css.info_name}>Popularity</span>
                <span className={css.info_gescr}>{movie.popularity}</span>
              </li>
              <li key={infoId()} className={css.info_item}>
                <span className={css.info_name}>Original Title</span>
                <span className={css.info_gescr}>{movie.original_title}</span>
              </li>
              <li key={infoId()} className={css.info_item}>
                <span className={css.info_name}>Genre</span>
                <div className={css.genre_list}>
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <span
                        key={infoId()}
                        className={`${css.info_gescr} ${css.genre_item}`}
                      >{`${genre.name}, `}</span>
                    ))}
                </div>
              </li>
              <li key={infoId()}>
                <hr />
                <span className={css.info_plus}>
                  <NavLink
                    to={`${url}/credits`}
                    className={css.info_navLink}
                    activeClassName={css.info_navLink_active}
                  >
                    Cast
                  </NavLink>
                </span>
                <span className={css.info_plus}>
                  <NavLink
                    to={`${url}/reviews`}
                    className={css.info_navLink}
                    activeClassName={css.info_navLink_active}
                  >
                    Reviews
                  </NavLink>
                </span>
                <hr />
              </li>
              <li key={infoId()} className={css.item_about}>
                {movie.overview && (
                  <>
                    <p className={css.info_about}>ABOUT</p>
                    <p className={css.info_about_gescr}>{movie.overview}</p>
                  </>
                )}
              </li>
            </ul>
            <Switch>
              <Route path={`${path}/credits`}>
                <CastView />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}
