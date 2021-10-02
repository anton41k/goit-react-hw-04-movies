import { Link, useLocation } from "react-router-dom";
import css from "./HomePage.module.css";

const urlImg = "https://image.tmdb.org/t/p/w500";

export default function HomeView({ data, btnBack_text }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      {data &&
        data.map((movie) => (
          <>
            {movie.adult === false && movie.poster_path && (
              <li key={movie.id} className={css.movie_card}>
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
          </>
        ))}
    </ul>
  );
}
