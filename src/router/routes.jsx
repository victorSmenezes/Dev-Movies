import { Routes, Route } from 'react-router-dom';

import DetailMovies from '../containers/DetailMovies';
import DetailSeries from '../containers/DetailSeries';
import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe-filme/:id" element={<DetailMovies />} />
        <Route path="/detalhe-serie/:id" element={<DetailSeries />} />
      </Route>
    </Routes>
  );
}

export default Router;
