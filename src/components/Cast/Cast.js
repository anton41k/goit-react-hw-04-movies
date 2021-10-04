import { Fragment } from "react";
import css from "./Cast.module.css";

const urlImg = "https://image.tmdb.org/t/p/w200";

export default function Cast({ cast, isError }) {
  return (
    <>
      <hr />
      <ul className={css.cast_list}>
        {cast && !isError && cast.cast.length
          ? cast.cast.map((data) => (
              <Fragment key={data.id}>
                {data.profile_path && (
                  <li className={css.cast_item}>
                    <>
                      <img
                        className={css.cast_img}
                        src={`${urlImg}${data.profile_path}`}
                        alt={data.original_name}
                        width="100"
                      />
                      <p className={css.cast_name}>{data.original_name}</p>
                    </>
                  </li>
                )}
              </Fragment>
            ))
          : cast && (
              <li>
                <p>Not Found</p>
              </li>
            )}
      </ul>
    </>
  );
}
