const API_KEY = "3c0c6f3bdd3c759ed8811e0016d10e89";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchApiMovie(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not Found"));
}

export function fetchHome() {
  return fetchApiMovie(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetchMovie(query) {
  return fetchApiMovie(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchApiMovie(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCast(movieId) {
  return fetchApiMovie(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviews(movieId) {
  return fetchApiMovie(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
