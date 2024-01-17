import api from './api';

export async function getMovies() {
  try {
    const {
      data: { results }
    } = await api.get('movie/popular');

    return results[0];
  } catch (error) {
    console.error('Rota: "movie/popular" - Erro ao buscar os filmes: ', error);
  }
}

export async function getNowPlayingMovies() {
  try {
    const {
      data: { results }
    } = await api.get('movie/now_playing');

    return results;
  } catch (error) {
    console.error('Rota: "movie/now_playing" - Erro ao buscar filmes: ', error);
  }
}

export async function getTopMovies() {
  try {
    const {
      data: { results }
    } = await api.get('movie/top_rated');

    return results;
  } catch (error) {
    console.error(
      'Rota: "movie/top_rated" - Erro ao buscar os top filmes: ',
      error
    );
  }
}

export async function getMoviesUpcoming() {
  try {
    const {
      data: { results }
    } = await api.get('movie/upcoming');

    return results;
  } catch (error) {
    console.error(
      'Rota: "movie/upcoming" - Erro ao buscar os filmes "vindo ai"": ',
      error
    );
  }
}

export async function getAiringTodaySeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/airing_today');

    return results;
  } catch (error) {
    console.error('Rota: "/tv/airing_today" - Erro ao buscar séries: ', error);
  }
}

export async function getTopSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/top_rated');

    return results;
  } catch (error) {
    console.error(
      'Rota: "/tv/top_rated" - Erro ao buscar as top séries: ',
      error
    );
  }
}

export async function getPopularSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/popular');

    return results;
  } catch (error) {
    console.error(
      'Rota: "/tv/popular" - Erro ao buscar as séries populares: ',
      error
    );
  }
}

export async function getSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/popular');

    return results[0];
  } catch (error) {
    console.error(
      'Rota: "/tv/popular" - Erro ao buscar as séries populares: ',
      error
    );
  }
}

export async function getTopPeople() {
  try {
    const {
      data: { results }
    } = await api.get('/person/popular');

    return results;
  } catch (error) {
    console.error(
      'Rota: "/person/popular" - Erro ao buscar atores populares: ',
      error
    );
  }
}

export async function getMovieVideos(movieId) {
  try {
    const {
      data: { results }
    } = await api.get(`movie/${movieId}/videos`);

    return results;
  } catch (error) {
    console.error(
      'Rota: "movie/:Id/videos" - Erro ao buscar os trailers: ',
      error
    );
  }
}

export async function getMovieCredits(movieId) {
  try {
    const {
      data: { cast }
    } = await api.get(`movie/${movieId}/credits`);

    return cast;
  } catch (error) {
    console.error('Rota: "movie/:Id/credits" - Erro ao buscar elenco: ', error);
  }
}

export async function getMovieSimilar(movieId) {
  try {
    const {
      data: { results }
    } = await api.get(`movie/${movieId}/similar`);

    return results;
  } catch (error) {
    console.error(
      'Rota: "movie/:Id/similar" - Erro ao buscar filmes similares: ',
      error
    );
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await api.get(`movie/${movieId}`);

    return data;
  } catch (error) {
    console.error('Rota: "movie/:Id" - Erro ao buscar filme: ', error);
  }
}

export async function getSeriesById(serieId) {
  try {
    const { data } = await api.get(`tv/${serieId}`);

    return data;
  } catch (error) {
    console.error('Rota: "tv/:Id" - Erro ao buscar serie: ', error);
  }
}

export async function getSerieVideos(serieId) {
  try {
    const {
      data: { results }
    } = await api.get(`tv/${serieId}/videos`);

    return results;
  } catch (error) {
    console.error(
      'Rota: "tv/:Id/videos" - Erro ao buscar os trailers: ',
      error
    );
  }
}

export async function getSerieCredits(serieId) {
  try {
    const {
      data: { cast }
    } = await api.get(`tv/${serieId}/credits`);

    return cast;
  } catch (error) {
    console.error('Rota: "tv/:Id/credits" - Erro ao buscar elenco: ', error);
  }
}

export async function getSerieSimilar(serieId) {
  try {
    const {
      data: { results }
    } = await api.get(`tv/${serieId}/similar`);

    return results;
  } catch (error) {
    console.error(
      'Rota: "tv/:Id/similar" - Erro ao buscar series similares: ',
      error
    );
  }
}
