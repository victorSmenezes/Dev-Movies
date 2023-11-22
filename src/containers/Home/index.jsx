import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import {
  getAiringTodaySeries,
  getMovies,
  getNowPlayingMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster
} from './styles';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [recentMovies, setRecentMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [airingTodaySeries, setAiringTodaySeries] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getNowPlayingMovies(),
        getTopMovies(),
        getAiringTodaySeries(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople()
      ])
        .then(
          ([
            movie,
            recentMovies,
            topMovies,
            airingTodaySeries,
            topSeries,
            popularSeries,
            topPeople
          ]) => {
            setMovie(movie);
            setRecentMovies(recentMovies);
            setTopMovies(topMovies);
            setAiringTodaySeries(airingTodaySeries);
            setTopSeries(topSeries);
            setPopularSeries(popularSeries);
            setTopPeople(topPeople);
          }
        )
        .catch((err) => console.error(err));
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={`${getImages(movie.backdrop_path)}`}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/detalhe-filme/${movie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="capa-do-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {recentMovies && (
        <Slider
          info={recentMovies}
          title={'Filmes Rolando agora 🔥'}
          route={`/detalhe-filme/`}
        />
      )}
      {topMovies && (
        <Slider
          info={topMovies}
          title={'Top Filmes'}
          route={`/detalhe-filme/`}
        />
      )}
      {airingTodaySeries && (
        <Slider
          info={airingTodaySeries}
          title={'Séries Saindo hoje 🔥'}
          route={`/detalhe-serie/`}
        />
      )}
      {topSeries && (
        <Slider
          info={topSeries}
          title={'Top Series'}
          route={`/detalhe-serie/`}
        />
      )}
      {popularSeries && (
        <Slider
          info={popularSeries}
          title={'Series Populares'}
          route={`/detalhe-serie/`}
        />
      )}
      {topPeople && (
        <Slider info={topPeople} title={'Top Artistas'} route={false} />
      )}
    </>
  );
}

export default Home;
