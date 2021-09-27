import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import HomeView from "./views/HomeView";
import MovieDetailsView from "./views/MovieDetailsView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";

export default function App() {
  return (
    <Container>
      <AppBar />
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
      <ToastContainer />
    </Container>
  );
}
