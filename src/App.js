import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
//import HomeView from "./views/HomeView";
//import MovieDetailsView from "./views/MovieDetailsView";
//import MoviesView from "./views/MoviesView";
//import NotFoundView from "./views/NotFoundView";

const HomeView = lazy(() => import("./views/HomeView.js"));
const MovieDetailsView = lazy(() => import("./views/MovieDetailsView.js"));
const MoviesView = lazy(() =>
  import("./views/MoviesView.js" /* webpackChunkName: "home-view" */)
);
const NotFoundView = lazy(() => import("./views/NotFoundView.js"));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
