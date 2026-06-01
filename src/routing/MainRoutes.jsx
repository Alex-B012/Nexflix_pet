import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "../data/router.data";

import Layout from "../components/layouts/Layout";
import App from "../pages/home/App";
import MovieDetails from "../pages/movie/MovieDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path={`/${ROUTERS.movie}/:id`} element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
