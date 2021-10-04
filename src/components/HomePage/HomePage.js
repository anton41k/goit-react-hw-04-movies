import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./HomePage.module.css";

const urlImg = "https://image.tmdb.org/t/p/w500";

export default function HomeView({ data, btnBack_text }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      {data &&
        data.map((movie) => (
          <Fragment key={movie.id}>
            {!movie.adult === false && movie.poster_path && (
              <li className={css.movie_card}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: {
                        location,
                        label: { btnBack_text },
                      },
                    },
                  }}
                >
                  <img
                    src={`${urlImg}${movie.poster_path}`}
                    alt={movie.title}
                    className={css.movie_img}
                  />
                </Link>
              </li>
            )}
          </Fragment>
        ))}
    </ul>
  );
}
