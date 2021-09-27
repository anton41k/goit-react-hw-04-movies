import { Link } from "react-router-dom";

const urlImg = "https://image.tmdb.org/t/p/w300";

export default function TrendingList(trending) {
  console.log(trending);
  return (
    <ul>
      {trending &&
        trending.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`${urlImg}${movie.poster_path}`} alt={movie.title} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
