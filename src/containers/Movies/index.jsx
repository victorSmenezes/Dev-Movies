import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import {
  getMovies,
  getMoviesUpcoming,
  getNowPlayingMovies,
  getTopMovies
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster
} from './styles';

function Movies() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [recentMovies, setRecentMovies] = useState();
  const [moviesUpcoming, setMoviesUpcoming] = useState();
  const [topMovies, setTopMovies] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getNowPlayingMovies(),
        getMoviesUpcoming(),
        getTopMovies()
      ])
        .then(([movie, recentMovies, moviesUpcoming, topMovies]) => {
          setMovie(movie);
          setRecentMovies(recentMovies);
          setMoviesUpcoming(moviesUpcoming);
          setTopMovies(topMovies);
        })
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
      {moviesUpcoming && (
        <Slider
          info={moviesUpcoming}
          title={'Filmes que estão por vir'}
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
    </>
  );
}

export default Movies;
